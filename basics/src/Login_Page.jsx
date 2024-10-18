import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginPageimg from "./assets/LoginPage img.jpg";
import Setimg from "./assets/healthy_img.jpg";
import { useNavigate } from 'react-router-dom';
export let Login_c = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const validateLogin = () => {
        if (username === '' || password === '') {
            alert('Please fill in all the required fields.');

        } else {
         
          navigate('/Success Interface');
          
        }
      };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="set">
            <img src ={Setimg}  style={{ width: "400px", height: "380px",borderRadius:"210px",border:"5px solid black",boxShadow: "5px 0px 20px rgba(255, 0, 0, 0.7)"}}></img>
        <div className="ip_container">
            <img src ={LoginPageimg}></img>
            <div className="input_group">
                <label htmlFor="ip_u">USERNAME📌</label>
                <input type="text" placeholder="Enter Username" id="ip_u" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                aria-label="Enter Username" />
            </div>

            <div className="input_group">
                <label htmlFor="ip_p">PASSWORD📌</label>
                <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="Enter Password" 
                    id="ip_p"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    aria-label="Enter Password"
                />
                <div className="show_password">
                    <input 
                        type="checkbox" 
                        id="cbox" 
                        onChange={togglePasswordVisibility} 
                        aria-label="Show Password"
                    />
                    <label htmlFor="cbox">Show Password</label>
                </div>
            </div>

            <button type="submit"  onClick={validateLogin} id="Login_btn">LOGIN</button>

            <div className="Login_footer">
                <p>Forgot <Link to="/Forgot password"> Password ？</Link></p>
                <p>Don't Have An Account ？<Link to="/Signup"> Sign Up</Link></p>
                <div className="Login_lang">
                    <Link to="/Telugu">తెలుగు</Link>
                    <Link to="/Hindi">हिन्दी</Link>
                    <Link to="/Tamil">தமிழ்</Link>
                    <Link to="/Malayalam">മലയാളം</Link>
                </div>
            </div>
        </div>
        </div>
        
    );
};
