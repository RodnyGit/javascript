import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'

import Home from './Components/Home.js'

import Usuarios from './Components/Usuario/Usuarios'
import AddUser from './Components/Usuario/AddUser/container'
import VerUsuario from './Components/Usuario/VerUser/container'
import EditUsuario from './Components/Usuario/EditUser/container'

import Productos from './Components/Producto/Productos'
import AddProduct from './Components/Producto/AddProduct/container'
import VerProduct from './Components/Producto/VerProduct/container'
import EditProduct from './Components/Producto/EditProduct/container'


import store from './redux/store'

class App extends Component {
  render () {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path='/' component={Home} />
              <Route path='/usuarios' component={Usuarios}
                // path='/usuarios'
                // render={props => <Usuarios {...props} verUser={this.verUser} />}
              />
              <Route path='/productos' component={Productos} />
              <Route path='/AddUser' component={AddUser} />
              <Route path='/VerUser' component={VerUsuario} />
              <Route path='/EditUser' component={EditUsuario} />
              <Route path='/AddProduct' component={AddProduct} />
              <Route path='/VerProduct' component={VerProduct} />
              <Route path='/EditProduct' component={EditProduct} />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
export default App