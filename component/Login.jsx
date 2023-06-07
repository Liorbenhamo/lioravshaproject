import React, { useEffect, useState } from "react";
import "./login.css";
import { useForm } from "react-hook-form";
import { InfoContext } from "../src/App";

function Login({ handleClose2 }) {
  const info = React.useContext(InfoContext);
  console.log(info);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    for (let user of info.users) {
      console.log(user);
      if (user.username == data.username && user.password == data.password) {
        info.setCorrentuser(user);
      }
      console.log(info.correntuser);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="formlogin2">
        <p className="titlelogin">Login </p>
        <p className="messagelogin">login to your batyam user accuont</p>
        <br />
        <label>
          <input
            required=""
            placeholder="Username"
            type="text"
            className="inputlogin"
            {...register("username", { required: true })}
          />
          <span>Username</span>
        </label>
        <label>
          <input
            required=""
            placeholder="Password"
            type="password"
            className="inputlogin"
            {...register("password", { required: true })}
          />
          <span>Password</span>
        </label>
        <br />
        <input type="submit" className="submitlogin" />
      </form>
    </div>
  );
}

export default Login;
