import { useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { Context } from "../context/Context";

const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { manejarSubmitLogin } = useContext(Context);
  const navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    manejarSubmitLogin({ username, password }).then((code) => {
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
          placeholder="Username"
          onChange={(e) => setUser(e.target.value)}
          value={username}
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
