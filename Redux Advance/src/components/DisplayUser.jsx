import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./DisplayUser.css";
import { MdDeleteForever } from "react-icons/md";
import { removeUser } from "../store/Slices/Userslice";

function DisplayUser() {
    const dispatch=useDispatch()
  const data = useSelector((state) => state.user);

  console.log(data);
  

const deleteUser=(id)=>{
dispatch(removeUser(id))
}

  return (
    <div>
      <h1>User List:</h1>
      <ul>
        {data && data.length > 0 ? (
          data.map((user, id) => (
            <li key={id}>
              {user}
              <button className="btn btn-delete" onClick={()=>deleteUser()}>
                <MdDeleteForever className="delete-icons" />
              </button>
            </li>
          ))
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </div>
  );
}

export default DisplayUser;
