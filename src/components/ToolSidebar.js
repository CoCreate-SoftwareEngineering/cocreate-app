import IconButton from './IconButton';
import './Project.css';

const ToolSidebar = ({isOpen, children}) => {

    
    return (
        <div className = {`sidebar ${isOpen ? '' : 'closed'}`}>
            <div className = "sidebar-top">
                <IconButton imagePath = 'icon_search'/>
                <div className = "sidebar-title">Tools</div>
                <IconButton imagePath = 'icon_settings'/>
            </div>
            {/* alt is the text displayed under the icon
                icons are stored in sources/button-images
                just input the file name of the icon minus the .png                
            */}
            <div className = "tools">                
                <IconButton alt="Start a Video Call" imagePath="icon_video"/>
                <IconButton alt="Start an Audio Call" imagePath="icon_phone_"/>
                <IconButton alt="Draw" imagePath="icon_pencil"/>
                <IconButton alt="Create a Document" imagePath="icon_google_docs"/>
                <IconButton alt="Insert an Image" imagePath="icon_media_image_"/>
                <IconButton alt="Record Audio" imagePath="icon_mic"/>                
                <IconButton alt="Insert Audio File" imagePath="icon_music"/>
                <IconButton alt="Attach Files" imagePath="icon_attachment"/>
                <IconButton alt = "Date" imagePath = "icon_date"/>
            </div>
        </div>
    );
};

export default ToolSidebar;