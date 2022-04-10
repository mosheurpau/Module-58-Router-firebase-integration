import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { singInWithGoogle } = useFirebase();
  return (
    <div>
      <h2>Login page</h2>
      <div style={{ margin: "20px" }}>
        <button onClick={singInWithGoogle}>Google Sing In</button>
      </div>
      <form>
        <input type="email" placeholder="Your Email" />
        <br />
        <input type="password" name="" id="" placeholder="Your Password" />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
