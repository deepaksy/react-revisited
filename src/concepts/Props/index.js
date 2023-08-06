import React from 'react'
import Greet from './GreetPerson'
import GreetClass from './GreetClass'
const index = () => {
  return (
    <div>
        <div>
            <h1>Props with Functional Components</h1>
            <Greet name="Clark" heroname="Superman">
            <p>
                This is children paragraph
            </p>
        </Greet>
        <Greet name="Bruce" heroname="Batman"/>
        <Greet name="Diana" heroname="Wonder women"/>
        </div>
        <div>
            <h1>Props with Class Components</h1>
            <GreetClass name="Clark" heroname="Superman">
            <p>
                This is children paragraph
            </p>
        </GreetClass>
        <GreetClass name="Bruce" heroname="Batman"/>
        <GreetClass name="Diana" heroname="Wonder women"/>
        </div>
    </div>
  )
}

export default index