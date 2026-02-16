import ContactForm from "../components/contact/ContactForm";
import gmailIcon from "../assets/svg/gmail.svg";
import locationIcon from "../assets/svg/location.svg";
import linkedinIcon from "../assets/svg/linkedin.svg";
import { FaGithubSquare } from "react-icons/fa";
import "../styles/contact.css";

const Contact = () => {
    return (
        <section className="contact-container">

            <div className="contact-info">
                <div className="contact-info-box glow-card">
                    <h1>Let's Connect</h1>
                    <p>Feel free to reach out for collaborations or opportunities.</p>

                    <div className="contact-item">
                        <a href="mailto:shiv821305@gmail.com" className="contact-link">
                            <img src={gmailIcon} alt="gmail" />
                            <span>shiv821305@gmail.com</span>
                        </a>
                    </div>

                    <div className="contact-item">
                        <a
                            href="https://maps.app.goo.gl/bg4U7GeCU1LvkdTg7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                        >
                            <img src={locationIcon} alt="location" />
                            <span>Alappuzha, Kerala, India</span>
                        </a>
                    </div>

                    <div className="contact-social">
                        <a href="https://github.com/shiv2385" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare style={{ color: 'var(--text-color)', width: '60px', height: '60px' }} />
                        </a>

                        <a href="https://www.linkedin.com/in/shivprajapati2385/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>

            <ContactForm />
        </section>
    );
};

export default Contact;
