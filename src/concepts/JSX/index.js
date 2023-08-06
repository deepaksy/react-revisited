import React from 'react'
import Hello from './Hello'
import WithoutJSX from './Withoutjsx'
const index = () => {
  return (
    <div>
        <h1>
            With JSX:
        </h1>
        <Hello/>
        <h1>
            Without JSX:
        </h1>
        <WithoutJSX/>
    </div>
  )
}

export default index