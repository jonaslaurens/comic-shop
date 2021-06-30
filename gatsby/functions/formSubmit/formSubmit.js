const dotenv = require('dotenv');
const nodemailer = require('nodemailer');

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

  // setup connection
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_USER_PASSWORD,
      clientId: process.env.GMAIL_OAUTH_ID,
      clientSecret: process.env.GMAIL_OAUTH_SECRET,
      refreshToken: process.env.GMAIL_OAUTH_REFRESHTOKEN,
    },
  });

  // setup mail
  const mailOptions = {
    from: body.name,
    to: process.env.GMAIL_RECEPIENT,
    subject: 'Hall of Justice Order',
    generateTextFromHTML: true,
    html: `
      <p>${body.name} contacted with the following message</p>
      <p>${body.message}</p>
      <hr />
      <table style="width: 100%;background-color: #ffffff;border-collapse: collapse;border-width: 1px;border-color: #a51818;border-style: solid;color: #000000;">
  <thead style="background-color: #a51818;">
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
    `,
  };

  // send mail

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return {
        statusCode: error.code,
        body: JSON.stringify({
          msg: error.message,
        }),
      };
    }
    console.log(`Email sent: ${info.response}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'Success',
      }),
    };
  });
};
