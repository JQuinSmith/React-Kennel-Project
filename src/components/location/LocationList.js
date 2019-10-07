import React, { Component } from 'react'
//import the components we will need
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
                    .then((newLocation) => {
                        this.setState({
                            locations: newLocation
                        })
                    })
            })
    }

    componentDidMount() {
        console.log("Location LIST: ComponentDidMount");
        //getAll from locationManager and hang on to that data; put it in state
        LocationManager.getAll()
            .then((locations) => {
                this.setState({
                    locations: locations
                })
            })
    }

    render() {
        console.log("Location LIST: Render");

        return (
            <>
                <section className="section-content">
                    <button type="button"
                        className="btn"
                        onClick={() => { this.props.history.push("/locations/new") }}>
                        Add New Location
                </button>
                </section>
                <div className="container-cards">
                    {this.state.locations.map(location =>
                        <LocationCard key={location.id}
                            locale={location}
                            deleteLocation={this.deleteLocation}
                            {...this.props}
                        />)}
                </div>
            </>
        )
    }
}

export default LocationList