import React, { useState } from "react";
import axios from "axios";

const app = () => {
  const [formName, setFormName] = useState("");
  const [formActive, setFormActive] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/webhook", {
        formName: formName,
        formActive: formActive,
      });

      console.log(response.data); // Handle the successful response
      alert("Form created successfully on 123FormBuilder");
    } catch (error) {
      console.error("Error creating form:", error);
      alert("Error creating form on 123FormBuilder");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Form Name:
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Active:
        <input
          type="checkbox"
          checked={formActive}
          onChange={(e) => setFormActive(e.target.checked)}
        />
      </label>
      <br />
      <button type="submit">Create Form</button>
    </form>
  );
};

export default app;
