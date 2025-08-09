import { Resend } from 'resend';
import postgres from 'postgres';

const sql = postgres(process.env.NETLIFY_DATABASE_URL);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const { name, email, message } = JSON.parse(event.body);

    // Store the message in the database
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name TEXT,
        email TEXT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${name}, ${email}, ${message});
    `;

    // Send a notification email
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'abimanyu.jayaganesh@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p>You have a new contact form submission:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully!' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'An error occurred.' }),
    };
  }
}
