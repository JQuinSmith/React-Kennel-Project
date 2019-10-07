import React, { Component } from 'react';
import { Link } from "react-router-dom";
import LocationManager from '../../modules/LocationManager'

class LocationCard extends Component {
  handleDelete=(id) => {
    LocationManager.delete(id)
    .then(() => this.props.getData());
  }
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('../location/pin.png')} alt="My Vet" />
          </picture>
          <h3>Location: <span className="card-locationname">{this.props.locale.area}</span></h3>
          <p>Address: {this.props.locale.address}</p>
          <Link to={`/locations/${this.props.locale.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => {this.props.history.push(`/locations/${this.props.locale.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close This Location</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;