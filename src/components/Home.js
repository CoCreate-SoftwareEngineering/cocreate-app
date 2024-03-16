import './Home.css'
import OurNav from './nav.js'
import ToggleableHeading from './ToggleableHeading.js';
import { Link } from 'react-router-dom';
import Help from './HelpButton.js'
import NotificationBox from './NotificationBox.js';
import EventCalendar from './EventCalendar.js';


// data structure to hold projects
const projects = [
    { id: 1, name: "Example Project 1", link: "/project" },
    { id: 2, name: "Example Project 2", link: "/project" },
    { id: 3, name: "Example Project 3", link: "/project" },    
]

// data structure for live projects
const lives = [
    { id: 1, name: "Example Project 1", link: "/project" },
    { id: 2, name: "Example Project 2", link: "/project" },
    { id: 3, name: "Example Project 3", link: "/project" },
    { id: 4, name: "Example Project 4", link: "/project" },    
]

const Home = () => { //Lambda style of return, is more compact and cleaner
    return (
        <div>
            <OurNav />
            <div className="content">
            <span> <EventCalendar EventCalendarProps ={{date:13, title:"asd"}}/></span>
            <div className="row">                
                <ToggleableHeading
                heading= {
                    <div>
                        Live <div className = "circle"></div>
                    </div>
                }                         
                rowContent={
                    <div className='lives-container'>
                        {lives.map((live) =>
                            <Link key = {live.id} to={live.link}><div className='item'>{live.name}</div></Link>
                        )}
                    </div>
                }/>
                
            </div>
            
            <div className="row">
                <ToggleableHeading
                heading = "Projects"
                notiAmountCons = {projects.length} // dynamically set notification amount
                rowContent={
                    <div className = "projects-container">
                        {/* add all projects in data structure to projects section */}
                        {projects.map((project) => 
                            <Link key={project.id} to={project.link}><div className='item'>{project.name}</div></Link>
                        )}
                    </div>
                }/>
            </div>

        
            <div className="row">
                <ToggleableHeading
                heading = "Collaborations"
                notiAmountCons = {0}
                rowContent={<div key="1" class ="item">Example Collaboration 1</div>}
                />
            </div>

            </div>
            <div><Help/></div>
        </div>
    );
}

export default Home;