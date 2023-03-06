import { Menubar } from "primereact/menubar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Dashboard } from "./Dashboard";

const Frame = () => {
    const menuVoices = [
        {
            label: "Connect",
            icon: "pi pi-fw pi-wrench"
        },
        {
            label: "Training"
        },
        {
            label: "Querying"
        },
        {
            label: "Run",
            icon: "pi pi-fw pi-play"
        },
    ];

    const navigate = useNavigate();

    const switchToUIPrototype = () => {
        navigate("/");
    };

    return (
        <>
            <Menubar
                model={menuVoices}
                end={"UI Prototype"}
                style={{ marginBottom: "20px" }}
            />
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
            <div className="flex justify-content-center">
                <button onClick={switchToUIPrototype}>Switch to Default UI</button>
            </div>
        </>
    );
};

export { Frame };
