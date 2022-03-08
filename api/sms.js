import 'dotenv/config';
import twilio from 'twilio';

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export default async function handler(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  try {
    await twilioClient.messages.create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: '+82' + req.body.to,
      body: req.body.message,
    });
    res.send(JSON.stringify({ ok: true }));
  } catch (error) {
    console.error(error);
    res.send(JSON.stringify({ ok: false }));
  }
}
