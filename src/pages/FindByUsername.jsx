import {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom"
import { Context } from "../context/Context"


function FindByUsername() {
const [username, setUsername] = useState("")
const [usuario, setUsuario] = useState(null)

const { manejarFindById } = useContext(Context)
const navigate = useNavigate();

function handlerSubmit(e) {
    e.preventDefault();
    
    manejarFindById({username}).then(({code, usuario}) => {
      if (code === "OK") {
        setUsuario(usuario)
        console.log(usuario)
      } else if (code === "Unauthorized") {
        navigate("/login")
        console.log("No admitido");
      }
    });
  }

  return (
    <div>
        <form onSubmit={handlerSubmit}>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)}>
            </input>
            <button type="submit"></button>
        </form>

        <div>
            {usuario===null?<p>No hay usuario por mostrar</p>: <div>
            <p className='mb-0 mt-3'>{usuario.usuarioId}</p>
            <p className='mb-0'>{usuario.usuarioNombre1}&nbsp;{usuario.usuarioNombre2}&nbsp;{usuario.usuarioNombre3}&nbsp;{usuario.usuarioNombre4}</p>
            <p className='mb-0'>{usuario.usuarioCorreo}</p>
            </div> }
        </div>
    </div>
  )
}

export default FindByUsername