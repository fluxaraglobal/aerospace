import { MessageCircle, Mail, Phone } from "lucide-react";
import "../styles/FloatingContact.css";

export default function FloatingContact() {
  const phone = "7829598298";
  const email = "sales@aerospace.co.in";

  return (
    <div className="floating-contact">
      <a
        href={`https://wa.me/${phone}`}
        className="floating-icon whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle />
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@aerospace.co.in.com&su=Aerospace%20International%20Enquiry"
        className="floating-icon email"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send an email"
        title="Email us"
      >
        <Mail />
      </a>

      <a
        href={`tel:+${phone}`}
        className="floating-icon phone"
        aria-label="Call us"
        title="Call us"
      >
        <Phone />
      </a>
    </div>
  );
}
