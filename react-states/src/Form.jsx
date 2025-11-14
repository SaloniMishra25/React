import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  let handleInputChange = (event) => {
    let fieldname = event.target.name;
    let newValue = event.target.value;
    console.log(fieldname);
    setFormData((currData) => {
      return { ...currData, [fieldname]: newValue };
    });

    //second option :
    // setFormData((currData) => {
    //   return { ...currData, [event.target.name]: event.target.value };
    // });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">User Name : </label>
      <input
        placeholder="enter full name "
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="username"
        name="fullName"
      />
      <br /> <br />
      <label htmlFor="email">E-mail : </label>
      <input
        placeholder="enter email "
        type="text"
        value={formData.email}
        onChange={handleInputChange}
        id="email"
        name="email"
      />
      <br /> <br />
      <label htmlFor="password">Password : </label>
      <input
        placeholder="password "
        type="text"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />{" "}
      <br /> <br />
      <button>Submit</button>
    </form>
  );
}
