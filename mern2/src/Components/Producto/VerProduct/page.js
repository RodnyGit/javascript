import React from 'react'

import Nav from '../../Estructura/Nav.js'

export default function page(props) {  
    return (    
    <div>
      <Nav/>
      <div className="card text-white bg-dark border-primary text-primary col-md-3 container mt-3">
        <div className="card-header">
          {props.products.nombre}
        </div>
        <div className="card-body">
          <h5 className="card-title">
              Marca: {props.products.marca}</h5>
          <p className="card-text">
              Precio: {props.products.precio}<br/>
              Distribuidor: {props.products.distribuidor}<br/>  
          </p>
        </div>
        <div className="card-footer">
              Tipo: {props.products.tipo}<br/>
        </div>
      </div>
    </div>
  )
}
