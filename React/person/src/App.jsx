import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Smith",
    age: 100,
  });

  const handleIncreaseAge = () => {
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    // we've called setPerson, surely person has updated?
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  const handleNameChange = (inputField, newValue) => {
    setPerson({ ...person, [inputField]: newValue });
  };
  // this console.log runs every time the component renders
  // what do you think this will print?
  console.log("during render: ", person);

  return (
    <>
      <h1>{person.firstName + " " + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <CustomInput
        firstName={person.firstName}
        lastName={person.lastName}
        onChange={handleNameChange}
      />
    </>
  );
}

function CustomInput({ firstName, lastName, onChange }) {
  return (
    <>
      <label for="firstName">First Name:</label>
      <input
        id="firstName"
        type="text"
        value={firstName}
        onChange={(event) => onChange("firstName", event.target.value)}
      />
      <label for="lastName">Last Name:</label>
      <input
        id="lastName"
        type="text"
        value={lastName}
        onChange={(event) => onChange("lastName", event.target.value)}
      />
    </>
  );
}

export default App;
