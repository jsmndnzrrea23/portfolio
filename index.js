const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>                
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'vtkqv33bcxtefa77@ethereal.email',
                pass: 'QZqKtRPkPF3sMZjmvP'
            }
        })

        let mailOptions = {
            from: 'test@testacct.com',
            to: 'vtkqv33bcxtefa77@ethereal.email',
            replyTo: 'test@testacct.com',
            subject: 'New Message',
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return console.log(err)
            }

            console.log('Message sent: %s', info.message)
            comsole.log('Message URL %s', nodemailer.getTestMessageUrl(info))
        })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`listening to server ${PORT}`)
})