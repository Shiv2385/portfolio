import { Link } from "react-router-dom";

const Button = ({
    children,
    to,
    href,
    onClick,
    type = "button",
    target,
    rel,
    download,
    fileName
}) => {
    // Internal navigation
    if (to) {
        return (
            <Link to={to}>
                <button type={type}>{children}</button>
            </Link>
        );
    }

    // External link
    if (href) {
        return (
            <a href={href} target={target} rel={rel} download={download ? fileName || true : undefined}>
                <button type={type}>{children}</button>
            </a>
        );
    }

    // Normal button
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
