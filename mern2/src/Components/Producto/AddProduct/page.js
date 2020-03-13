import React from 'react'

import Nav from '../../Estructura/Nav.js'

export default function AddProduct(props) {
  const{nombre,marca,precio,distribuidor,tipo,eventoTextChanged,eventoSubmit}=props;
  return (
    <div>
      <Nav/>
      <div className='container col-md-4 mt-2'>
        <form onSubmit={eventoSubmit}>
          <div className='card-deck row container'>
            <div className='card border-primary ml-2 mt-2 bg-dark text-white'>
              <h4 className='card-header border-primary'>Entrar Producto</h4>
              <div className='card-body'>
                <div className='form-group'>
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='nombre'
                    placeholder='nombre'
                    value={nombre}
                    onChange={e=>eventoTextChanged('nombre',e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='marca'
                    placeholder='marca'
                    value={marca}
                    onChange={e=>eventoTextChanged('marca',e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='precio'
                    placeholder='precio'
                    value={precio}
                    onChange={e=>eventoTextChanged('precio',e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='distribuidor'
                    placeholder='distribuidor'
                    value={distribuidor}
                    onChange={e=>eventoTextChanged('distribuidor',e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='tipo'
                    placeholder='tipo'
                    value={tipo}
                    onChange={e=>eventoTextChanged('tipo',e.target.value)}
                  />
                </div>
              </div>
              <div className='card-footer border-primary'>
                  <button
                      type='submit'
                      className='btn border-success btn-dark text-success'
                  >
                      Done
                  </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
