// app/api/contact/route.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_PASSWORD,
  },
});

export async function POST(req) {
  try {
    const { email, message } = await req.json();
    const htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>New Message</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                background: #f9f9f9;
                color: #333;
                padding: 20px;
              }
              .container {
                background: #ffffff;
                padding: 20px;
                border: 1px solid #ddd;
                max-width: 600px;
                margin: auto;
                border-radius: 8px;
              }
             
              p {
                margin: 10px 0;
              }
              .label {
                font-weight: bold;
              }
              .footer {
                margin-top: 30px;
                font-size: 0.9em;
                color: #777;
              }
            </style>
          </head>
          <body>
            <div class="container">
             
              <p><span class="label">From:</span> ${email}</p>
              <p><span class="label">Message:</span></p>
              <p>${message}</p>
        
              <div class="footer">
                This message was sent via the portfolio contact form.
              </div>
            </div>
          </body>
        </html>
        
        `;

    // Compose the email
    const mailOptions = {
      from: email,
      to: "prajalmhrzn@gmail.com",
      subject: "New message from portfolio",
      html: htmlTemplate,
    };

    // Send email
    const response = await transporter.sendMail(mailOptions);

    console.log("Response:", response);

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Email failed to send" }, { status: 500 });
  }
}
