import { useEffect, useState, useRef } from "react";
import sunIcon from "../../assets/svg/sun.svg";
import moonIcon from "../../assets/svg/moon.svg";

const Header = () => {
    const bodyRef = useRef(null);

    const fullText = "Full Stack Web Dev";
    const typingSpeed = 120;
    const deletingSpeed = 80;
    const pauseTime = 2000;

    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        bodyRef.current = document.body;
    }, []);

    useEffect(() => {
        bodyRef.current?.classList.toggle("darkmode", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    useEffect(() => {
        let timeout;

        if (!isDeleting && displayText.length < fullText.length) {
            timeout = setTimeout(() => {
                setDisplayText((prev) =>
                    fullText.slice(0, prev.length + 1)
                );
            }, typingSpeed);

        } else if (!isDeleting && displayText.length === fullText.length) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, pauseTime);

        } else if (isDeleting && displayText.length > 0) {
            timeout = setTimeout(() => {
                setDisplayText((prev) =>
                    fullText.slice(0, prev.length - 1)
                );
            }, deletingSpeed);

        } else if (isDeleting && displayText.length === 0) {
            timeout = setTimeout(() => {
                setIsDeleting(false);
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting]);


    const toggleTheme = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <header className="header">
            <h2 className="animated-title">
                {displayText}
                <span className="cursor">|</span>
            </h2>

            <button id="theme-switch" className="glow-card" onClick={toggleTheme}>
                <img
                    src={darkMode ? sunIcon : moonIcon}
                    alt="theme icon"
                    width="24"
                    height="24"
                />
            </button>
        </header>
    );
};

export default Header;
