
import './Login.css';
import logoImg from '../sources/Co_Create_Logo_blue.png';
import { Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';




const Login = () => { //Lambda style of return, is more compact and cleaner

    //sets up passwords verification
    const[user, usernameVerify] = useState(false);
    const[pass, passwordVerify] = useState(false);
    const navigate = useNavigate();

    //default username and password
    let username = "joebloggs123";
    let password = "password1";

    //checks username
    function checkUser(e){
        let userNameInput = e;
        if (userNameInput === username){
            usernameVerify(true);
        }
        else{
            usernameVerify(false);
        }
    }

    //checks password
    function checkPass(e){
        let passWordInput = e;             
        if (passWordInput === password){
            passwordVerify(true);
        }
        else{
            passwordVerify(false);
        }
    }

    //checks data and redirects to new page
    const submitBtn = () => {
        if(user === true && pass=== true){
            alert("Correct");
            navigate('/home');
        }
        else{
            alert("Incorrect details, please re-enter");
        }
    }

    //Forgotten password link
    const forgotPassword = () => {
        alert("Forgotten password!");
    }

    //Sign up link
    const signUp = () => {
        alert("Sign up!");
    }


    return (
        <div className="main-container">
            <div className="logo-left-container">
                <img src={logoImg} class="logo"></img>
            </div>
            <div className="right-container">
                <h1>Login</h1><br/>
                <form>
                <label>Username</label><br/>
                <input type="text" class="user" placeholder='joebloggs123' onInput={(e)=>checkUser(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input className = "login-input" type="password" class="pass"  placeholder='*********' onInput={(e)=>checkPass(e.target.value)}/><br/>
                <Link onClick={forgotPassword}><p>Forgotten password?</p></Link>
                </form>
                <button className = "login-button" type='submit' onClick={submitBtn}>Submit</button>
                <p>New to CoCreate? <Link class="link" onClick={signUp}><b>Register</b></Link></p>
            </div>
        </div>
    );
}

export default Login;