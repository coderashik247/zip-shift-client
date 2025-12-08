import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";
import { auth } from "../../../firebase/firebase.init";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleRegisteration = (data) => {
    
    const profileImg = data.photo[0];
    registerUser(data.email, data.password)
      .then(() => {
      
        // 1. store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // 2. send the photo to store and get the ul
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;



        axios.post(image_API_URL, formData).then((res) => {
          const photoURL = res.data.data.url;
          // create user in the database

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: photoURL
          }
          
          axiosSecure.post('/users', userInfo)
          .then(res =>{
            if(res.data.insertedId){
              console.log('user create at database');
            }
          })

          // update user profile to firebase
          const userProfile = {
            displayName: data.name,
            photoURL: photoURL,
          };

          // update user profile to firebase
          updateUserProfile(userProfile)
            .then(() => {
              console.log("user profile updated done");
              // force reload user info
              auth.currentUser.reload().then(() => {
                navigate(location?.state || "/");
              });
            })
            .catch((error) => console.log(error));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-lg p-8 shrink-0 shadow-2xl">
      <h3 className="text-3xl text-center">Welcome to Zap Shift</h3>
      <p className="text-center">Please Register</p>
      <form className="card-body" onSubmit={handleSubmit(handleRegisteration)}>
        <fieldset className="fieldset">
          {/* name field */}
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-red-500">Name is required.</p>
          )}

          {/* photo image field */}
          <label className="label">Photo</label>

          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input w-full"
            placeholder="Your Photo"
          />

          {errors.name?.type === "required" && (
            <p className="text-red-500">Photo is required.</p>
          )}
          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Error is required</p>
          )}
          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500"> Password is required </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              {" "}
              Password must be 6 characters or longer{" "}
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p>
              Password must have at least one uppercase, at least one lowercase,
              at least one number, and at least one special characters
            </p>
          )}
          <button className="btn btn-primary text-black font-bold mt-4">
            Register
          </button>
        </fieldset>
        <p className="text-accent">
          New to Zap Shift{" "}
          <Link
            to="/login"
            state={location.state}
            className="font-bold underline text-primary"
          >
            Login
          </Link>{" "}
        </p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
