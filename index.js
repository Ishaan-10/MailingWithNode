const nodemailer = require("nodemailer");
require('dotenv').config()


async function main() {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAILID, 
      pass: process.env.USER_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Johnny 👻" <johnnychase1495@gmail.com>', // sender address
    to: "ishaanbholayo@gmail.com,", // list of receivers
    cc:"", //Carbon copy
    bcc:"", // Blind carbon copy

    subject: "Mailing from Node.Js", // Subject line
    text: "Below should be html body", // plain text body
    html: "<b>Hello world (HTML)</b>", // html body
    attachments: [{
        filename:"test-image.gif", //Important to attach file extension
        path:"./2471303.gif"
    },{
        href:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    }]
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);