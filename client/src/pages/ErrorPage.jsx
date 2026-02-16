import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const { status, data } = useRouteError();

    return (
        <section className="error-page" >
            <h1>Something went wrong 🚫</h1>
            <h2>Status: {status}</h2>
            <p>Message: {data}</p>
        </section>
    );
};

export default ErrorPage;