import skills from "../../data/skills";
import "../../styles/skills.css";

const categories = [
    "frontend",
    "backend",
    "database",
    "tools",
    "languages",
];

const SkillsTabs = () => {
    return (
        <div className="skills-tabs-container glow-card">
            <div className="skills-grid">
                {categories.map((category) =>
                    skills[category].map((skill, index) => (
                        <div key={category + index} className="skill-card">
                            <img src={skill.icon} alt={skill.name} />
                            <p>{skill.name}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SkillsTabs;
