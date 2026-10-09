import { useEffect } from "react";
import { Alignment, EventType, Fit, Layout, useRive } from "@rive-app/react-webgl2";
import logoAnimation from "@/assets/animations/rive/mpc-es.riv?url";
import { assets } from "@/assets";

const STORAGE_KEY = "mpc_logo_animation_played";
// Also prevents duplicate playback when storage is unavailable or the sticky
// Navbar mounts another instance during the same visit.
let playedThisVisit = false;

type AnimatedLogoProps = {
  className?: string;
};

export default function AnimatedLogo({ className = "" }: AnimatedLogoProps) {
  const { rive, container, setContainerRef, setCanvasRef } = useRive({
    src: logoAnimation,
    autoplay: false,
    shouldDisableRiveListeners: true,
    layout: new Layout({ fit: Fit.Contain, alignment: Alignment.Center }),
  }, { shouldResizeCanvasToContainer: false });

  useEffect(() => {
    if (!rive || !container) return;
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        rive.resizeDrawingSurfaceToCanvas();
        // Redraw the resting frame after resizing a paused canvas.
        const staticAnimation = rive.animationNames.find((name) => /static/i.test(name));
        if (!rive.isPlaying && staticAnimation) {
          rive.pause(staticAnimation);
          rive.scrub(staticAnimation, 0);
        }
      });
    });
    observer.observe(container);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [rive, container]);

  useEffect(() => {
    if (!rive) return;

    const names = rive.animationNames;
    const staticAnimation = names.find((name) => /static/i.test(name));
    const intro = names.find((name) => !/static/i.test(name));
    const showRestingLogo = () => {
      rive.pause();
      if (staticAnimation) {
        rive.pause(staticAnimation);
        rive.scrub(staticAnimation, 0);
      }
    };

    let hasPlayed = playedThisVisit;
    try {
      hasPlayed ||= localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      // Private browsing may block storage; the in-memory flag still works.
    }

    if (hasPlayed || !intro) {
      showRestingLogo();
      return;
    }

    // Claim playback before starting so another Navbar cannot replay it.
    playedThisVisit = true;
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Keep working when localStorage is unavailable.
    }

    rive.on(EventType.Loop, showRestingLogo);
    rive.on(EventType.Stop, showRestingLogo);
    rive.play(intro);

    return () => {
      rive.off(EventType.Loop, showRestingLogo);
      rive.off(EventType.Stop, showRestingLogo);
      rive.pause();
    };
  }, [rive]);

  return (
    <div
      ref={setContainerRef}
      role="img"
      aria-label="MPC Electrical Solutions logo"
      className={`relative h-20 w-[154.49px] max-w-[28vw] shrink-0 lg:h-22 lg:w-[169.94px] md:max-w-none ${className}`}
    >
      <img
        src={assets.mpc}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full object-contain brightness-110 transition-opacity duration-500 ease-out motion-reduce:transition-none ${rive ? "opacity-0" : "opacity-100"}`}
      />
      <canvas
        ref={setCanvasRef}
        className={`pointer-events-none absolute inset-0 h-full w-full transition-opacity duration-500 ease-out motion-reduce:transition-none ${rive ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />
    </div>
  );
}
