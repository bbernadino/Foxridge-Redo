import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    // todo: build form handler functions
    // todo: submit handler
    // todo: connect to db
    // todo: to db realated log in

    <div className="formWrap">
      <form>
        <h2>Foxridge Login</h2>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Login;
