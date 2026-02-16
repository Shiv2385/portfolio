import Tag from "../common/Tag";
import "../../styles/experience.css";
import { FaBuilding } from "react-icons/fa";


const ExperienceCard = ({ item }) => {
    return (
        <div className="experience-card glow-card">
            <h3>{item.role}</h3>
            <div className="experience-names">
                <h4><FaBuilding /> {item.company}</h4>
                <p className="duration">{item.duration}</p>
            </div>

            <ul className="experience-points">
                {item.responsibilities?.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>

            <div className="experience-tech">
                {item.techStack?.map((tech, index) => (
                    <Tag key={index}>{tech}</Tag>
                ))}
            </div>
        </div>
    );
};

export default ExperienceCard;