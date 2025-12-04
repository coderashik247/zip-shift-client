import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const {registerUser} = useAuth();
  const handleRegisteration = (data) => {
    console.log("after register", data);
    registerUser(data.email, data.password)
    .then(result =>{
      console.log(result);
    })
    .then(error =>{
      console.log(error);
    })
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-lg p-8 shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Welcome to Zap Shift</h3>
      <p className="text-center">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegisteration)}>
        <fieldset className="fieldset">
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {
            errors.email?.type ==='required' && <p className="text-red-500">Error is required</p>
          }
          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", { required: true, minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
             })}
            className="input w-full"
            placeholder="Password"
          />
          {
            errors.password?.type === 'required' && <p className="text-red-500"> Password is required </p>
          }
          {
            errors.password?.type === 'minLength' && <p className="text-red-500"> Password must be 6 characters or longer </p>
          }
          {
            errors.password?.type ==='pattern' && <p>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
          }
          <button className="btn btn-primary text-black font-bold mt-4">
            Register
          </button>
        </fieldset>
        <p className="text-accent">New to Zap Shift <Link to="/login" className="font-bold underline text-primary">Login</Link> </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
