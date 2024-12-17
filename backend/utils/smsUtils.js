const twilio = require('twilio');

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendSMS = async (to, message) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });
  } catch (error) {
    console.error('Error sending SMS:', error.message);
    throw error;
  }
};
