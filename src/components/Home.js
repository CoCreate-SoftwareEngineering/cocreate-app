import './Home.css'
import OurNav from './nav.js'
import ToggleableHeading from './ToggleableHeading.js';
import { Link } from 'react-router-dom';

const Home = () => { //Lambda style of return, is more compact and cleaner
    return (
        <div>
            <OurNav />
            <div className="content">
        
            <div className="row">
                <div className="heading-container"><h2>Live</h2><div className="circle"></div>
                </div>
                <div className="item-container" id="row1">
                <div class="item">Example Live Session 1</div>
                <div class="item">Example Live Session 2</div>
                <div class="item">Example Live Session 3</div>
                </div>
                
            </div>

            <div className="row">
                <ToggleableHeading
                heading = "Projects"
                notiAmountCons = {1}
                rowContent={
                    <Link to="/project"><div key="1" class="item">Example Project 1</div> </Link>
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
            <div id="help-button">?</div>
        </div>
    );
}

export default Home;