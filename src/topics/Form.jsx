import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((preVal) => {
      return { ...preVal, [name]: value };
    });
  }
  async function handleData() {
    const data = { name: formData.name, email: formData.email };
    console.log(data);

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      Name
      <input
        type="email"
        value={formData.email}
        name="email"
        onChange={handleChange}
      />
      Email
      <button onClick={handleData}>Submit</button>
    </div>
  );
}

export default Form;
