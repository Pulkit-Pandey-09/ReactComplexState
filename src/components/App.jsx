import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleClick(event){
  const {name,value}= event.target;

  setContact(prevValue => {
    if (name === "fName")
    {
      return {
      fName : value,
      lName :prevValue.lName,
      email : prevValue.lName
      };
    }
    else if(name === "lName")
    {
      return {
        fName : prevValue.fName,
        lName : value,
        email : prevValue.lName
        };
    }
    else if(name === "email")
    {
      return {
        fName : prevValue.fName,
        lName : prevValue.lName,
        email : value
        };
    }
  });
};
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" onChange = {handleClick} placeholder="First Name"  />
        <input name="lName" onChange = {handleClick} placeholder="Last Name"  />
        <input name="email" onChange = {handleClick} placeholder="Email"  />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
