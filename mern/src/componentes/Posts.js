import React, { Component } from 'react'

export default class Posts extends Component {
    state={
        datos:[]
    }
    
    async componentDidMount(){
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');         
        const posts=await response.json();
        this.setState({
            datos:posts
        })
    }

    render() {
        return (
            <div className="mt-3">
                {
                    this.state.datos.map(e=>
                    <div className="ml-3 mr-3 " key={e.id}> 
                        <h4>
                            {e.title}
                        </h4>
                        <p>
                            {e.body}
                        </p>
                    </div>)
                }
            </div>
        )
    }
}
