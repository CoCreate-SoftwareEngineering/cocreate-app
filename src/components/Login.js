import './Login.css';
import logoImg from '../sources/Co_Create_Logo_blue.png';
import Home from "./Home";
import {Navigate, Link} from 'react-router-dom';



const Login = () => { //Lambda style of return, is more compact and cleaner

    let username = 'joebloggs123';
    let password = 'password1';
    

    const submit = () => {
        
    }


    return (
        <div class="main-container">
            <div class="logo-left-container">
                <img src={logoImg} class="logo"></img>
            </div>
            <div class="right-container">
                <h1>Login</h1><br/>
                <form>
                <label>Username</label><br/>
                <input type="text" placeholder='joebloggs123'/><br/>
                <label>Password</label><br/>
                <input type="password" placeholder='*********'/><br/>
                <Link><p>Forgotten password?</p></Link>
                </form>
                <button type='submit' onClick={submit}>Submit</button>
                <p>New to CoCreate? <Link class="link"><b>Register</b></Link></p>
            </div>
        </div>
    );
}

export default Login;