const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  // Allow only POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({
        success: false,
        error: "Method Not Allowed",
      }),
    };
  }

  try {
    const { name, email, service, message } = JSON.parse(event.body);

    // Basic validation
    if (!name || !email || !service || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          error: "All fields are required.",
        }),
      };
    }

    // Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ===============================
    // Email to you
    // ===============================
    await transporter.sendMail({
      from: `"Limitless Design Website" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Project Inquiry - ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto">
          <h2>📩 New Contact Form Submission</h2>

          <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
            <tr>
              <td><strong>Name</strong></td>
              <td>${name}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${email}</td>
            </tr>

            <tr>
              <td><strong>Service</strong></td>
              <td>${service}</td>
            </tr>
          </table>

          <h3>Project Details</h3>

          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    // ===============================
    // Confirmation email to customer
    // ===============================
    await transporter.sendMail({
      from: `"Limitless Design" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We've received your project inquiry 🎉",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto;line-height:1.6">
          <h2>Hello ${name},</h2>

          <p>
            Thank you for contacting <strong>Limitless Design</strong>.
          </p>

          <p>
            We have successfully received your project requirement and our team
            will review it shortly.
          </p>

          <p>
            We usually respond within <strong>24 hours</strong>.
          </p>

          <hr>

          <h3>Your Submission</h3>

          <p><strong>Service:</strong> ${service}</p>

          <p><strong>Project Details:</strong></p>

          <p style="white-space:pre-wrap">${message}</p>

          <hr>

          <p>
            If you have additional information or reference files, simply reply
            to this email and we'll include them in your inquiry.
          </p>

          <br>

          <p>
            Regards,<br>
            <strong>Limitless Design Team</strong>
          </p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
      }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};