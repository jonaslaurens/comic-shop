const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);

  // Check honeypot
  if (body.siroop) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'No robots allowed here ERR47844' }),
    };
  }

  // Validate inputs
  const requiredFields = ['name', 'email', 'message'];

  for (const field of requiredFields) {
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          msg: `Oops! You are missing the ${field} field`,
        }),
      };
    }
  }

  if (body[requiredFields[2]].length <= 1) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        msg: `Most Messages Contain Words`,
      }),
    };
  }

  const mailContent = `
    <p>${body.name} contacted with the following message</p>
      <p>${body.message}</p>
      <hr />
      <table style="width: 100%;background-color: #ffffff;border-collapse: collapse;border-width: 1px;border-color: #a51818;border-style: solid;color: #000000;">
        <thead style="background-color: #a51818;">
        <tr>
          <th style="border-width: 1px;border-color: #a51818;border-style: solid;padding: 3px;">Serie</th>
          <th style="border-width: 1px;border-color: #a51818;border-style: solid;padding: 3px;">Number</th>
        </tr>
        </thead>
        <tbody>
          ${body.order
            .map(
              (item) => `
          <tr>
            <td style="border-width: 1px;border-color: #a51818;border-style: solid;padding: 3px;">${item.serie}</td>
            <td style="border-width: 1px;border-color: #a51818;border-style: solid;padding: 3px;">${item.number}</td>
          </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
      </hr >
      <p>Email: ${body.email}</p>
      `;

  // Create email
  const msg = {
    to: process.env.SENDGRID_USER, // Change to your recipient
    from: process.env.SENDGRID_USER, // Change to your verified sender
    subject: 'Order placed',
    html: mailContent,
  };

  // Sending the message
  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'Success',
      }),
    };
  } catch (error) {
    return {
      statusCode: error.code,
      body: JSON.stringify({
        msg: error.message,
      }),
    };
  }
};
