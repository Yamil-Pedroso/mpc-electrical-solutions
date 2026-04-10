import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "terciary";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type LinkProps = BaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  > & {
    href: string;
    phoneNumber?: never;
  };

type PhoneProps = BaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "className" | "children" | "href"
  > & {
    phoneNumber: string;
    href?: never;
  };

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: never;
    phoneNumber?: never;
  };

type ButtonProps = LinkProps | PhoneProps | NativeButtonProps;

const Button = ({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center  text-sm font-semibold transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#ffffff] text-[#d90f1b] hover:bg-[#d90f1b] hover:text-white focus:ring-[#d90f1b]/40",
    secondary:
      "border-2 border-[#023962] bg-[#023962] text-white hover:bg-[#012f52] focus:ring-[#023962]/40",
    terciary: "bg-[#d90f1b] text-white focus:ring-[#d90f1b]/40",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as Omit<
      LinkProps,
      "variant" | "className" | "children"
    >;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  if ("phoneNumber" in rest && rest.phoneNumber) {
    const { phoneNumber, ...anchorRest } = rest as Omit<
      PhoneProps,
      "variant" | "className" | "children"
    >;
    return (
      <a href={`tel:${phoneNumber}`} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonRest } = rest as Omit<
    NativeButtonProps,
    "variant" | "className" | "children"
  >;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {children}
    </button>
  );
};

export default Button;
