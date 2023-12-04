// import {people} from './data'
// import { getImageUrl } from './utils';
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



/*Forms in react */
// function App() {
//   const [score, setScore] = useState('10');
//   const [comment, setComment] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (Number(score) <= 5 & comment.length < 10) {
//       alert('Please provide a comment explaining why the experiance was poor')
//       return 
//     }
//     console.log('Form submitted')
//     setComment('')
//     setScore(10)
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <fieldset>
//           <h2>Feedback Form</h2>
//           <div className="Field">
//           <label htmlFor="" style={{ color: 'black' }}>Score: {score} <span style={{ color: 'yellow' }}>&#9733;</span></label>
//           <br />
//             <input type="range" min={0} max={10} value={score} onChange={(e) => setScore(e.target.value)} />
//           </div>
//           <div className="Field">
//             <label htmlFor="">Comment</label>
//             <br />
//             <textarea value={comment} onChange={e=>setComment(e.target.value)}></textarea>
//           </div>
//           <button type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

// export default App;
// import DessertsList from "./DessertsList";

// const desserts = [
//   {
//     name: "Chocolate Cake",
//     calories: 400,
//     createdAt: "2022-09-01",
//   },
//   {
//     name: "Ice Cream",
//     calories: 200,
//     createdAt: "2022-01-02",
//   },
//   {
//     name: "Tiramisu",
//     calories: 300,
//     createdAt: "2021-10-03",
//   },
//   {
//     name: "Cheesecake",
//     calories: 600,
//     createdAt: "2022-01-04",
//   },
// ];

// function App() {
//   return (
//     <div className="App">
//       <h2>List of low calorie desserts:</h2>
//       <DessertsList data={desserts} />
//     </div>
//   );
// }

// export default App;

/*Rendering list component using keys  */
// export default function List() {
//   const listItems = people.map(person => 
//     <li key={person.id}>
//       <img src={getImageUrl(person)} alt="" />
//       <p>
//         <b> {person.name} </b>
//         {' ' + person.profession + ' '} known for {person.accomplishment}
//       </p>
//     </li>
//   )
//   return <ul>{ listItems }</ul>
// }