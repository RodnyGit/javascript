import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

import Page from './page';

class Producto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      Producto: {}
    }
  }

  componentDidMount () {
    this.setProduct()
  }

  setProduct = async () => {
    await this.setState({
      Producto: this.props.producto
    })
  }
  onClick=(name, product)=>{
    this.props.history.push(name, product)
  }

  deleteProduct = () => {
    this.props.deleteProduct(this.state.Producto)
  }

  render () {
    return (
      <Page       
      product={this.props.producto}
      onClick={this.onClick}
      deleteProduct={this.deleteProduct}
      />      
    )
  }
}

Producto.propTypes = {
  producto: PropTypes.object.isRequired
}


export default withRouter(Producto);