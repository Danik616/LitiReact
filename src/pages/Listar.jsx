import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const {getBaseURL} = useContext(Context)
  let navigate = useNavigate();

  useEffect(() => {
    axios
    .get(getBaseURL+"list-users")
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => {
      navigate("login")
      console.error("Error fetching user data:", error);
    })
  }, [ ]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
