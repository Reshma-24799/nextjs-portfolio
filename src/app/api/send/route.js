import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Reshma <reshma24799@gmail.com>',
      to: ['delivered@resend.dev'],
      subject: 'Hello world',
      react: <>
            {/* <h1>{subject}</h1> */}
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
      </>,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
