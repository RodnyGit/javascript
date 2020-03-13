import React,{Component} from 'react';

class CardForm extends Component{
    state={
        id:'',
        nombre:'',
        titulo:'',
        description:''
    }
    eventoSubmit=(e)=>{
        e.preventDefault();
        this.props.addCard(this.state);
        this.setState({
            id:'',
            nombre:'',
            titulo:'',
            description:''
        })
    }
    eventoTextChange=(e)=>{        
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render(){        
        return(
            <div className="mb-2 col-md-12">
                <form onSubmit={this.eventoSubmit} className="col-md-3 ml-2 mb-2">
                    <div className="card form-row  bg-dark ml-2">
                        <div>
                            <div className="card-header">
                                <input type="text" className="form-control" placeholder="Nombre" name="nombre"
                                onChange={this.eventoTextChange} value={this.state.nombre}></input>
                            </div>
                            <div className="card-body">
                                <input type="text" className="form-control" placeholder="Titulo" name="titulo"
                                onChange={this.eventoTextChange} value={this.state.titulo}></input>
                            </div>
                            <div className="card-footer">
                                <input type="text" className="form-control" placeholder="Descripcion" name="description"
                                onChange={this.eventoTextChange} value={this.state.description}></input>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success text-ligth">Done</button>
                    </div>                    
                </form>
            </div>
        )
    }
}
export default CardForm;