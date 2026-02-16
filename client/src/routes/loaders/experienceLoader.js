import api from "../../services/api";

export const experienceLoader = async () => {
    try {
        const res = await api.get("/experience");
        return res.data;
    } catch (error) {
        console.error("Experience loading error:", error);

        const status = error.response?.status || 500;
        const message =
            error.response?.data?.message ||
            error.message ||
            "Failed to load experience";

        throw new Response(message, { status });
    }
};