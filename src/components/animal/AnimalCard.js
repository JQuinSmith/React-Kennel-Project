import React, { Component } from 'react';
import { Link } from "react-router-dom";
import AnimalManager from '../../modules/AnimalManager';



class AnimalCard extends Component {
  handleDelete=(id) => {
    AnimalManager.delete(id)
    .then(() => this.props.getData());
  }
  render() {
    // Building the card in HTML
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture>
          <h3>Pup's Name: <span className="card-petname">{this.props.animal.name}</span></h3>
          <p>Breed: {this.props.animal.breed}</p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button"
            onClick={() => { this.props.history.push(`/animals/${this.props.animal.id}/edit`) }}>Edit</button>
          {/* Creates a button that deletes an animal based on which ID it's assigned */}
          <button type="button" onClick={() => this.props.deleteAnimal(this.props.animal.id)}>Release Into the Wild</button>

        </div>
      </div>
    );
  }
}

export default AnimalCard;