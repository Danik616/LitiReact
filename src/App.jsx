import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/Listar";
import Login from "./pages/Login";
import SaveUsers from "./pages/SaveUsers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/list-users" element={<UserList />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/save" element={<SaveUsers />} />
      </Routes>
    </Router>
  );
};

export default App;
