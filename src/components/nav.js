
import './Nav.css'
import NotificationBox from './NotificationBox.js';
import logoImg from '../sources/Co_Create_Logo_blue.png';
import msgImg from '../sources/Msg_Icon.png';
import profileImg from '../sources/Darwizzy.jpg';
import userImg1 from '../sources/ProfileImg1.jpg';



const OurNav = () => { //Lambda style of return, is more compact and cleaner

    return (
      
            <div className="Outside">
              <div>
                <ul>
                  <li><a href="#home"><img src={logoImg} width="50" height="50"></img></a></li>
                  <li>
                    <a href="#home">
                      <img className="ProfilePic" src={profileImg} width="47" height="47"></img>
                    </a>
                  </li>
                  <li><a href="#home"><div className="Username">Username</div></a></li>
                </ul>
              </div>
              <div>
                
              </div>
              <div>
                <ul>
                  <li>
                    <form className="SearchBar">
                      <input type="search" placeholder="Search" aria-label="Search"></input>
                    </form>
                  </li>
                  <li>
                  <div class="dropdown">
                    <button class="DropBtn">
                      <img src={msgImg} alt="CoCreate" width="50" height="50"></img>
                    </button>
                    <div class="dropdown-menu MsgGrid dropdown-menu-end">
                      <div>
                        <h2 class="DropdownHeader">
                          Messages
                          <span class="AddSymbols">+ &#x1F4DE; &#128249;</span>
                        </h2>
                        <ul class="DropdownLinks">
                        <li class="Message"><a href="#"><img className="ProfilePic" src={userImg1} width="50" height="50"></img></a></li>
                        <li class="Message"><a href="#"><img className="ProfilePic" src={userImg1} width="50" height="50"></img></a></li>
                        <li class="Message"><a href="#"><img className="ProfilePic" src={userImg1} width="50" height="50"></img></a></li>
                        <li class="Message"><a href="#"><img className="ProfilePic" src={userImg1} width="50" height="50"></img></a></li>
                        <li class="Message"><a href="#"><img className="ProfilePic" src={userImg1} width="50" height="50"></img></a></li>
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

export default OurNav;