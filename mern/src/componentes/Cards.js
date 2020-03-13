import React,{Component} from 'react';
import PropTypes from 'prop-types'
import '../bootstrap.css';

import Card from './Card'

class Cards extends Component{
    render(){
        return(
            <div className="row">
                {this.props.cards.map(card=> 
                    <Card item={card} key={card.id} changeStatus={this.props.changeStatus} deleteCard={this.props.deleteCard}/>
                )}
            </div>
        )
    }
}
Card.propTypes={
    item:PropTypes.object.isRequired
}
export default Cards;