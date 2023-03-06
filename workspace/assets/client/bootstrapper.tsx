import React from "react";

import { mount } from "./infrastructure/ui/react";
import { Application } from "./infrastructure/ui/react/Application";

const services = {
    mount,
};

const ComposedApplication = () => {
    return <Application />;
};

const components = {
    Application: ComposedApplication,
};

export { components, services };
