import { Link } from "react-router-dom";

export default function Contacts() {
  return (
    <div id="contact" className="w-100">
      <span>Got a project? Need an unfair advantage?</span>
      <Link to="/contact" aria-label="Get in touch" className="relative">
        <img className="w-100" src="images/contact.png" alt="Get in Touch" />
      </Link>
    </div>
  );
}
