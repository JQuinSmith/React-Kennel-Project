import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        <picture>
              <img src={require('../owner/avatar.png')} alt="My Owner" />
            </picture>
          <h3>Owner Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Return Time: {this.props.owner.returnTime}</p>
          <Link to={`/owners/${this.props.owner.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Pick Up Complete</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;