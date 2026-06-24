/**
 * NOTE: This is a placeholder for a server-side API endpoint.
 *
 * This file is structured to resemble a Next.js API route. It will not run
 * in the current client-side only React setup. You need to integrate this
 * into a backend framework like Next.js or Express to make it functional.
 *
 * Its purpose is to define the logic that should execute on the server
 * when a POST request is made to the `/api/contact` endpoint.
 */

// In a real Next.js app, you'd import these types:
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { sendEmail } from '../../lib/email';

// This is a mock handler for a generic server environment (like Express)
// `req` would have properties like `method`, `body`, etc.
// `res` would have methods like `status()`, `json()`, `end()`, etc.
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { name, email, company, service, message } = req.body;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bad Request: Missing required fields (name, email, message).' });
  }

  try {
    // --- DATA STORAGE ---
    // In a real application with a writable file system, you could append to a JSON file.
    // fs.appendFileSync('data/submissions.json', JSON.stringify(submission) + '\n');
    // For now, we just log it to the console as requested.
    const submission = {
        name,
        email,
        company: company || 'N/A',
        service: service || 'Not specified',
        message,
        submittedAt: new Date().toISOString(),
    };
    console.log('New Contact Form Submission:', submission);
    

    // --- EMAIL SENDING LOGIC ---
    // In a real application, you would call your email sending function here.
    // This requires environment variables for your email provider (e.g., Resend).
    // Example:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: 'Portfolio Contact Form <noreply@yourdomain.com>',
    //   subject: `New message from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'N/A'}</p>
    //     <p><strong>Service:</strong> ${service || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });
    
    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return res.status(200).json({ message: 'Message sent successfully!' });

  } catch (error) {
    console.error('API Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return res.status(500).json({ error: 'Failed to send message.', details: errorMessage });
  }
}
