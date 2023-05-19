import { Context } from "../context/Context"
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



function SaveUsers() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState(0);
  const {manejarSubmitSave} = useContext(Context)
  let navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    if(manejarSubmitSave({ email, password, rol }) === 200){
      navigate("/list-users")
    }else if(manejarSubmitSave({ email, password, rol }) === 401){
      console.log("No admitido")
    }
    setEmail("");
    setPassword("");
    setRol("");
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
