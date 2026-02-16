import { NavLink } from "react-router-dom";

import homeIcon from "../../assets/svg/home.svg";
import projectIcon from "../../assets/svg/project.svg";
import skillsIcon from "../../assets/svg/skills.svg";
import experienceIcon from "../../assets/svg/experience.svg";
import contactIcon from "../../assets/svg/contact.svg";

const Sidebar = () => {
    return (
        <div className="floating-nav">
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

export default Sidebar;
