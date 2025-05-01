import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center my-5 font-semibold">
            Register here now!
          </h1>
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" />

            <label className="label">PhotoURL</label>
            <input type="text" className="input" placeholder="PhotoURL" />

            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            

            <button className="btn btn-neutral mt-4">Register</button>

            <p className="font-semibold text-center mt-4">Already Have An Account?
              <Link className="ml-2 text-secondary" to="/auth/login">
                Login
              </Link></p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
