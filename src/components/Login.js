import './Login.css';
import logoImg from '../sources/Co_Create_Logo_blue.png';

const Login = () => { //Lambda style of return, is more compact and cleaner
    return (
        <div class="main-container">
            <div class="logo-left-container">
                <img src={logoImg} class="logo"></img>
            </div>
        </div>
    );
}

export default Login;