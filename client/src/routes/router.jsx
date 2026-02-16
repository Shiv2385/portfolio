import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";


import { projectsLoader } from "./loaders/projectsLoader";
import { experienceLoader } from "./loaders/experienceLoader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "projects",
                element: <Projects />,
                loader: projectsLoader,
                errorElement: <ErrorPage />
            },
            {
                path: "experience",
                element: <Experience />,
                loader: experienceLoader,
                errorElement: <ErrorPage />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "contact",
                element: <Contact />,
                errorElement: <ErrorPage />,

            },
        ],
    },
]);

export default router;