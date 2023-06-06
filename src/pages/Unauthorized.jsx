import React from "react";

function Unauthorized() {
  return (
    <div >
      <div className="card">
        <div className="card-body p-4 p-sm-5 justify-content-center">
          <div className="fw-bold h1 lh-1 text-300 fs-error text-center">400</div>
          <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold w-md-75 w-xl-100 mx-auto">
            Acceso denegado.
          </p>
          <hr />
          <p>
            Su usuario no tiene acceso a este sitio valide nuevamente o pongase en contacto con el administrador.
          </p>
          <a className="btn btn-primary btn-sm mt-3" href="/login">
            <span className="fas fa-home me-2"></span>Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export default Unauthorized;
