import React, { Component } from "react"
import LocationManager from "../../modules/LocationManager"
import "./LocationForm.css"
// import LocationList from "../Location/LocationList";

class LocationEditForm extends Component {
  //set the initial state
  state = {
    area: "",
    address: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingLocation = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedLocation = {
        id: this.props.match.params.locationId,
      area: this.state.area,
      address: this.state.address
  };
  LocationManager.update(editedLocation)
      .then(() => this.props.history.push("/locations"))
}

  componentDidMount() {
    LocationManager.getAll()
      .then(allLocations => {
        LocationManager.get(this.props.match.params.locationId)
          .then(location => {
            this.setState({
              area: location.area,
              address: location.address,
              loadingStatus: false,
            });
          })
      })
  }

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="area"
                value={this.state.area}
              />
              <label htmlFor="area">Location Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="address"
                value={this.state.address}
              />
              <label htmlFor="address">Address</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingLocation}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default LocationEditForm