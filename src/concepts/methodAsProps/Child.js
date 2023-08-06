const Child = (props) =>{
    return(
        <div>
            <button onClick={()=>props.greet('Child')}>Click to greet parent</button>
        </div>
    )
}

export default Child