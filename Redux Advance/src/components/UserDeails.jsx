import React from "react";
import "./userDetails.css";
import { fakeUser } from "../api";
import { useDispatch } from "react-redux";
import { addUser } from "../store/Slices/Userslice";
import DisplayUser from "./DisplayUser";
import DeleteAllUser from "./DeleteAllUser";

function UserDeails() {
  const dispatch = useDispatch();
  const addNewUser = (name) => {
    console.log("Add new user", name);
    dispatch(addUser(name));
  };
  return (
    <div className="content">
      <div className="admin-table">
        <div className="admin_subtitle">List of User Deatails </div>
        <button
          className="btn btn-trash"
          onClick={() => addNewUser(fakeUser())}
        >
          Add New Users
        </button>
      </div>
      <ul>
        <DisplayUser />
      </ul>
      <hr />
      <DeleteAllUser />
    </div>
  );
}

export default UserDeails;
