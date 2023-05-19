import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/Listar";
import Login from "./pages/Login";
import SaveUsers from "./pages/SaveUsers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/list-users" element={<UserList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/save" element={<SaveUsers />} />
      </Routes>
    </Router>
  );
};

export default App;
