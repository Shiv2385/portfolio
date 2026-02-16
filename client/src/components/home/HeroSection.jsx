import Button from "../common/Button";
import '../../styles/home.css'

const HeroSection = () => {
    return (
        <section className="home-hero">
            <div className="home-left">
                <div className="home-left-box glow-card ">

                    <h1>Shiv Kumar Prajapati</h1>
                    <h3><span>Web Developer</span><span className="sep"> | </span><span>Software Developer</span></h3>
                    <p>
                        Architecting and building scalable web applications with precision and purpose, integrating AI where it adds measurable efficiency and intelligence. Designing robust systems from the ground up with clean, maintainable code, secure foundations, and performance - first thinking - built to scale, adapt, and deliver real-world impact.
                    </p>

                    <div className="home-buttons ">
                        <Button href="/resume.pdf"  download fileName="Shiv_Kumar_Prajapati_Resume.pdf">Download CV</Button>
                        <Button to="/contact">Contact Me</Button>
                    </div>
                </div>
            </div>

            <div className="home-right">
                <div className="home-right-box">
                    <img className="glow-card" src="/image.jpg"alt="Profile" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
