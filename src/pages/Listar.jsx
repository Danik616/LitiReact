import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL="http://192.168.20.50:8080/list-users"
const UserList = () => {
  const [users, setUsers] = useState([]);
  let [ready, setReady] = useState(false);

  useEffect(() => {
      axios
      .get(baseURL)
      .then((response) => {
        setUsers(response.data);
        ready = users.length===0 ? setReady(false): setReady(true)
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      })

    console.log(users);
  }, [ ]);

  if (ready) {
    return (
      <div>
        <h1>No pudimos traer los datos</h1>
      </div>
    );
  }

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
