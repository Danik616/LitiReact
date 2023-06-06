import { createContext} from "react";
import axios from "axios";


const baseURL = "http://192.168.0.230:8080/";

export const Context = createContext();

export function ContextProvider(props) {
  function getBaseURL() {
    return baseURL;
  }

  function manejarSubmitSave(form) {
    return new Promise((resolve, reject)=>{
      let code=""
      axios
      .post(baseURL + "save", form)
      .then((response) => {
        console.log(response);
        if (response.statusText === "Accepted") {
          code=response.statusText
        } else if (response.statusText === "Unauthorized") {
          code=response.statusText
        } else if(response.statusText === "Bad Request"){
          code=response.statusText
        }
        resolve(code)
      })
      .catch((err) => {
        code="Unauthorized"
        resolve(code)
        console.log(err);
      })
    })
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
