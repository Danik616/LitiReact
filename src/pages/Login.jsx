import { useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Context } from "../context/Context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { manejarSubmitLogin } = useContext(Context);
  const navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    manejarSubmitLogin({ email, password }).then((code) => {
      if (code === "OK") {
        navigate("/list-users")
      } else if (code === "Unauthorized") {
        console.log("No admitido");
      }
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
        <button>Ingresar</button>
      </form>
    </>
  );
};

export default Login;
