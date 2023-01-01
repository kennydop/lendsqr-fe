import React from "react";
import lendsqrl from "../assets/lendsqr-l.png";
import lendsqri from "../assets/lendsqr-i.png";
import pablo_signin from "../assets/pablo-sign-in.png";
import "./styles/login.scss";

function Login() {
  return (
    <div className="Login">
      <div className="left">
        <div className="logo-container">
          <img src={lendsqri} alt="Lendsqr Logo" className="lendsqr_l" />
          <img src={lendsqrl} alt="Lendsqr Logo" className="lendsqr_i" />
        </div>
        <div className="pablo-container">
          <img src={pablo_signin} alt="Sign In Side" className="pablo-signin" />
        </div>
      </div>
      <div className="right">
        <div className="form-container">
          <div className="form-header">
            <h2>Welcome!</h2>
            <p>Enter details to login</p>
            <form>
              <input
                type="email"
                placeholder="Email"
                className="email"
                required={true}
                autoComplete="email"
              />
              <input
                type="password"
                placeholder="Password"
                className="password"
                required={true}
                title="password"
                minLength={6}
                autoComplete="current-password"
              />
              <a href="/">FORGOT PASSWORD?</a>
              <button type="submit" className="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
