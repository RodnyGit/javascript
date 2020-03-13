import React from 'react'

import Nav from '../../Estructura/Nav.js'

export default function page(props) {  
  return (
    <div>
      <Nav/>
      <div className="card text-white bg-dark border-primary text-primary col-md-3 container mt-3">
        <div className="card-header">
          {props.user.nombre}
        </div>
        <div className="card-body">
          <h5 className="card-title">edad: {props.user.edad}</h5>
          <p className="card-text">
              Nacionalidad: {props.user.nacionalidad}<br/>
              Sexo: {props.user.sexo}<br/>  
          </p>
        </div>
        <div className="card-footer">
              Oficio: {props.user.oficio}<br/>
        </div>
      </div>
    </div>
  )
}
