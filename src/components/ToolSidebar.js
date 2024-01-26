import './Project.css';

const ToolSidebar = ({isOpen, children}) => {

    return (
        <div className = {`sidebar ${isOpen ? '' : 'closed'}`}>
            {/*<div className = "sidebar-header">
                <button>Search</button>
                <h2>Tools</h2>
                <button>Settings</button>
            </div>*/}
            <h2>Tools</h2>
            <div className = "tools">
                <button>Video</button>
                <button>Start an audio call</button>
                <button>Draw</button>
                <button>Create a document</button>
                <button>Insert an image</button>
                <button>Record audio</button>
                <button>Insert audio file</button>
                <button>Attach file</button>
                <button>View calendar</button>
            </div>
        </div>
    );
};

export default ToolSidebar;