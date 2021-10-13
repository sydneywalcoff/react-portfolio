const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log(process.env.SENDGRID_API_KEY)

const createAndSendEmail = (name, email, text) =>  {
    const msg = {
        to: 'sydney.walcoff@gmail.com',
        from: 'sydney.walcoff@gmail.com',
        subject: 'Website Contact Form',
        text: `Name: ${name},
        message: ${text}
        email: ${email}`,
        html: `<p>Name: ${name},
        message: ${text}
        email: ${email}</p>`
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
};

module.exports = createAndSendEmail();