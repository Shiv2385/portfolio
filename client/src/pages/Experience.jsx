import { useLoaderData } from "react-router-dom";
import ExperienceCard from "../components/experience/ExperienceCard";

const Experience = () => {
    const experience = useLoaderData();

    return (
        <section className="experience-page">
            <h1>Experience</h1>

            {experience.map((item) => (
                <ExperienceCard key={item._id} item={item} />
            ))}
        </section>
    );
};

export default Experience;