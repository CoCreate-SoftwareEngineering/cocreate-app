
import './Nav.css'
import NotificationBox from './NotificationBox.js';
import logoImg from '../sources/Co_Create_Logo_blue.png';
import msgImg from '../sources/Msg_Icon.png';
import user1 from '../sources/Darwizzy.jpg';
import user2 from '../sources/ProfileImg1.jpg';
import { Link } from 'react-router-dom';



const ProjectNav = () => { //Lambda style of return, is more compact and cleaner

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
              <div>
                <ul>
                <li><Link to ="/home"><img src={logoImg} width="50" height="50"></img></Link></li>
                <li><h2 className="ProjectName">Example Project 1</h2></li>
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
                  <li className="NotificationBox"><NotificationBox num = {5}/></li>
                </ul>
              </div>
            </div>

        );
    };

export default ProjectNav;