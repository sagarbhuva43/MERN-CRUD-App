import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ViewContext } from "../Context/ViewContext";
import css from "./Tutorials.module.css";

function ViewData() {
  const { id } = useContext(ViewContext);
  // console.log(id);

  const navigate = useNavigate();

  const [mydata, setdMyata] = useState({});
  console.log(mydata);

  useEffect(() => {
    showData();
  }, [id]);

  const showData = async () => {
    const res = await axios.get(`http://localhost:5000/tutorials/${id}`);
    // console.log(res.data.tutorial[0]);
    setdMyata(res.data.tutorial[0]);
  };

  return (
    <>
      <div className="container py-500">
        <ul className="list-group w-50">
          <li className="list-group-item">
            <span className={css.textBold}>Title</span> :- {mydata?.title}
          </li>
          <li className="list-group-item">
            {" "}
            <span className={css.textBold}>Description</span> :-{" "}
            {mydata?.description}
          </li>
          <li className="list-group-item">
            <span className={css.textBold}>Status</span> :-{" "}
            {mydata?.status ? "Publish" : "Pending"}
          </li>
          <br />
        </ul>
        <Link to={`/tutorials/${id}`}>
          <button className="btn btn-warning">Edit</button>
        </Link>
      </div>
    </>
  );
}

export default ViewData;
