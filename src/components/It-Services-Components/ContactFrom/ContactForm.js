import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
import icon1 from "../../../images/icon/user-black.svg";
import icon2 from "../../../images/icon/sms.svg";
import icon3 from "../../../images/icon/call.svg";
import icon4 from "../../../images/icon/company-icon.svg";
import icon5 from "../../../images/icon/sms-white-icon01.svg";

const ContactForm = (props) => {
  const [forms, setForms] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [validator] = useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const changeHandler = (e) => {
    setForms({ ...forms, [e.target.name]: e.target.value });
    if (validator.allValid()) {
      validator.hideMessages();
    } else {
      validator.showMessages();
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setLoading(true);
      try {
        const form = new FormData();
        form.append(
          "entry.1389755010",
          [
            forms.name,
            forms.email,
            forms.subject,
            forms.phone,
            forms.message,
          ].join(", ")
        );
        form.append("entry.2082813172", forms.email);
        form.append("entry.2024966852", forms.subject);
        form.append("entry.1386270955", forms.phone);
        form.append("entry.817831651", forms.message);
        // Replace with your actual API endpoint
        await fetch(
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfLIWNFMYyN26X5AxZBnTw3FsXsS_71mCMFsiKezYoXY4NkBg/formResponse",
          {
            method: "POST",
            mode: "no-cors",
            body: form,
          }
        );

        setSubmitStatus("success");

        validator.hideMessages();
        setForms({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitStatus("error");
      } finally {
        setLoading(false);
      }
    } else {
      validator.showMessages();
    }
  };

  return (
    <form className="contact-form" onSubmit={(e) => submitHandler(e)}>
      {submitStatus === "success" && (
        <div className="alert alert-success mb-4">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      {submitStatus === "error" && (
        <div className="alert alert-danger mb-4">
          Something went wrong. Please try again later.
        </div>
      )}
      {validator && !validator.allValid() && (
        <div className="alert alert-danger mb-4">
          <ul className="mb-0 ps-3">
            {Object.entries(validator.getErrorMessages(forms)).map(
              ([field, message]) => (
                <li key={field}>{message}</li>
              )
            )}
          </ul>
        </div>
      )}

      <div className="row">
        <div className="col-lg-6">
          <div className="input-field pos-rel">
            <input
              value={forms.name}
              type="text"
              name="name"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Rahul Sharma"
            />
            {/* {validator.message("name", forms.name, "required|alpha_space")} */}
            <div className="img">
              <img src={icon1} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-field pos-rel">
            <input
              value={forms.email}
              type="email"
              name="email"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="rahul@example.com"
            />
            {/* {validator.message("email", forms.email, "required|email")} */}
            <div className="img">
              <img src={icon2} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-field pos-rel">
            <input
              value={forms.phone}
              type="phone"
              name="phone"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="+91 1234567890"
            />
            {/* {validator.message("phone", forms.phone, "required|phone")} */}
            <div className="img">
              <img src={icon3} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="input-field pos-rel">
            <input
              value={forms.subject}
              type="text"
              name="subject"
              className="form-control"
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              placeholder="Subject"
            />
            {/* {validator.message("subject", forms.subject, "required")} */}
            <div className="img">
              <img src={icon4} alt="" />
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="input-field text-field pos-rel">
            <textarea
              onBlur={(e) => changeHandler(e)}
              onChange={(e) => changeHandler(e)}
              value={forms.message}
              type="text"
              name="message"
              className="form-control"
              placeholder="How can we help you?"
            ></textarea>
            {/* {validator.message("message", forms.message, "required")} */}
            <div className="img">
              <img src={icon2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-btn">
        <button
          type="submit"
          className="thm-btn btn-effect_2"
          disabled={loading}
        >
          {loading ? "Sending..." : "Let's talk"} <img src={icon5} alt="" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
