import { useLoaderData } from "react-router-dom";
import ProjectCard from "../components/projects/ProjectCard";
import "../styles/projects.css";

const Projects = () => {
    const projects = useLoaderData();

    return (
        <section className="projects-page">
            <h1>Projects</h1>

            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;