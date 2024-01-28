
import './Login.css';
import logoImg from '../sources/Co_Create_Logo_blue.png';
import {Navigate, Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';

const EventEmitter = require('events');
const emitter = new EventEmitter;


const Login = () => { //Lambda style of return, is more compact and cleaner

    const[user, usernameVerify] = useState(false);
    const[pass, passwordVerify] = useState(false);
    const navigate = useNavigate();

    let username = "joebloggs123";
    let password = "password1";

    function checkUser(e){
        let userNameInput = e;
        if (userNameInput === username){
            usernameVerify(true);
        }
        else{
            usernameVerify(false);
        }
    }

    function checkPass(e){
        let passWordInput = e;             
        if (passWordInput === password){
            passwordVerify(true);
        }
        else{
            passwordVerify(false);
        }
    }

    const submitBtn = () => {
        if(user === true && pass=== true){
            alert("Correct");
            navigate('/');
        }
        else{
            alert("Incorrect details, please re-enter");
        }
    }

    const forgotPassword = () => {
        alert("Forgotten password!");
    }

    const signUp = () => {
        alert("Sign up!");
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
                <input type="text" class="user" placeholder='joebloggs123' onChange={(e)=>checkUser(e.target.value)}/><br/>
                <label>Password</label><br/>
                <input type="password" class="pass"  placeholder='*********' onChange={(e)=>checkPass(e.target.value)}/><br/>
                <Link onClick={forgotPassword}><p>Forgotten password?</p></Link>
                </form>
                <button type='submit' onClick={submitBtn}>Submit</button>
                <p>New to CoCreate? <Link class="link" onClick={signUp}><b>Register</b></Link></p>
            </div>
        </div>
    );
}

export default Login;