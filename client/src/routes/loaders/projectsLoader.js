import api from "../../services/api";

export const projectsLoader = async () => {
    try {
        const res = await api.get("/project");
        return res.data;
    } catch (error) {
        console.error("Projects loading error:", error);

        const status = error.response?.status || 500;
        const message =
            error.response?.data?.message ||
            error.message ||
            "Failed to load projects";

        throw new Response(message, { status });
    }
};