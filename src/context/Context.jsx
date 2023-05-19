import { createContext} from "react";
import axios from "axios";


const baseURL = "http://192.168.20.50:8080/";

export const Context = createContext();

export function ContextProvider(props) {
  function getBaseURL() {
    return baseURL;
  }

  function manejarSubmitSave(form) {
    axios
      .post(baseURL + "save", form)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return 201;
        } else if (response.status === 401) {
          console.log("No admitido");
          return 401;
        }
      })
      .catch((err) => {
        console.log(err);
        return 401;
      });
  }

  function manejarSubmitLogin(form) {
    return new Promise((resolve, reject)=> {
      let code = ""
      axios
      .post(baseURL + "login", form)
      .then((response) => {
        if (response.statusText === "OK") {
          code=response.statusText
        } else if (response.statusText == "Unauthorized") {
          console.log("No admitido");
          code=response.statusText
        }
        resolve(code)
      })
      .catch((err) => {
        code="Unauthorized"
        resolve(code)
        console.log(err);
      });
    })
  }

  return (
    <Context.Provider
      value={{
        manejarSubmitSave,
        manejarSubmitLogin,
        getBaseURL
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
