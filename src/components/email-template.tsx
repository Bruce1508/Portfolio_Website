import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  message,
}) => (
  <div style={{
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '40px 20px',
  }}>
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
    }}>
      {/* Professional Header */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '32px 40px',
        borderBottom: '3px solid #1a1a1a',
      }}>
        <h1 style={{
          color: '#1a1a1a',
          fontSize: '24px',
          fontWeight: '600',
          margin: '0',
          letterSpacing: '-0.3px',
        }}>
          New Contact Request
        </h1>
        <p style={{
          color: '#666666',
          fontSize: '14px',
          margin: '8px 0 0 0',
          fontWeight: '400',
        }}>
          Portfolio Contact Form Submission
        </p>
      </div>

      {/* Content */}
      <div style={{
        padding: '40px',
        backgroundColor: '#ffffff',
      }}>
        {/* Greeting */}
        <p style={{
          color: '#1a1a1a',
          fontSize: '15px',
          lineHeight: '1.6',
          margin: '0 0 24px 0',
        }}>
          You have received a new contact request through your portfolio website.
        </p>

        {/* From Section */}
        <table style={{
          width: '100%',
          marginBottom: '32px',
          borderCollapse: 'collapse',
        }}>
          <tbody>
            <tr>
              <td style={{
                padding: '12px 0',
                borderBottom: '1px solid #e0e0e0',
              }}>
                <div style={{
                  fontSize: '13px',
                  color: '#666666',
                  fontWeight: '500',
                  marginBottom: '4px',
                }}>
                  FROM
                </div>
                <div style={{
                  fontSize: '16px',
                  color: '#1a1a1a',
                  fontWeight: '600',
                }}>
                  {fullName}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{
                padding: '12px 0',
                borderBottom: '1px solid #e0e0e0',
              }}>
                <div style={{
                  fontSize: '13px',
                  color: '#666666',
                  fontWeight: '500',
                  marginBottom: '4px',
                }}>
                  EMAIL
                </div>
                <a href={`mailto:${email}`} style={{
                  fontSize: '15px',
                  color: '#0066cc',
                  textDecoration: 'none',
                }}>
                  {email}
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Message Section */}
        <div style={{
          marginBottom: '32px',
        }}>
          <div style={{
            fontSize: '13px',
            color: '#666666',
            fontWeight: '500',
            marginBottom: '12px',
          }}>
            MESSAGE
          </div>
          <div style={{
            backgroundColor: '#fafafa',
            padding: '20px',
            border: '1px solid #e0e0e0',
            fontSize: '15px',
            lineHeight: '1.7',
            color: '#1a1a1a',
          }}>
            {message}
          </div>
        </div>

        {/* Action Button */}
        <div style={{
          marginTop: '32px',
          paddingTop: '24px',
          borderTop: '1px solid #e0e0e0',
        }}>
          <a href={`mailto:${email}?subject=Re: Your message from portfolio`} style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#1a1a1a',
            color: '#ffffff',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            borderRadius: '4px',
          }}>
            Reply to this message
          </a>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        padding: '24px 40px',
        backgroundColor: '#fafafa',
        borderTop: '1px solid #e0e0e0',
      }}>
        <p style={{
          margin: '0 0 4px 0',
          fontSize: '13px',
          color: '#666666',
          lineHeight: '1.5',
        }}>
          This is an automated message from your portfolio contact form.
        </p>
        <p style={{
          margin: '0',
          fontSize: '12px',
          color: '#999999',
        }}>
          © {new Date().getFullYear()} Bruce Vo | brucevo.vercel.app
        </p>
      </div>
    </div>

    {/* Disclaimer */}
    <div style={{
      maxWidth: '600px',
      margin: '16px auto 0',
      padding: '0 20px',
    }}>
      <p style={{
        fontSize: '11px',
        color: '#999999',
        textAlign: 'center',
        lineHeight: '1.5',
      }}>
        This email contains information intended only for the person named above.
        If you are not the intended recipient, please delete this email immediately.
      </p>
    </div>
  </div>
);
