import { useContext, useRef } from "react";
import "./LoginPage.styles.scss";
import { CircularProgress } from "@material-ui/core";
import axios from 'axios';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export default function Login() {
  const username = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CaymanGroup</h3>
          <span className="loginDesc">
            CaymanGroup versione per operatori digitali.
            Per visitare il sito ufficiale  
            <a href="https://youtube.com">
                 clicca qui
            </a>
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              type="username"
              required
              className="loginInput"
              ref={username}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
             ref={password}
            />
            <button className="loginButton" type="submit" onSubmit={handleClick}>
                Log In 
            </button>
            <Link to='/register' style={{textDecoration:"none",color:"white"}}>
            <button className="loginRegisterButton">
             
                   Create a new  account
            
            </button>   
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}