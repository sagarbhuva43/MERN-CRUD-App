import React, { useEffect, useState, useContext } from "react";
import axios from "axios";

import { ViewContext } from "../Context/ViewContext";
import ViewData from "./ViewData";
import css from "./Tutorials.module.css";
import { useNavigate } from "react-router-dom";


function Tutorials() {
  const { handleChange, handleActive, isActive } = useContext(ViewContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  //  console.log(users)

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await axios.get("http://localhost:5000/tutorials");
    // console.log(data.data.tutorials);
    setUsers(data.data.tutorials);
  };

  const handleDeleteAll = async () => {
    await axios.delete(`http://localhost:5000/tutorials`);
    getData();
  };

  const handleSearch=(e)=>{
    console.log(e.target.value)
  }

  return (
    <div className={css.maincontainer}>
      <div className={css.search}>
        <input type="text" onChange={(e)=>{handleSearch()}} placeholder="Search by title" />
        <button className={css.searchbtn}>Search</button>
      </div>
      <div className={css.container}>
        <div className={css.viewTitle}>
          <h1>Tutorials List</h1>

          <table className="table table-hover border shadow">
            <thead className="thead-bule">
              <tr>
                <th scope="col">#</th>
                <th scope="col">
                  <h4>Title</h4>
                </th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {users.map((el, i) => (
                <tr className={css.titleclick} key={el._id}>
                  <th scope="row">{i+1}</th>
                  <td>
                    <h5
                      onClick={() => {
                        handleChange(el._id);
                        handleActive(true);
                      }}>
                      {el.title}
                    </h5>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <button className="btn btn-danger" onClick={handleDeleteAll}>
              Remove All
            </button>
          </div>
        </div>
        <div className={css.viewData}>
          <h1>Totorial</h1>
          <hr />
          <div>{isActive && <ViewData/>}</div>
        </div>
      </div>
    </div>
  );
}
export default Tutorials;
