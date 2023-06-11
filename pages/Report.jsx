import React, { useEffect, useRef, useState } from "react";
import "./report.css";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import axios from "axios";
function Report() {
  const [url, setUrl] = useState();
  const [work, setWork] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      let tempurl;
      console.log(data.url[0]);
      if (data.url[0]) {
        const formData = new FormData();
        formData.append("file", data.url[0]);
        formData.append("upload_preset", "b5w6nssf");
        await axios
          .post(
            "https://api.cloudinary.com/v1_1/dbhkoyzin/image/upload",
            formData
          )
          .then((res) => setUrl(res.data.secure_url));
        console.log(tempurl);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(url);
  useEffect(() => {
    if (work) {
      console.log(form.current);
      setTimeout(() => {
        emailjs
          .sendForm(
            "service_olaio2q",
            "template_x7lsbgp",
            form.current,
            "Aqy5vxlkXUDLZ3OOJ"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }, 5000);
    }
  }, [url]);
  useEffect(() => {
    setWork(true);
  }, []);

  return (
    <div className="reportbody">
      <div className="containerreport">
        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="formlogin"
        >
          <p className="titlelogin">REPORT </p>
          <p className="messagelogin">
            Here every student or teacher can report about inappropriate
            behavior by teacher or student, construction or traffic problems.
            You can report anonymously or wish your own name.
          </p>
          <br />
          <label htmlFor="email">
          <span>your email adrees (not required):</span>
          </label>
            <input
              required=""
              placeholder="your email adrees..."
              type="email"
              id="email"
              className="inputlogin"
              {...register("email")}
            />
           
          <label htmlFor="text">
          <span>Subject:</span>
          </label>
            <input
              required=""
              placeholder="Subject..."
              type="text"
              id="subject"
              className="inputlogin"
              {...register("subject", { required: true })}
            />
           

          <label htmlFor="text">
          <span>Place and time (not required):</span>
          </label>
            <input
              required=""
              placeholder="Place and time..."
              type="text"
              id="time"
              className="inputlogin"
              {...register("placetime")}
            />
           
          <label htmlFor="text" >
          <span>People involve:</span>
          </label>
            <input
              required=""
              placeholder="People involve..."
              type="text"
              id="people"
              className="inputlogin"
              {...register("peopleinvolve")}
            />
            
          <label>Image url:</label>
          <input type="file" {...register("url")} />
          <input
            style={{ display: "none" }}
            value={`${url}`}
            {...register("url2")}
          />

          <br />
          <label>
            <textarea
              required=""
              placeholder="...."
              type="text"
              className="inputlogin"
              {...register("information", { required: true })}
            />
          </label>
          <br />
          <input type="submit" className="submitlogin" />
        </form>
      </div>
    </div>
  );
}

export default Report;
