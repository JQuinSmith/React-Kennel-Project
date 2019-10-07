//Kennel.js renders the <NavBar> and <ApplicationViews>
import React, { Component } from 'react'

//Style sheet for the elements contained within the Kennel component.
import './Kennel.css'

//
import NavBar from './nav/NavBar'

import ApplicationViews from './ApplicationViews'

//Animal.css holds the styling for the cards created on each of the pages.
import './animal/Animal.css'

//Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.
class Kennel extends Component {
  //On startup, there is no user (user: false)
  state = {
    user: localStorage.getItem("credentials") !== null
  }

  // Check if credentials are in local storage
  //returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (authObj) => {
    /*
      For now, just store the email and password that
      the customer enters into local storage.
    */
    localStorage.setItem(
      "credentials",
      JSON.stringify(authObj)
    )
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () => {
    localStorage.clear()

    this.setState({
      user: this.isAuthenticated()
    });
  }



  //pass `clearUser()` as props to the **`<NavBar>`** component

  // componentDidMount() {
  //   this.setState({
  //     user: this.isAuthenticated()
  //   })
  // }

  render() {
    return (
      <>
        <NavBar user={this.state.user} clearUser={this.clearUser} />
        <ApplicationViews user={this.state.user}
          setUser={this.setUser} />
      </>
    )
  }
}


export default Kennel