import './Login.css';
import logoImg from '../sources/Co_Create_Logo_blue.png';

const Login = () => { //Lambda style of return, is more compact and cleaner
    return (
        <div class="main-container">
            <div class="logo-left-container">
                <img src={logoImg} class="logo"></img>
            </div>
            <div class="right-container">
                <p>Login</p><br/>
                <label>Username</label><br/>
                <input type="text" placeholder='joebloggs123'/><br/>
                <label>Password</label><br/>
                <input type="password" placeholder='*********'/><br/>
                <button type='submit'>Submit</button>
            </div>
        </div>
    );
}

export default Login;