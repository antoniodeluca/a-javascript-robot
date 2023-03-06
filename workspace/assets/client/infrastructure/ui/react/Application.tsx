import React from "react";
import { Route, Routes } from "react-router-dom";

import { Frame } from "./Frame";
import { Frame as PrototypeFrame } from "./prototype/Frame";

const Application = () => {
    return (
        <Routes>
            <Route path="/*" element={<Frame />} />
            <Route path="/prototype/*" element={<PrototypeFrame />} />
        </Routes>
    );
};

export { Application };
