import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './redux/store'
import Home from './components/Home'
import Results from './components/results/container'
import Details from './components/details/container'



export default class App extends Component {
  render () {    
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path='/' component={Home} />
              <Route exact path='/Results' component={Results} />
              <Route exact path='/Details' component={Details} />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
