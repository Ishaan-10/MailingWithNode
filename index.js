const nodemailer = require("nodemailer");
require('dotenv').config()


async function main() {



  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAILID, // generated ethereal user
      pass: process.env.USER_PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Johnny 👻" <johnnychase1495@gmail.com>', // sender address
    to: "ishaanbholayo@gmail.com, baz@example.com", // list of receivers
    subject: "Mailing from Node.Js", // Subject line
    text: "Below should be html body", // plain text body
    html: "<b>Hello world (HTML)</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);