import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = "http://localhost:8080/save";
import urlImg from "./../assets/img/logo.png";
import urlImgLogo from "./../assets/img/img-login.jpg";
import urlImgLogoLiti from "./../assets/img/icon-liti-login.png";

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
            <div className="col col-xl-10">
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
                        <div class="form-outline mb-2">
                          <input
                            className="form-control form-control-lg text-uppercase"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                          <label class="form-label text-secondary">Usuario</label>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            className="form-control form-control-lg "
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <label class="form-label text-secondary">Contraseña</label>
                        </div>
                        <div className="form-outline mb-2">
                          <input
                            type="number"
                            className="form-control form-control-lg "
                            onChange={(e) => setRol(e.target.value)}
                            value={rol}
                            required
                          />
                          <label class="form-label text-secondary">Rol</label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-warning btn-lg btm-block text-light">
                            Registrar
                          </button>
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
}

export default SaveUsers;
