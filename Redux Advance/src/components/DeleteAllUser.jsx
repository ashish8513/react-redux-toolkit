import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "../store/Slices/Userslice";

function DeleteAllUser() {
  const dispatch = useDispatch();
  const DeleteAllUser = () => {
    dispatch(deleteUsers());
  };
  return (
    <button className="btn btn-clear" onClick={() => DeleteAllUser()}>
      clearAll
    </button>
  );
}

export default DeleteAllUser;
