const transporter = require("../configs/mail")

module.exports = async ({to, html, text, subject}) => {
    await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
      });
} 
  
