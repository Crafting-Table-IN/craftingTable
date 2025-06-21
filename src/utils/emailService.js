import nodemailer from 'nodemailer';

// Create transporter once
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send contact form email
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.subject - Email subject
 * @param {string} formData.phone - Sender's phone
 * @param {string} formData.company - Sender's company
 * @param {string} formData.message - Message content
 * @returns {Promise} - Promise resolving to the send result
 */
export const sendContactEmail = async (formData) => {
  const { name, email, subject, phone, company, message } = formData;
  
  try {
    // Send notification email to site owner
    const result = await transporter.sendMail({
      from: email,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Contact Form: ${subject || 'New message from website'}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color:#305acd;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });
    
    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us',
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2 style="color:#305acd;">Thank You for Contacting Us</h2>
          <p>Dear ${name},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Thank you for your interest in our services.</p>
          <p>Best regards,</p>
          <p><strong>The Support Team</strong></p>
        </div>
      `,
    });
    
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};