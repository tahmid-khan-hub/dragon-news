import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

  const {signIn} = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e =>{
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log({email, password});


    signIn(email, password)
     .then(res =>{
      const user = res.user;
      console.log(user);
      navigate(`${location.state? location.state : "/"}`)
     })
     .catch(err=>{
      console.log(err.message);
      alert(err.message)
     })

  }
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">

        <h1 className="text-3xl text-center my-5 font-semibold">Login now!</h1>
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required/>
            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            
            <button type="submit" className="btn btn-neutral mt-4">Login</button>

            <p className="font-semibold text-center mt-4">Don't Have An Account? <Link className="text-secondary" to="/auth/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
