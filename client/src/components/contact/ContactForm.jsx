import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendContactMessage } from "../../services/contactService";

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setErrorMsg("");

            await sendContactMessage(data);

            setSuccess(true);
            reset(); 

            setTimeout(() => setSuccess(false), 3000);

        } catch (error) {
            setErrorMsg(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="form ">

            {success && (
                <div className="success-message">
                    Message sent successfully ✅
                </div>
            )}

            {errorMsg && (
                <div className="success-message red">
                    {errorMsg}
                </div>
            )}

            <form className="glow-card" onSubmit={handleSubmit(onSubmit)}>

                <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />

                <textarea
                    placeholder="Message"
                    {...register("message", { required: true })}
                />

                <button type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                </button>

            </form>
        </div>
    );
};

export default ContactForm;
