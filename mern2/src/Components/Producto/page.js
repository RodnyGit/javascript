import React from 'react'

export default function Producto(props) {
  const{onClick, deleteProduct}=props;  
  return (
    <div className='card-deck row container col-md-3'>
      <div>
        <div className='card border-primary ml-2 mt-2 bg-dark text-white'>
          <h4 className='card-header border-primary'>
            {props.product.nombre}
          </h4>
          <div className='card-body'>
            <div className='card-text'>
              Marca: {props.product.marca}
            </div>
            <br />
            <div className='card-text'>
              Precio: {props.product.precio}</div>
          </div>
          <div className='card-footer border-primary'>
            <button
              type='button'
              className='btn btn-info ml-1'
              onClick={e=>onClick('/EditProduct', props.product)}>
              editar
            </button>
            {/* <a className='btn btn-warning text-dark ml-1' href='/VerProduct'>
              ver
            </a> */}
            <button
              type='button'
              className='btn btn-warning ml-1'
              onClick={e=>onClick('/VerProduct', props.product)}>
              ver
            </button>
            <button
              type='button'
              className='btn btn-danger ml-1'
              onClick={deleteProduct}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}