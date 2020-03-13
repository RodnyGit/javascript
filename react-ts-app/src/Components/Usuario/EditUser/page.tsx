import React from 'react'

import Nav from '../../Estructura/nav'

export default function EditUsuario(props: any) {
  const { nombre, edad, sexo, oficio, nacionalidad, eventoTextChanged, eventoSubmit } = props;
  return (
    <div>
      <Nav />
      <div className='container col-md-4 mt-2'>
        <form onSubmit={eventoSubmit}>
          <div className='card-deck row container'>
            <div className='card border-primary ml-2 mt-2 bg-dark text-white'>
              <h4 className='card-header border-primary'>Editar Usuario</h4>
              <div className='card-body'>
                <div className='form-group'>
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='nombre'
                    placeholder={'Nombre: '}
                    value={nombre}
                    onChange={e => eventoTextChanged('nombre', e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='edad'
                    placeholder={'edad: '}
                    value={edad}
                    onChange={e => eventoTextChanged('edad', e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='sexo'
                    placeholder={'sexo: '}
                    value={sexo}
                    onChange={e => eventoTextChanged('sexo', e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='oficio'
                    placeholder={'oficio: '}
                    value={oficio}
                    onChange={e => eventoTextChanged('oficio', e.target.value)}
                  />
                  <input
                    type=''
                    className='form-control mt-1 border-primary bg-dark text-white'
                    id='nacionalidad'
                    placeholder={'nacionalidad: '}
                    value={nacionalidad}
                    onChange={e => eventoTextChanged('nacionalidad', e.target.value)}
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