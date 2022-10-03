import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddData() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    setFormData({
      ...formData,
      [id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);
    await axios.post("http://localhost:5000/tutorials", formData);
    navigate("/tutorials");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h2>Add Tutorials</h2>
        <div className="mb-3">
          <h5 className="text-left">Title</h5>
          <input
            onChange={handleChange}
            placeholder="Enter Your Tutorials Title"
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <h5 className="text-left">Description</h5>
          <input
            onChange={handleChange}
            placeholder="Description"
            type="text"
            className="form-control"
            id="description"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" id="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}
export default AddData;
