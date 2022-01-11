import React, { useState } from "react";
//import Navbar from "./navbar";
import CombineNav from "./combineNav";
const Form = () => {
  const [user, setUser] = useState([
    { name: "Ali", email: "abc@xyz.com", password: "Abc123$" },
  ]);
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    formErr: "",
  });
  const inputHandler = (e) => {
    if (e.target.id === "name") {
      if (e.target.value === "") {
        setError({ ...error, nameErr: "Please Enter Your Name" });
      } else {
        setError({ ...error, nameErr: "" });
      }
      setData({ ...data, name: e.target.value });
    }
    if (e.target.id === "email") {
      let err =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
      if (e.target.value.match(err)) {
        setError({ ...error, emailErr: "" });
      } else {
        setError({
          ...error,
          emailErr: "Please enter Valid Email e.g abc@xyz.com",
        });
      }
      setData({ ...data, email: e.target.value });
    }
    if (e.target.id === "password") {
      let err = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
      if (e.target.value.match(err)) {
        setError({ ...error, passwordErr: "" });
      } else {
        setError({
          ...error,
          passwordErr: "Please Enter Valid Password e.g Abc123$",
        });
      }
      setData({ ...data, password: e.target.value });
    }
  };
  const submithandler = (e) => {
    e.preventDefault();
    if (data.name !== "" && data.email !== "" && data.password !== "") {
      setUser([...user, data]);
      setData({ name: "", email: "", password: "" });
      setError({ ...error, formErr: " " });
    } else {
      setError({ ...error, formErr: "Please Fill All Fields" });
    }
  };
  const deleteHandler = (index) => {
    user.splice(index, 1);
    setUser([...user]);
  };
  const updateHandler = (index) => {
    setData({
      name: user[index].name,
      email: user[index].email,
      password: user[index].password,
    });
  };

  return (
    <>
      <CombineNav />

      <div className="container">
        <h1>Form</h1>
        <form onSubmit={submithandler} className="bg-success">
          {error.formErr && <p>{error.formErr}</p>}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              aria-describedby="nameHelp"
              id="name"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={data.name}
              onChange={inputHandler}
            />
            <div id="emailHelp" className="form-text">
              {error.nameErr && <p>{error.nameErr}</p>}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              className="form-control"
              aria-describedby="emailHelp"
              id="email"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              value={data.email}
              onChange={inputHandler}
            />
            <div id="emailHelp" className="form-text">
              {error.emailErr && <p>{error.emailErr}</p>}
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter Your Password"
              value={data.password}
              onChange={inputHandler}
              class="form-control"
            />
            <div id="emailHelp" className="form-text">
              {error.passwordErr && <p>{error.passwordErr}</p>}
            </div>
          </div>
          {/* <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button type="submit" class="btn btn-primary" onClick={submithandler}>
            Submit
          </button>
        </form>

        <hr />
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {user.map((e, index) => {
            return (
              <tr>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.password}</td>
                <input
                  value="Update"
                  type="submit"
                  onClick={() => updateHandler(index)}
                />
                <input
                  value="Delete"
                  type="submit"
                  onClick={() => deleteHandler(index)}
                />
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};
export default Form;
