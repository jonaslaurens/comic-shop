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
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_USER_PASSWORD,
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
      <br />
      <table>
        <tr>
          <th>Serie</th>
          <th>Number</th>
        </tr>
        ${body.order
          .map(
            (item) => `
        <tr>
          <td>${item.serie.title}</td>
          <td>${item.number}</td>
        </tr>
        `
          )
          .join('')}
      </table>
    `,
  };

  // send mail
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
