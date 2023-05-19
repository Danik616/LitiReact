import { createContext, useState, useEffect } from "react";
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
    axios
      .post(baseURL + "login", form)
      .then((response) => {
        if (response.status == 200) {
          return 200;
        } else if (response.status == 401) {
          return 401;
          console.log("No admitido");
        }
      })
      .catch((err) => {
        return 401;
        console.log(err);
      });
  }

  return (
    <Context.Provider
      value={{
        manejarSubmitSave,
        manejarSubmitLogin,
        getBaseURL,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
