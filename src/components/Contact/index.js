import React from 'react';

const ContactForm = () => {
   
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