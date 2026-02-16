import Tag from "../common/Tag";
import Button from "../common/Button";

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card glow-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="tags">
                {project.techStack?.map((tech, index) => (
                    <Tag key={index}>{tech}</Tag>
                ))}
            </div>

            <div className="project-actions">
                {project.codeUrl && (
                    <Button href={project.codeUrl} target="_blank" rel="noreferrer">
                        Code
                    </Button>
                )}

                {project.liveUrl && (
                    <Button href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live
                    </Button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;