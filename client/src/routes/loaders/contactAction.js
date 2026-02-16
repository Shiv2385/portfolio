import api from "../../services/api";
import { redirect } from "react-router-dom";

export const contactAction = async ({ request }) => {
    const formData = await request.formData();

    const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    };

    if (!data.name || !data.email || !data.message) {
        throw new Response("All fields are required", { status: 400 });
    }

    try {
        const res = await api.post("/contact", data);

        if (res.status < 200 || res.status >= 300) {
            throw new Response("Failed to send message", { status: res.status });
        }
        return redirect("/contact?success=true");

    } catch (error) {
        const status = error.response?.status || 500;
        const message =
            error.response?.data?.message ||
            error.message ||
            "Server error while sending message";
        throw new Response(message, { status });
    }
};
