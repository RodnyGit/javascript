import React from 'react'

export default function Usuario(props) {
  const{onClick, deleteUser}=props;
  return (
    <div className='card-deck row container col-md-3'>
      <div>
        <div className='card border-primary ml-2 mt-2 bg-dark text-white'>
          <h4 className='card-header border-primary'>
            {props.user.nombre}
          </h4>
          <div className='card-body'>
            <div className='card-text'>
              Oficio: {props.user.oficio}
            </div>
            <br />
            <div className='card-text'>Edad: {props.user.edad}</div>
          </div>
          <div className='card-footer border-primary'>
            <button
              type='button'
              className='btn btn-info ml-1'
              onClick={e=>onClick('/EditUser', props.user)}>
              editar
            </button>
            {/* <a className='btn btn-warning text-dark ml-1' href='/VerUser'>
              ver
            </a> */}
            <button
              type='button'
              className='btn btn-warning ml-1'
              onClick={e=>onClick('/VerUser', props.user)}>
              ver
            </button>
            <button
              type='button'
              className='btn btn-danger ml-1'
              onClick={deleteUser}>
              x
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}