const Greet = (props) =>{
    const {name,heroname} = props
    return(
        <>
        <h1>Hello {name} a.k.a {heroname}</h1>
        {props.children}
        </>
    )
}

export default Greet