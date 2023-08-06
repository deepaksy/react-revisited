import { Component } from "react";
import Child from './Child'
import './index.css'

class Parent extends Component{
    constructor(props){
        super(props)
        this.greet = this.greet.bind(this)
    }

    greet(childname){
        alert(`Greet parent from ${childname}`)
    }
    render(){
        return(
            <div>
                <Child greet={this.greet}/>
            </div>
        )
    }
}

export default Parent