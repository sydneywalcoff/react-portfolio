import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const email = await sendEmail(formState);
        if(email) {
            console.log('email sent')
        }
    }

    function sendEmail({ name, text, email }) {
        const url = 'https://api.sendgrid.com/v3/mail/send';
        const options = {
            headers: {
                "Authorization": "Bearer $SENDGRID_API_KEY",
                'Content-Type': 'application/json'
            },
            data: {
                "personalizations": [
                    {
                        "to": [
                            {
                                "email": "sydney.walcoff@gmail.com",
                                "name": "Sydney Walcoff"
                            }
                        ]
                    },
                    {
                        "to": [
                            {
                                "email": "sydney.walcoff@gmail.com",
                                "name": "Sydney Walcoff"
                            }
                        ]
                    }
                ],
                "from": {
                    "email": "sydney.walcoff@gmail.com"
                },
                "reply_to": {
                    "email": "sydney.walcoff@gmail.com",
                    "name": "Sydney Walcoff"
                },
                "subject": "Website - Contact Form",
                "content": [
                    {
                        "type": "text/html",
                        "value": `<p>name: ${name}</p>
                        <p>email:${email}</p>
                        <p>message: ${text}</p>`
                    }
                ]
            }

        }
        const runFetch = async () => {
            try {
                const res = await fetch(url, options);
                console.log(res)
            } catch (e) {
                console.log(e);
            }
        };
        runFetch();
    }

    return (
        <section className="container contact p-3">
            <h1 className='row display-1 justify-content-center' id='title'>Contact me</h1>
            <form id="contact-form" className="row justify-content-center" onSubmit={handleSubmit}>
                <div className='row'>
                    <label htmlFor="name" className='font-weight-bold'>Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className='row'>
                    <label htmlFor="email" className='font-weight-bold'>Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className='row'>
                    <label htmlFor="message" className='font-weight-bold'>Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <div className="row justify-content-center mt-2">
                    <button className="btn btn-outline-dark" id="contact-button" type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;