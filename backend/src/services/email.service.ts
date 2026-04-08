import { resend } from "../config/resend";
import { env } from "../config/env";

type SendContactEmailParams = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function sendContactEmail({
  fullName,
  email,
  phone,
  service,
  message,
}: SendContactEmailParams) {
  const logoUrl =
    env.logoUrl ||
    "https://res.cloudinary.com/ddgf7ijdc/image/upload/v1775596231/logo_opt_ashfdc.jpg";

  const html = `
    <div style="margin:0;padding:0;background:#f4f7fb;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
        <div style="background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e7edf5;">
          <div style="background:#051a37;padding:28px 32px;">
            <img
              src="${logoUrl}"
              alt="MPC Electrical Solutions logo"
              style="display:block;width:88px;height:auto;margin:0 0 18px 0;"
            />

            <p style="margin:0;font-size:12px;letter-spacing:1.6px;text-transform:uppercase;color:#ffffffb3;">
              MPC Electrical Solutions
            </p>

            <h1 style="margin:10px 0 0;font-size:26px;line-height:1.2;color:#ffffff;">
              New Contact Request
            </h1>
          </div>

          <div style="padding:32px;">
            <div style="margin-bottom:24px;padding:20px;border:1px solid #e7edf5;border-radius:16px;background:#fbfcfe;">
              <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:1.4px;color:#6b7280;">
                Service requested
              </p>
              <p style="margin:0;font-size:18px;font-weight:700;color:#051a37;">
                ${service}
              </p>
            </div>

            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;">
              <div style="padding:18px;border:1px solid #e7edf5;border-radius:16px;">
                <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1.4px;color:#6b7280;">
                  Full name
                </p>
                <p style="margin:0;font-size:15px;color:#051a37;font-weight:600;">
                  ${fullName}
                </p>
              </div>

              <div style="padding:18px;border:1px solid #e7edf5;border-radius:16px;">
                <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1.4px;color:#6b7280;">
                  Phone
                </p>
                <p style="margin:0;font-size:15px;color:#051a37;font-weight:600;">
                  ${phone}
                </p>
              </div>
            </div>

            <div style="margin-bottom:24px;padding:18px;border:1px solid #e7edf5;border-radius:16px;">
              <p style="margin:0 0 6px;font-size:12px;text-transform:uppercase;letter-spacing:1.4px;color:#6b7280;">
                Email
              </p>
              <p style="margin:0;font-size:15px;color:#051a37;font-weight:600;">
                ${email}
              </p>
            </div>

            <div style="padding:22px;border:1px solid #e7edf5;border-radius:16px;background:#ffffff;">
              <p style="margin:0 0 12px;font-size:12px;text-transform:uppercase;letter-spacing:1.4px;color:#6b7280;">
                Message
              </p>
              <p style="margin:0;font-size:15px;line-height:1.8;color:#374151;white-space:pre-line;">
                ${message}
              </p>
            </div>

            <div style="margin-top:28px;padding-top:22px;border-top:1px solid #eef2f7;">
              <p style="margin:0;font-size:14px;color:#6b7280;">
                Tip: reply directly to this email to answer the client faster.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return resend.emails.send({
    from: env.emailFrom,
    to: env.emailTo,
    replyTo: email,
    subject: `New Contact Request — ${service}`,
    html,
    text: `
New Contact Request

Service: ${service}
Full name: ${fullName}
Email: ${email}
Phone: ${phone}

Message:
${message}
    `,
  });
}
