import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Create a transporter using your email service (e.g., Gmail, SendGrid, etc.)
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service (e.g., 'gmail', 'sendgrid', etc.)
  auth: {
    user: process.env.EMAIL_USER, // Your email address (set in .env.local)
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password (set in .env.local)
  },
});

export async function POST(request) {
  try {
    const { fullName, phoneNumber, email, schoolName, service } =
      await request.json();

    // Validate request body
    if (!fullName || !phoneNumber || !email || !schoolName || !service) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "digivity.in@gmail.com", // Replace with your recipient email (e.g., your business email)
      subject: `New Demo Request From ${fullName}`,
      text: `Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nSchool Name: ${schoolName}\nService: ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px; color: #333;">
  <h2 style="color: #ff6600; margin-bottom: 24px;">🎉 New Contact Form Submission</h2>

  <table style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #ddd; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
    <tbody>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7; width: 40%;">Full Name</td>
        <td style="padding: 14px 16px;">${fullName}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7;">Phone Number</td>
        <td style="padding: 14px 16px;">${phoneNumber}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7;">Email</td>
        <td style="padding: 14px 16px;">${email}</td>
      </tr>
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7;">School Name</td>
        <td style="padding: 14px 16px;">${schoolName}</td>
      </tr>
      <tr>
        <td style="padding: 14px 16px; font-weight: bold; background-color: #f7f7f7;">Service</td>
        <td style="padding: 14px 16px;">${service}</td>
      </tr>
    </tbody>
  </table>

  <p style="margin-top: 24px; color: #888; font-size: 14px;">You received this message via your website contact form.</p>
</div>

      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
