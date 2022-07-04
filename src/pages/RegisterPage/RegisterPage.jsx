import axios from "axios";
import { useRef } from "react";
import "./RegisterPage.styles.scss";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const username = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const cod=useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,

        password: password.current.value,
      };
      console.log(process.env.REACT_APP_COD)
      try { 
        if(cod.current.value=="234"){
        await axios.post("http://localhost:8800/api/auth/register/", user);
        alert("registration succesully");
         } else {
            alert("codice di sicurezza errato")
         }

        
    } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CaymanGroup</h3>
          <span className="loginDesc">
            Registrazione operatori (sezione riservata ai capi)
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <input
              placeholder="Cod di sicurezza"
              required
              ref={cod}
              className="loginInput"
              type="text"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <Link to="/" style={{textDecoration:"none"}}>
                  <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}