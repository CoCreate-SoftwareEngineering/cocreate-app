import { useState } from "react";
import './ToolSideBar.css';

const ToolSidebar = () => {

    const [isVisible, setVisible] = useState(true);

    const toggleVisibility = () => {
        setVisible(!isVisible);
    };

    return (
        <div className = "tools-container">
            {isVisible ? 
            <button className = "tools-open-button">&lt;</button> 
            : 
            "goodbye"}
        </div>
    );
};

export default ToolSidebar;