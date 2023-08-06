import { createElement } from "react"

const Hello = () =>{
    return createElement('div',{
        id:'container',className:'container'
    },createElement('h1',{id:'header',className:'header'},'Hello Deepak'))
}

export default Hello