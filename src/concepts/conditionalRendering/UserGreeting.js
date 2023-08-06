import React, { Component } from 'react'

class UserGreeting extends Component {
  render() {
    const {loggedIn} = this.props
    return (
        <div>
            <h1>Welcome {loggedIn?"Deepak":"User"}</h1>
        </div>
    )
  }
}

export default UserGreeting