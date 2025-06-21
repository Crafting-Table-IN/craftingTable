import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const ContactForm = (props) => {

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        company: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                company: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-form">
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text1">Name*</label>
                        <div className="input-box">
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-field">
                        <label htmlFor="text2">Email*</label>
                        <div className="input-box">
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field">
                        <label htmlFor="text3">Phone*</label>
                        <div className="input-box">
                            <input
                                value={forms.phone}
                                type="phone"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)} />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="input-field text-field">
                        <label htmlFor="text5">Message</label>
                        <div className="input-box">
                            <textarea
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.message}
                                type="text"
                                name="message"
                                className="form-control"
                                placeholder="How can we help you?">
                            </textarea>
                            {validator.message('message', forms.message, 'required')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="cp-det-btn mt-20 d-grid">
                <button className="cp-btn" type='submit'>Send us a message <i className="fal fa-arrow-right"></i></button>
            </div>
        </form>
    )
}

export default ContactForm;