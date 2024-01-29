import { useState } from "react";
import ToolSidebar from "./ToolSidebar.js";
import './Project.css';
import ProjectNav from "./NavProject.js";

const Project = () => { //Lambda style of return, is more compact and cleaner

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarClick = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    return (
        <>
            <ProjectNav/>
            <button className = "tools-open-button" onClick={handleSidebarClick}>&lt;</button>
            <ToolSidebar
            isOpen={isSidebarOpen}
            >
            </ToolSidebar>
            </>
    );
}

export default Project;