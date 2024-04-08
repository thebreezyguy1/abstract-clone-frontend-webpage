import React from "react";
import MainContainerItem from "./MainContainerItem";
import Image1 from "../assets/version-management.png";
import Image2 from "../assets/configure.png";
import Image3 from "../assets/puzzle.png";
import Image4 from "../assets/dollar.png";
import Image5 from "../assets/key.png";
import Image6 from "../assets/message.png";

const Main = () => {

    return(
        <div className="main-container">
            <MainContainerItem image={Image1} title="Using Abstract" description="Abstract lets you manage, version, and document your designs in one place." />
            <MainContainerItem image={Image2} title="Manage Account" description="Configure your account settings, such as your email, profile details, and password." />
            <MainContainerItem image={Image3} title="Manage organizations, teams and projects" description="Use Abstract organizations, teams, and projects to organize your people and your work." />
            <MainContainerItem image={Image4} title="Manage billing" description="Change subscriptions and payment details." />
            <MainContainerItem image={Image5} title="Authenticate to Abstract" description="Set up and configure SSO, SCIM, and Just-in-Time provisioning." />
            <MainContainerItem image={Image6} title="Abstract support" description="Get in touch with a human." />
        </div>
    )
}

export default Main;