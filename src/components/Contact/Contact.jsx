import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function ContactUs() {
  const [state, handleSubmit] = useForm("meogaeva");

  return (
    <section className="contactus-bg">
      <div className="contactus-header">
        <h1>GET IN TOUCH</h1>
        <p>Fill up the form to get in touch with us.</p>
      </div>
      <div className="contactus-card">
        <div className="contactus-form">
          <h2>Fill the Form</h2>
          {state.succeeded ? (
            <div className="success-message">Thanks for getting in touch!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="contactus-row">
                <div className="contactus-input-group">
                  <label htmlFor="name">Name*</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your Name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                <div className="contactus-input-group">
                  <label htmlFor="phone">Phone*</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    placeholder="+911234567890"
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                </div>
              </div>
              <div className="contactus-row">
                <div className="contactus-input-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your Email"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="contactus-input-group">
                  <label htmlFor="subject">Subject*</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    required
                    placeholder="Enter Subject"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </div>
              </div>
              <div className="contactus-input-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Write your message..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <button type="submit" disabled={state.submitting}>Send Message</button>
            </form>
          )}
        </div>
        <div className="contactus-details">
          <h2>Contact Details</h2>
          <p><span>📍</span> Address: Pune, Maharashtra, India</p>
          <p><span>📞</span> Phone: +91 9370034794</p>
          <p><span>📧</span> Email: shahidsrs93@gmail.com</p>
          <h3>Our Location</h3>
          <div className="contactus-map">
            <iframe
              title="Pune Map"
              width="100%"
              height="180"
              src="https://maps.google.com/maps?width=399&amp;height=245&amp;hl=en&amp;q=Magarpatta%20Pune+(Pune%20City)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;