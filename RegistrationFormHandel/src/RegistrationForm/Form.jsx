
import React, { useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const changeinputvalue = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstname":
        setFirstname(value);
        break;
      case "lastname":
        setLastname(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "phonenumber":
        setPhonenumber(value);
        break;
      default:
        break;
    }
  };

  const submithandler = (e) => {
    e.preventDefault();
    console.log({
      firstname,
      lastname,
      email,
      password,
      phonenumber,
    });
  };

  return (
    <form action="#" onSubmit={submithandler}>
      <div>
        <h2>Registration Form</h2>
        Please fill in this form to create an account!
      </div>
      <div>
        <label htmlFor="firstname">First name</label>
        <input
          placeholder="First name"
          type="text"
          id="firstname"
          name="firstname"
          required
          value={firstname}
          onChange={changeinputvalue}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">Last name</label>
        <input
          placeholder="Last name"
          type="text"
          id="lastname"
          name="lastname"
          required
          value={lastname}
          onChange={changeinputvalue}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email id</label>
        <input
          placeholder="Enter email"
          type="text"
          id="email"
          name="email"
          required
          value={email}
          onChange={changeinputvalue}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password</label>
        <input
          placeholder="Enter password"
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={changeinputvalue}
        />
      </div>
      <br />
      <div>
        <label htmlFor="phonenumber">Phone Number</label>
        <input
          placeholder="Phone number"
          type="text"
          id="phonenumber"
          name="phonenumber"
          required
          value={phonenumber}
          onChange={changeinputvalue}
        />
      </div>
      <h4>
        By creating an account you agree to our{" "}
        <a className="text-blue-500" href="">
          Terms & Conditions
        </a>
      </h4>
      <button className="bg-sky-600 text-white">Sign Up</button>
    </form>
  );
};

export default Form;




















































