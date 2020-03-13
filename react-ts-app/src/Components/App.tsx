import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../Redux/store";

import { IProps } from "../Interfaces/IAppProp";
import { IState } from "../Interfaces/IState";

import Home from "./Home";
import Usuarios from "./Usuario/Usuarios";
import AddUser from "./Usuario/AddUser/container";
import VerUsuario from "./Usuario/VerUser/container";
import EditUsuario from "./Usuario/EditUser/container";


export default class App extends Component<IProps, IState> {
  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path="/" component={Home} />
              <Route path="/usuarios" component={Usuarios} />
              <Route path="/AddUser" component={AddUser} />
              <Route path="/VerUser" component={VerUsuario} />
              <Route path="/EditUser" component={EditUsuario} />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}
