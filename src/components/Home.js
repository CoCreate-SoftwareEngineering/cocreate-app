import './Home.css'
import OurNav from './Nav.js'

const Home = () => { //Lambda style of return, is more compact and cleaner
    return (
        <div>
            <OurNav />
            <div className="content">
        
            <div className="row">
                <h2>Live</h2>
                <div className="item-container" id="row1">
                <div class="item">Item 1</div>
                <div class="item">Item 2</div>
                <div class="item">Item 3</div>
                </div>
                
            </div>

            <div className="row">
                <h2>Projects</h2>
                <div className="rectangles" id="row2"></div>
            </div>

        
            <div className="row">
                <h2>Collaborations</h2>
                <div className="rectangles" id="row3"></div>
            </div>

            </div>
            <div id="help-button">?</div>
        </div>
    );
}

export default Home;