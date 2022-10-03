import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import css from "./Tutorials.module.css";

function EditData() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  // console.log(id);

  useEffect(() => {
    showData();
  }, []);

  const handleChange = (e) => {
    const id = e.target.id;
    setFormData({
      ...formData,
      [id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    await axios.patch(`http://localhost:5000/tutorials/${id}`, formData);
    navigate("/tutorials");
  };

  const showData = async () => {
    const res = await axios.get(`http://localhost:5000/tutorials/${id}`);
    // console.log(res.data.tutorial[0]);
    setFormData(res.data.tutorial[0]);
  };

  const handleStatus = async () => {
    await axios.patch(`http://localhost:5000/tutorials/${id}`, {
      ...formData,
      status: !formData.status,
    });
    showData();
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tutorials/${id}`);
    } catch (err) {
      console.log(err);
    }

    alert("Tutorial has delete in your List");
    navigate("/tutorials");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h2>Tutorial</h2>
        <div className="mb-3">
          <h5 className="text-left">Title</h5>
          <input
            onChange={handleChange}
            placeholder="Enter Your Tutorials Title"
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            value={formData.title}
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
            value={formData.description}
          />
        </div>
        <div>
          <h3>Status : {formData.status ? "Published" : "Pending"}</h3>
        </div>
        <br />
        <button type="submit" id="submit" className="btn btn-success">
          Update
        </button>
      </form>
      <br />
      <div className={css.deletebtn}>
        <button className="btn btn-primary" onClick={handleStatus}>
          {formData.status ? "UnPublish" : "Publish"}
        </button>
        <br />
        <br />
        <button
          className="btn btn-danger"
          onClick={() => {
            deleteData(id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EditData;
