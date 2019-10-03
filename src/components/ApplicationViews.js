// Application Views

import { Route, Redirect } from "react-router-dom"
import React, { Component } from 'react'
import Home from './home/Home'
// import LocationCard from './location/LocationCard'
// import EmployeeCard from './employee/EmployeeCard'
// import OwnerCard from './owner/OwnerCard'
import AnimalList from './animal/AnimalList'
import EmployeeList from './employee/EmployeeList'
import LocationList from './location/LocationList'
import OwnerList from './owner/OwnerList'
import AnimalDetail from './animal/AnimalDetail'
import LocationDetail from './location/LocationDetail'
// import EmployeeDetail from './employee/EmployeeDetail'
import OwnerDetail from './owner/OwnerDetail'
import AnimalForm from './animal/AnimalForm'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeForm from './employee/EmployeeForm'
import EmployeeWithAnimals from './employee/EmployeeWithAnimals'
import OwnerForm from './owner/OwnerForm'
import AnimalManager from '../modules/AnimalManager'
import AnimalCard  from './animal/AnimalCard'
import Login from './auth/Login'


class ApplicationViews extends Component {

  // Check if credentials are in local storage
  //returns true/false


  //Displays to the DOM
  // A path is just which page is being displayed(a directory or url). An exact path tells react to only display what value is in the quotation marks. Otherwise React will compound multiple pages if they follow far enough down the url.

  // A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM. (React's version of a Div)


  // Props holds the attributes: "history, location, match" from React Router DOM that are passe on to child objects"

  render() {
    return (

      <React.Fragment>
        <Route path="/login" render={props => {
          return <Login setUser={this.props.setUser} {...props} />
        }} />
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        <Route exact path="/animals" render={props => {
          if (this.props.user) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        <Route
          path="/animals/:animalId(\d+)/edit" render={props => {
            return <AnimalEditForm {...props} />
          }}
        />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route exact path="/locations" render={(props) => {
            return <LocationList {...props} />
        }} />
        <Route path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the locationlId to the locationDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          if (this.props.user) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/new" render={(props) => {
          return <EmployeeForm {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)/details" render={(props) => {
          return <EmployeeWithAnimals {...props} />
        }} />
        <Route exact path="/owners" render={(props) => {
          if (this.props.user) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owners/new" render={(props) => {
          return <OwnerForm {...props} />
        }} />
        <Route path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the locationlId to the locationDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props} />
        }} />

      </React.Fragment>
    )
  }
}

export default ApplicationViews