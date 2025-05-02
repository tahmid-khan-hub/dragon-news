import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

  const {createUser} = use(AuthContext);

  const handleRegister = (e) =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    console.log({name, email,  photo,password});

    createUser(email, password)
      .then(res =>{
        console.log(res);
        
      })
      .catch(err =>{
        console.log(err);
      })

  }

  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center my-5 font-semibold">
            Register here now!
          </h1>
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input type="text" name="name" className="input" placeholder="Name" required />

            <label className="label">PhotoURL</label>
            <input type="text" name="photo" className="input" placeholder="PhotoURL" required />

            <label className="label">Email</label>
            <input type="email" name="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name="password" className="input" placeholder="Password" required />
            

            <button type="submit" className="btn btn-neutral mt-4">Register</button>

            <p className="font-semibold text-center mt-4">Already Have An Account?
              <Link className="ml-2 text-secondary" to="/auth/login">
                Login
              </Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
