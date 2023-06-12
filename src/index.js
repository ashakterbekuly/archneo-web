import React from 'react';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AboutUs} from "./pages/AboutUs";
import {Architecture} from "./pages/Architecture";
import {Contact} from "./pages/Contact";
import {Events} from "./pages/Events";
import {Faq} from "./pages/Faq";
import {createRoot} from "react-dom/client";
import {Login} from "./pages/Login";
import {Projects} from "./pages/Projects";
import {RegisterArch} from "./pages/RegisterArch";
import {RegisterClient} from "./pages/RegisterClient";
import {RegisterRole} from "./pages/RegisterRole";
import {SampleArch} from "./pages/SampleArch";
import {Support} from "./pages/Support";
import {Terms} from "./pages/Terms";
import {Profile} from "./pages/Profile";
import {HouseDrafts} from "./pages/house-drafts";
import {Interior} from "./pages/Interior";
import {Urban} from "./pages/Urban";
import {Reconstructions} from "./pages/Reconstructions";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "about",
        element: <AboutUs />,
    },
    {
        path: "architecture/:id",
        element: <Architecture />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "events",
        element: <Events />
    },
    {
        path: "faq",
        element: <Faq />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "projects",
        element: <Projects />
    },
    {
        path: "register-arch",
        element: <RegisterArch />
    },
    {
        path: "register-client",
        element: <RegisterClient />
    },
    {
        path: "register-role",
        element: <RegisterRole />
    },
    {
        path: "sample-arch",
        element: <SampleArch />
    },
    {
        path: "support",
        element: <Support />
    },
    {
        path: "terms",
        element: <Terms />
    },
    {
        path: "profile",
        element: <Profile />
    },
    {
        path: "house-drafts",
        element: <HouseDrafts />
    },
    {
        path: "interior",
        element: <Interior />
    },
    {
        path: "urban",
        element: <Urban />
    },
    {
        path: "reconstructions",
        element: <Reconstructions />
    }
]);


createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
