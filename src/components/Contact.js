import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });
  const { name, email, message, subject, phone } = mailData;
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(null);
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0 ||
      phone.length === 0
    ) {
      setError("Please fill in all fields.");
      clearError();
    } else {
      setLoading(true);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, subject, message, phone }),
        });
        setLoading(false);
        if (res.ok) {
          setSuccess(true);
          setMailData({ name: '', email: '', message: '', subject: '', phone: '' });
          setTimeout(() => setSuccess(false), 5000);
        } else {
          setError("Failed to send message. Please try again later.");
          clearError();
        }
      } catch (err) {
        setLoading(false);
        setError("Failed to send message. Please try again later.");
        clearError();
      }
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 4000);
  };

  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What&apos;s your story? Get in touch</h4>
              <p>
                Always available for freelancing if the right project comes
                along, Feel free to contact me.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                    Palam, New Delhi, Delhi, India
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">dev.priyeshjaiswal@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+91 9582953692</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              {/* Success and error messages at the top */}
              {success && (
                <div style={{ marginBottom: 20, color: '#28a745', fontWeight: 'bold', fontSize: 18, textAlign: 'center', background: '#e6ffed', borderRadius: 6, padding: 10 }}>
                  Message sent successfully! I will get back to you soon.
                </div>
              )}
              {error && (
                <div style={{ marginBottom: 20, color: '#dc3545', fontWeight: 'bold', fontSize: 16, textAlign: 'center', background: '#ffe6e6', borderRadius: 6, padding: 10 }}>
                  {error}
                </div>
              )}
              <h4>Say Something</h4>
              <form id="contact-form" onSubmit={onSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="name"
                        onChange={onChange}
                        value={name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${error && !name ? "invalid" : ""}`}
                        type="text"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="email"
                        onChange={onChange}
                        value={email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${error && !email ? "invalid" : ""}`}
                        type="email"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        name="phone"
                        onChange={onChange}
                        value={phone}
                        id="phone"
                        placeholder="Phone Number *"
                        className={`form-control ${error && !phone ? "invalid" : ""}`}
                        type="tel"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={onChange}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${error && !subject ? "invalid" : ""}`}
                        type="text"
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={onChange}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className={`form-control ${error && !message ? "invalid" : ""}`}
                        disabled={loading}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send" style={{ position: 'relative' }}>
                      <input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value={loading ? "Sending..." : "send message"}
                        disabled={loading}
                      />
                      {loading && (
                        <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" style={{ color: '#2fbf71' }}></span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
