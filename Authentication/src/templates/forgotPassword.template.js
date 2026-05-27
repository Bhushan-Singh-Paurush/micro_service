export const forgotPasswordTemplate = (link) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reset Your Password</title>
  </head>

  <body
    style="
      margin: 0;
      padding: 0;
      background-color: #f4f7fb;
      font-family: Arial, Helvetica, sans-serif;
    "
  >
    <table
      width="100%"
      cellpadding="0"
      cellspacing="0"
      style="padding: 40px 0;"
    >
      <tr>
        <td align="center">
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            style="
              background: #ffffff;
              border-radius: 14px;
              overflow: hidden;
              box-shadow: 0 4px 18px rgba(0,0,0,0.08);
            "
          >
            
            <!-- Header -->
            <tr>
              <td
                align="center"
                style="
                  background: #0f172a;
                  padding: 35px 20px;
                "
              >
                <h1
                  style="
                    margin: 0;
                    color: #ffffff;
                    font-size: 30px;
                    font-weight: bold;
                  "
                >
                  Motion Tech
                </h1>

                <p
                  style="
                    margin-top: 10px;
                    color: #cbd5e1;
                    font-size: 15px;
                  "
                >
                  Secure Password Reset
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 40px 35px;">
                <h2
                  style="
                    margin: 0 0 20px;
                    color: #111827;
                    font-size: 24px;
                  "
                >
                  Forgot your password?
                </h2>

                <p
                  style="
                    color: #4b5563;
                    font-size: 16px;
                    line-height: 1.7;
                    margin-bottom: 25px;
                  "
                >
                  We received a request to reset your password for your
                  Motion Tech account.
                </p>

                <p
                  style="
                    color: #4b5563;
                    font-size: 16px;
                    line-height: 1.7;
                  "
                >
                  Click the button below to create a new password:
                </p>

                <!-- Button -->
                <table
                  cellpadding="0"
                  cellspacing="0"
                  style="margin: 30px 0;"
                >
                  <tr>
                    <td align="center">
                      <a
                        href="${link}"
                        target="_blank"
                        style="
                          background: #2563eb;
                          color: #ffffff;
                          text-decoration: none;
                          padding: 14px 28px;
                          border-radius: 8px;
                          display: inline-block;
                          font-size: 16px;
                          font-weight: bold;
                        "
                      >
                        Reset Password
                      </a>
                    </td>
                  </tr>
                </table>

                <p
                  style="
                    color: #6b7280;
                    font-size: 14px;
                    line-height: 1.7;
                  "
                >
                  If you didn’t request this password reset, you can safely
                  ignore this email.
                </p>

                <p
                  style="
                    color: #6b7280;
                    font-size: 14px;
                    line-height: 1.7;
                    margin-top: 25px;
                  "
                >
                  This link may expire for security reasons.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td
                align="center"
                style="
                  background: #f8fafc;
                  padding: 25px;
                  border-top: 1px solid #e5e7eb;
                "
              >
                <p
                  style="
                    margin: 0;
                    color: #94a3b8;
                    font-size: 13px;
                  "
                >
                  © ${new Date().getFullYear()} Motion Tech. All rights reserved.
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
