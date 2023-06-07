import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";
import urlImg from "./../assets/img/logo.png";
import urlImgLogo from "./../assets/img/img-login.jpg";
import urlImgLogoLiti from "./../assets/img/icon-liti-login.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);

  const { manejarSubmitLogin } = useContext(Context);
  const navigate = useNavigate();

  function handlerSubmit(e) {
    e.preventDefault();
    manejarSubmitLogin({ username, password }).then((code) => {
      if (code === "OK") {
        navigate("/find-by-username");
      } else if (code === "Unauthorized") {
        setReady(true);
        console.log("No admitido");
      }
    });
  }

  function mostrarPassword() {
    var cambio = document.getElementById("password");
    var color = document.getElementById("show_password");
        if (cambio.type == "password") {
        color.classList.add("text-primary");
        cambio.type = "text";
    } else {
        cambio.type = "password";
        color.classList.remove("text-primary");
    }
  }

  return (
    <>
      <header
        id="header"
        className="fixed-top d-flex align-items-center bg-white"
      >
        <div className="container d-flex align-items-center justify-content-center">
          <a
            href="https://www.litigando.com/index.html"
            className="logo me-auto me-lg-0"
          >
            <img
              src={urlImg}
              alt="Logo_liti"
              width={300}
              className="img-fluid"
            ></img>
          </a>
        </div>
      </header>
      <br />
      <section id="st-login" className="mt-5">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10 col-lg-10">
              <div className="card rounded-5">
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src={urlImgLogo}
                      alt="Img_login"
                      className="img-fluid rounded-start-5"
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handlerSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img
                            src={urlImgLogoLiti}
                            alt="Liti_icon"
                            className="fa-2x me-3"
                          />
                          <span className="h2 fw-bold mb-0">Bienvenidos</span>
                        </div>
                        <br />
                        <div className="form-outline mb-2">
                          <input
                            className="form-control form-control-lg text-uppercase"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                          />
                          <label className="form-label">Usuario</label>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="password"
                            className="form-control form-control-lg "
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <label className="form-label">Contraseña</label>
                        </div>
                        <a href="#" className="mb-2 pb-lg-2 small text-muted">
                          ¿Olvidaste la contraseña?
                        </a>
                        <br />
                        <a href="#" className="small text-muted">
                          Política de privacidad
                        </a>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-warning btn-lg btm-block text-light">
                            Ingresar
                          </button>
                        </div>
                        <div>
                          {ready ? (
                            <div class="alert alert-danger" role="alert">
                              Credenciales Incorrectas.
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
