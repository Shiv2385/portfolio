import api from "./api";

export const sendContactMessage = async (data) => {
    try {
        const res = await api.post("/contact", data);

        if (res.status < 200 || res.status >= 300) {
            throw new Error("Failed to send message");
        }

        return res.data;
    } catch (error) {
        const message =
            error.response?.data?.message ||
            error.message ||
            "Server error while sending message";

        throw new Error(message);
    }
};
