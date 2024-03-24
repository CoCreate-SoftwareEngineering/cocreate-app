
import './Nav.css'
import NotificationBox from './NotificationBox.js';
import logoImg from '../sources/Co_Create_Logo_blue.png';
import msgImg from '../sources/Msg_Icon.png';
import user1 from '../sources/Darwizzy.jpg';
import user2 from '../sources/ProfileImg1.jpg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import AuthComponent from './FireBase-auth.js';
import FilesList from './FilesPage.js';


const ProjectNav = () => { //Lambda style of return, is more compact and cleaner
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showFilesModal, setShowFilesModal] = useState(false);

  const handleFilesModalShow = () => {
    console.log("Opening Files Modal");
    setShowFilesModal(true);
  };
  
  // Debug: Log when modal is being closed to track unexpected triggers
  const handleFilesModalClose = () => {
    console.log("Closing Files Modal");
    setShowFilesModal(false);
  };
  

  const handleAuthModalClose = () => setShowAuthModal(false);
  const handleAuthModalShow = () => setShowAuthModal(true);

    return (
      
      <div className="OutsideProject">
      <div>
        <ul>
          <li>
            <img className="UserPic" src={user1} width="50" height="50"></img>
          </li>
          <li>
            <img className="UserPic OverlappingUserPic" src={user2} width="50" height="50"></img>
          </li>
          <li>
            <img className="LastPic" src={user1} width="50" height="50"></img>
          </li>
        </ul>
      </div>
      <div style={{width: '100px', paddingRight: '340px', marginTop: '24px'}}>
        
          <button className='authButton' onClick={handleAuthModalShow}>Register</button>
          <AuthComponent show={showAuthModal} onClose={handleAuthModalClose} />
          

          <button style={{maxHeight: '35px', fontSize: '25px'}} onClick={handleFilesModalShow}>Files</button>
          <FilesList show = {showFilesModal} onClose={handleFilesModalClose} />

      </div>
      <div style={{paddingRight: '655px'}}>
        <ul>
          <li><Link to="/home"><img src={logoImg} width="50" height="50"></img></Link></li>
          <li><h2 className="ProjectName">Example Project 1</h2></li>
          {/* Place the "Files" link here, right after "Example Project 1" */}          
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <div className="dropdown">
              <button className="DropBtn">
                <img src={msgImg} alt="CoCreate" width="50" height="50"></img>
              </button>
              <div className="dropdown-menu MsgGrid dropdown-menu-end">
                <div>
                  <h2 className="DropdownHeader">
                    Messages
                    <span className="AddSymbols">+ &#x1F4DE; &#128249;</span>
                  </h2>
                  <ul className="DropdownLinks">
                    <li className="Message"><a href="#"><img className="UserPic" src={user1} width="50" height="50"></img></a></li>
                    <li className="Message"><a href="#"><img className="UserPic" src={user1} width="50" height="50"></img></a></li>
                    <li className="Message"><a href="#"><img className="UserPic" src={user1} width="50" height="50"></img></a></li>
                    <li className="Message"><a href="#"><img className="UserPic" src={user1} width="50" height="50"></img></a></li>
                    <li className="Message"><a href="#"><img className="UserPic" src={user1} width="50" height="50"></img></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="NotificationBox"><NotificationBox num={5}/></li>
        </ul>
      </div>
    </div>
    
    
        );
    };

export default ProjectNav;