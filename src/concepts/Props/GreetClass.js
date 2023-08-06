import { Component } from "react";

class Greet extends Component{
    
    render(){
        const {name,heroname} = this.props
        return(
            <h1>Hello {name} a.k.a {heroname}</h1>
        )
    }
}

export default Greet