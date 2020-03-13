import React from 'react';
import './App.css';


function App() {
  return (
    <div>
      <Componente2 myText="myText" subtitulo="subtitulo"/>
      <Componente texto="texto" cuerpo="cuerpo"/>
    </div>
  );
}


function Componente(props) {
  return (
    <p id="caja2">
      {props.texto}<br/>
      {props.cuerpo}<br/>    
    </p>
  );
}

class Componente2 extends React.Component{
  state=
    {
      visible:true      
    }
  toggleVar=()=>{
    this.setState({visible:!this.state.visible})
  }
  render(){    
    if (this.state.visible) {
      return(
        <div id="caja">
          {this.props.myText}<br/>
          {this.props.subtitulo}<br/>
          <button onClick={this.toggleVar}>toggle</button>
        </div>
      )}
    else{
      return(
        <div id="caja">Texto Oculto<br/>
        <button onClick={this.toggleVar}>toggle</button>
        </div>       
      ) 
    }
  }
}




export default App;
