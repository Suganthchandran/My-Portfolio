import React, { useRef } from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';

export const Contact = () => {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const firstName = form.current.firstName.value;
        const lastName = form.current.lastName.value;
        const from_name = `${firstName} ${lastName}`;

        const formData = {
            from_name: from_name,
            from_email: form.current.email.value,
            subject: form.current.subject.value,
            message: form.current.message.value,
        };

        emailjs.send(
            "service_121204",
            "template_ojqhwe7",
            formData,
            "pRIlgnTc2ydAq6G26"
        ).then((result) => {
            alert("Message Sent Successfully");
            form.current.reset(); 
        }, (error) => {
            alert("An error occurred, please try again");
            console.error("EmailJS error:", error);
        });
    };

    return (
        <div id="contact">
            <section className="contact">
                <div className="contact-message">
                    <h1>Contact Me</h1>
                    <form id="contact-form" ref={form} onSubmit={handleSubmit}>
                        <div className="contact-form-content">
                            <input type="text" id="FirstName" name="firstName" placeholder="Your FirstName" required />
                            <input type="text" id="LastName" name="lastName" placeholder="Your LastName" required />
                        </div>
                        <div className="contact-form-content">
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                            <input type="text" id="subject" name="subject" placeholder="Your Subject" required />
                        </div>
                        <textarea id="message" name="message" placeholder="Your Message" rows="10" required></textarea>
                        <button type="submit" className="btn-submit">Send</button>
                    </form>
                </div>
            </section>
        </div>
    );
};
