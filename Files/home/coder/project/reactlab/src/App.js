import React, { useState } from "react";
import { validateEmail } from "./utils";
import "./App.css";

const PasswordErrorMessage = () => {
  return <p className="FieldError">Password should have at least 8 characters</p>;
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const isEmailValid = validateEmail(email);
  const isPasswordValid = password.value.length >= 8;
  const isRoleValid = role !== "role";

  const getIsFormValid = () => {
    return isEmailValid && isPasswordValid && isRoleValid;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handlePasswordChange = (e) => {
    setPassword({ value: e.target.value, isTouched: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getIsFormValid()) {
      alert("Account created!");
      clearForm();
    } else {
      alert("Please fill in all required fields correctly.");
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {isEmailValid ? null : <p className="FieldError">Invalid email address</p>}
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={handlePasswordChange}
            />
            {password.isTouched && !isPasswordValid && <PasswordErrorMessage />}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
            {!isRoleValid && <p className="FieldError">Please select a role</p>}
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;