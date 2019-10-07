import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';

class LocationForm extends Component {
    state = {
        area: "",
        address: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create Location object, invoke the LocationManager post method, and redirect to the full Location list
    */
    constructNewLocation = evt => {
        evt.preventDefault();
        if (this.state.area === "" || this.state.address === "") {
            window.alert("Please input an Location name and Return Time");
        } else {
            this.setState({ loadingStatus: true });
            const Location = {
                area: this.state.area,
                address: this.state.address
            };

            // Create the Location and redirect user to Location list
            LocationManager.post(Location)
                .then(() => this.props.history.push("/locations"));
        }
    };

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="LocationName"
                                placeholder="Location Name"
                            />
                            <label htmlFor="LocationName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="address"
                                placeholder="Address"
                            />
                            <label htmlFor="Address">Address</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewLocation}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default LocationForm