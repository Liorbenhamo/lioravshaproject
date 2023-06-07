import React from "react";
import { useForm } from "react-hook-form";
function Report() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(users);
    for (let user of users) {
      if (data.username == user.username && data.password == user.password) {
        console.log(user);
        handleClose2();
        info.setCorrentuser(user);
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="formregister">
        <p className="titleregister">Register </p>
        <p className="messageregister">
          Signup now and get full access to our app.
        </p>
        <br />
        <label>
          <input
            required=""
            placeholder="Username"
            type="text"
            className="inputregister"
            {...register("username", { required: true })}
          />
          <span>Username</span>
        </label>
        <label>
          <input
            required=""
            placeholder="Password"
            type="password"
            className="inputregister"
            {...register("password", { required: true })}
          />
          <span>Password</span>
        </label>
        <br />
        <input type="submit" className="submitregister" />
      </form>
    </div>
  );
}

export default Report;
