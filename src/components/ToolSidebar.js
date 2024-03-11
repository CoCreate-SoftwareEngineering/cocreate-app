import IconButton from './IconButton';
import './Project.css';
import './Gsettings.js';

import attachmentIcon from '../sources/button-images/icon_attachment.png'
import dateIcon from '../sources/button-images/icon_date.png'
import docsIcon from '../sources/button-images/icon_google_docs.png'
import mediaIcon from '../sources/button-images/icon_media_image_.png'
import micIcon from '../sources/button-images/icon_mic.png'
import musicIcon from '../sources/button-images/icon_music.png'
import pencilIcon from '../sources/button-images/icon_pencil.png'
import phoneIcon from '../sources/button-images/icon_phone_.png'
import videoIcon from '../sources/button-images/icon_video.png'
import searchIcon from '../sources/button-images/icon_search.png'
import settingsIcon from '../sources/button-images/icon_settings.png'
import { Link } from 'react-router-dom';

const ToolSidebar = ({isOpen, children}) => {

    return (
        <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
                <div className="sidebar-top">          
                    <IconButton image={searchIcon} />   
                               
                    
                        <div className="sidebar-title">Tools</div>  
                        <Link to='/gsettings'>           
                        <IconButton image={settingsIcon} />    
                    </Link> 
                </div>
            
            <div className="tools">
                <IconButton image={videoIcon} alt="Start a video call" />
                <IconButton image={phoneIcon} alt="Start an audio call" />
                <IconButton image={pencilIcon} alt="Draw" />
                <IconButton image={docsIcon} alt="Create a document" />
                <IconButton image={mediaIcon} alt="Insert an image" />
                <IconButton image={micIcon} alt="Record audio" />
                <IconButton image={musicIcon} alt="Insert audio file" />
                <IconButton image={attachmentIcon} alt="Attach files" />
                <IconButton image={dateIcon} alt="icon_date" />
            </div>
        </div>
    );
};

export default ToolSidebar;