import React,{Component} from 'react';
import PropTypes from 'prop-types'
import '../bootstrap.css';





class Card extends Component{
    state=
    {        
        id:this.props.item.id,
        nombre:this.props.item.nombre,
        titulo:this.props.item.titulo,
        description:this.props.item.description,  
        done:this.props.item.done  
    }
    changeStatus=()=>{        
        this.props.changeStatus(this.state.id);        
    }
    deleteCard=()=>{
        this.props.deleteCard(this.state.id);
    }

    render(){        
        if (this.props.item.done) {            
            return(
                <div key={this.state.id} className="card text-info bg-dark col-md-2 offset-md-1 mr-1 mt-3 mb-3">
                    <div className="card-header">
                        {this.state.nombre}                        
                         
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.titulo}</h5>
                        <p className="card-text">{this.state.description}</p>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-success text-rigth"
                        onClick={this.changeStatus}>Done</button>
                        <button type="button" className="btn btn-outline-danger offset-md-3"
                        onClick={this.deleteCard}>x</button>                                                      
                    </div>
                </div>
            )
        }
        else{
            return(
                <div key={this.state.id} className="card text-info bg-dark col-md-2 offset-md-1 mr-1 mt-3 mb-3">
                    <div className="card-header">
                        {this.state.nombre}
                        
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.titulo}</h5>
                        <p className="card-text">{this.state.description}</p>
                    </div> 
                    <div className="card-footer">
                        <button type="button" className="btn btn-danger text-warning" 
                        onClick={this.changeStatus}>Pendent</button> 
                        <button type="button" className="btn btn-outline-danger offset-md-3"
                        onClick={this.deleteCard}>x</button>                                                      
                    </div>
                </div> 
            )
        }
    }
}

Card.propTypes={
    item:PropTypes.object.isRequired
}
export default Card;