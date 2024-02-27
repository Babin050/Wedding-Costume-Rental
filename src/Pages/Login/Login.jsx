import React, { useContext, useState } from "react";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Provider } from "../../Components/Condext";

const Login = () => {
  const { user,value } = useContext(Provider);
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");
  //  const [loginError, setLoginError] = useState('');

  const navigation = useNavigate();
  // // const locate = useNavigate();

  const users = value.user;

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.name === username && user.password === password
    );
    
    if (foundUser.usertype === "user") {
      navigation("/Invoice");
      // if (username ==='admin' && password === 'babin')
      alert ('Login succeessfull')
    } else if (foundUser.usertype === "admin"){
      navigation("/Invoice");
      alert ('Login succeessfull')
    }
   else{
   alert('invalid username')
  }
     



     
    }
  
  // console.log(username);






  return (
    <div className="login">
      <div className="boder">
        <h2 className="head">Sign up</h2>
        <div className="name-div">
          <input
            className="name"
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="password-div">
          <input
            className="pass"
            type="text"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="log-button">
          <button className="bttttn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;



