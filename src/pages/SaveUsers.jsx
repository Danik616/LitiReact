import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = "http://localhost:8080/save";

function SaveUsers() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState(0);
  let navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    manejarSubmit({ email, password, rol });
    setEmail("");
    setPassword("");
    setRol("");
  }

  function manejarSubmit(form) {
    axios
      .post(baseURL, form)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          navigate("/list-users");
        } else if (response.status === 401) {
          console.log("No admitido");
        }
      })
      .catch((err) => {
        navigate("/list-users");
        console.log(err);
      });
  }

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          placeholder="Correo Electronico"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="number"
          placeholder="Rol"
          onChange={(e) => setRol(e.target.value)}
          value={rol}
          required
        />

        <button>Ingresar</button>
      </form>
    </>
  );
}

export default SaveUsers;
