import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom"
const baseURL="http://localhost:8080/login"
const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate=useNavigate()

    function handlerSubmit(e){
        e.preventDefault()
        manejarSubmit({email, password})
        setEmail("")
        setPassword("")
    }

    function manejarSubmit(form){
        axios.post(baseURL, form).then((response)=>{
            console.log(response)
            if (response.status === 200) {
                navigate("/list-users")
            } else if(response.status === 401){
                console.log("No admitido")
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input placeholder="Correo Electronico" onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <input placeholder="Contraseña" onChange={(e)=> setPassword(e.target.value)} value={password}/>
                <button>Ingresar</button>
            </form>
        </>
    )
}

export default Login