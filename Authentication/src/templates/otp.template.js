export const otpTemplate = (otp, validTime) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Motion Tech OTP</title>
  </head>

  <body style="
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial, sans-serif;
  ">

    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">

          <table width="600" cellpadding="0" cellspacing="0" style="
            background:#ffffff;
            margin-top:40px;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 4px 20px rgba(0,0,0,0.08);
          ">

            <!-- Header -->
            <tr>
              <td align="center" style="
                background:#111827;
                padding:30px;
                color:#ffffff;
              ">
                <h1 style="
                  margin:0;
                  font-size:28px;
                  letter-spacing:1px;
                ">
                  Motion Tech
                </h1>

                <p style="
                  margin-top:10px;
                  color:#d1d5db;
                  font-size:14px;
                ">
                  Secure Authentication System
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:40px;">

                <h2 style="
                  margin-top:0;
                  color:#111827;
                  font-size:24px;
                ">
                  Login Verification
                </h2>

                <p style="
                  color:#4b5563;
                  font-size:16px;
                  line-height:1.7;
                ">
                  We received a login request for your Motion Tech account.
                  Use the OTP below to complete your login.
                </p>

                <!-- OTP Box -->
                <div style="
                  margin:35px 0;
                  text-align:center;
                ">
                  <div style="
                    display:inline-block;
                    background:#2563eb;
                    color:#ffffff;
                    padding:18px 40px;
                    font-size:36px;
                    font-weight:bold;
                    border-radius:10px;
                    letter-spacing:8px;
                  ">
                    ${otp}
                  </div>
                </div>

                <p style="
                  color:#6b7280;
                  font-size:15px;
                  line-height:1.6;
                ">
                  This OTP is valid for 
                  <strong>${validTime}</strong>.
                </p>

                <p style="
                  color:#6b7280;
                  font-size:15px;
                  line-height:1.6;
                ">
                  Do not share this OTP with anyone.
                  Motion Tech will never ask for your verification code.
                </p>

                <p style="
                  color:#6b7280;
                  font-size:15px;
                  line-height:1.6;
                ">
                  If you did not request this login attempt,
                  please ignore this email or contact support immediately.
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="
                background:#f9fafb;
                padding:25px;
                border-top:1px solid #e5e7eb;
              ">

                <p style="
                  margin:0;
                  color:#9ca3af;
                  font-size:13px;
                ">
                  © ${new Date().getFullYear()} Motion Tech.
                  All rights reserved.
                </p>

              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>
  `;
};
