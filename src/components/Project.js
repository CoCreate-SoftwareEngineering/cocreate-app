import { useState } from "react";
import ToolSidebar from "./ToolSidebar.js";
import './Project.css';
import ProjectNav from "./NavProject.js";

const Project = () => { //Lambda style of return, is more compact and cleaner

    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const handleSidebarClick = () => {
        setSidebarOpen(!isSidebarOpen);
    }

    return (
        <>
            <ProjectNav/>
            <div className = 'projects-container'>
                <button className = {`tools-open-button ${isSidebarOpen ? 'open' : ''}`} onClick={handleSidebarClick}>&lt;</button>
                <span className = "content-span" align="center">Testing 123</span>
                <ToolSidebar
                isOpen={isSidebarOpen}
                />
            </div>
            </>
    );
}

export default Project;