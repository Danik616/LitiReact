import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/Listar";
import Login from "./pages/Login";
import SaveUsers from "./pages/SaveUsers";
import "bootstrap/dist/css/bootstrap.css";
import Unauthorized from "./pages/Unauthorized";
import FindByUsername from "./pages/FindByUsername";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/list-users" element={<UserList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/save" element={<SaveUsers />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/find-by-username" element={<FindByUsername/>}/>
      </Routes>
    </Router>
  );
};

export default App;
