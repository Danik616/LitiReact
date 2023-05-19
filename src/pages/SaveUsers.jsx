import { Context } from "../context/Context"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



function SaveUsers() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRol] = useState(0);
  const {manejarSubmitSave} = useContext(Context)
  let navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    manejarSubmitSave({ email, password, role }).then((code) => {
      if (code === "Accepted") {
        navigate("/list-users")
      } else if (code === "Unauthorized") {
        console.log("No admitido");
      } else if(response.statusText === "Bad Request"){
        console.log("Usuario existente")
      }
    })
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
          value={role}
          required
        />

        <button>Ingresar</button>
      </form>
    </>
  );
}

export default SaveUsers;
