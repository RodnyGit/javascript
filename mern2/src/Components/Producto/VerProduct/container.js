import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import Page from './page';

class Producto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      product: this.props
    }
  }

  render () {    
    return (
      <Page
        products={this.state.product.location.state}
      />      
    )
  }
}
export default withRouter(Producto);