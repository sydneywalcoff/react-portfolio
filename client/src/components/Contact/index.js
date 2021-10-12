import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const ContactForm = () => {
    const [formState, setFormState] = useState({ name: '', email:'', message:'' });
    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage]= useState('');

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is invalid');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`Your ${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({...formState, [e.target.value]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className = "contact p-3 container">
            <h1 className='row display-4 justify-content-center' id='title'>Contact me</h1>
            <div className="row">
                <p className="text-center">reach out to me at <br></br><a href="mailto:sydney.walcoff@gmail.com">my email</a> <br></br>or<br></br> <a href="github.com/sydneywalcoff">my github</a> <br></br>or<br></br> <a href="linkedin.com/in/sydneywalcoff">my linkedin</a>
                </p>
                
            </div>
        </section>  
    );
};

export default ContactForm;