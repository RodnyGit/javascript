import React, {Component} from 'react';
import './bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import array from './models/datos.json';
import Cards from './componentes/Cards';
import CardForm from './componentes/CardForm';
import Posts from './componentes/Posts';



class App extends Component {
  state = {
    datos: array,   
  }

  
  addCard=(card)=>{
    card.id=this.state.datos.length;
    card.done=false;
    this.setState({
      datos:[...this.state.datos, card]
    })
    console.log(this.state)
  }
  changeStatus=(id)=>{
    const newDatos = this.state.datos.map(e=>{
      if (e.id===id) {
        e.done=!e.done
      }
      return e
    });      
    this.setState({datos:newDatos})    
  }
  deleteCard=(id)=>{
    const newDatos = this.state.datos.filter(e=>e.id!==id);
    this.setState({
      datos:newDatos
    })    
  }
  
  render() {
    return(
            <div>
              <Router>
                <Route path="/" render={()=>
                  <div >                    
                    <nav className="navbar navbar-expand-lg bg-dark text-ligth">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <a className="navbar-brand" href="/">Home</a>

                      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                          <li className="nav-item active">
                            <a className="nav-link" href="/cards">Targetas <span className="sr-only">(current)</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/addCard">Agregar targeta</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="/posts">Posts</a>
                          </li>                          
                        </ul>                        
                      </div>
                    </nav>
                  </div>
                }/>
                <Route path="/cards" render={()=>
                  <div>                    
                    <Cards cards={this.state.datos} changeStatus={this.changeStatus} deleteCard={this.deleteCard}/>
                  </div>
                }/>
                <Route path="/addCard" render={()=>
                  <div>                    
                    <CardForm addCard={this.addCard}/>
                  </div>
                }/>
                <Route path="/posts" render={()=>
                  <div>
                    <Posts/>
                  </div>
                }/>
              </Router>
            </div>
          ) 
  }
}
export default App;