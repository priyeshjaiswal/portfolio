import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919582953692" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <img
        src="/static/img/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
