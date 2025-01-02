import nodemailer from 'nodemailer'

export async function post({ request }) {
  const formData = await request.json()

  const { name, email, message } = formData

  if (!name || !email || !message) {
    return new Response('Missing fields', { status: 400 })
  }

  // Set up your Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rhall477@gmail.com', // Replace with your Gmail address
      pass: 'your-app-password', // Replace with your Gmail App Password
    },
  })

  try {
    // Define the email options
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'recipient-email@gmail.com', // Replace with the recipient's Gmail address
      subject: 'New Contact Form Submission',
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    })

    return new Response(
      JSON.stringify({ message: 'Email sent successfully!' }),
      {
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return new Response('Failed to send email', { status: 500 })
  }
}
