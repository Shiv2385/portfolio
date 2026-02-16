import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import homeIcon from "../../assets/svg/home.svg";
import projectIcon from "../../assets/svg/project.svg";
import skillsIcon from "../../assets/svg/skills.svg";
import experienceIcon from "../../assets/svg/experience.svg";
import contactIcon from "../../assets/svg/contact.svg";

const BottomNav = () => {
    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth > 713) return;
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNav(false);
            }
            else {
                setShowNav(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`bottom-nav ${showNav ? "show" : "hide"}`}>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
                <img src={homeIcon} alt="home" />
            </NavLink>

            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                <img src={projectIcon} alt="projects" />
            </NavLink>

            <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>
                <img src={skillsIcon} alt="skills" />
            </NavLink>

            <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""}>
                <img src={experienceIcon} alt="experience" />
            </NavLink>

            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
                <img src={contactIcon} alt="contact" />
            </NavLink>
        </div>
    );
};

export default BottomNav;
