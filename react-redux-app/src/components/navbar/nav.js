import React, { Component } from 'react'

import { withRouter } from 'react-router-dom';

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <nav className='navbar bg-dark text-ligth'>                    
          <div>
            <button
                type='button'
                className='btn btn-outline-primary mr-2 btn-sm'
                onClick={()=>this.props.history.goBack()}>
                «
            </button>
            <button
                    type='button'
                    className='btn btn-outline-primary mr-2 btn-sm'
                    onClick={()=>this.props.history.push('/')}>
                    Home
            </button>
            <button
                    type='button'
                    className='btn btn-outline-primary mr-2 btn-sm'
                    onClick={()=>this.props.history.push('/Results')}>
                    Results
            </button>
          </div>
        </nav>
      </div>
    )
  }
}
export default withRouter(Nav)