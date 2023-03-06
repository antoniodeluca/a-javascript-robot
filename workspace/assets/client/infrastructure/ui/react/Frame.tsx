import React from "react";
import { useNavigate } from "react-router-dom";

const Frame = () => {
    const navigate = useNavigate();

    const switchToUIPrototype = () => {
        navigate("/prototype");
    };

    return (
        <div className="flex justify-content-center">
            <button onClick={switchToUIPrototype}>
                Switch to UI Prototype
            </button>
        </div>
    );
};

export { Frame };
