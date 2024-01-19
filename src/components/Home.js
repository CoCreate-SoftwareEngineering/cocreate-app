import './Home.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import OurNav from './nav.js'

const Home = () => { //Lambda style of return, is more compact and cleaner
    return (
        <div>
            <OurNav />
            <h1>Testing 1234</h1>
            <div className="content">
        
            <div className="row">
                <h2>Row 1 Heading</h2>
                <div className="items-container" id="row1"></div>
                
            </div>

            <div className="row">
                <h2>Row 2 Heading</h2>
                <div className="rectangles" id="row2"></div>
            </div>

        
            <div className="row">
                <h2>Row 3 Heading</h2>
                <div className="rectangles" id="row3"></div>
            </div>

            </div>
        </div>
    );
}

export default Home;