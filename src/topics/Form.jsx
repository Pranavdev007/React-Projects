import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleData() {
    console.log(name, email);
  }
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Name
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      Email
      <button onClick={handleData}>Submit</button>
    </div>
  );
}

export default Form;
