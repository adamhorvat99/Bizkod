import React, { useState } from 'react';
import './Login.css';

import Logo from '../assets/infostud.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login">
            <div className="login__form">
                <img src={Logo} alt="Infostud logo" />
                <form>

                    <label className="login__input">
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="loginInput" 
                        />
                        <span className="inputTitle">Email Address</span>
                    </label>

                    <label className="login__input">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            name="password" 
                            id="password" 
                            className="loginInput password" 
                        />
                        <span className="inputTitle">Password</span>

                        {showPassword? 
                            <VisibilityIcon 
                                className="showPasswordIcon"
                                onClick={() => setShowPassword(!showPassword)} 
                            /> : 
                            <VisibilityOffIcon 
                                className="showPasswordIcon"
                                onClick={() => setShowPassword(!showPassword)} 
                            />
                        }
                    </label>
                </form>
                <Button><Link to="/administrator">Login</Link></Button>
                <p>&copy; {new Date().getFullYear()}. Infostud grupa</p>
            </div>
        </div>
    )
}

export default Login
