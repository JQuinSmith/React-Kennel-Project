import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';

class OwnerForm extends Component {
    state = {
        ownerName: "",
        returnTime: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create Owner object, invoke the OwnerManager post method, and redirect to the full Owner list
    */
    constructNewOwner = evt => {
        evt.preventDefault();
        if (this.state.ownerName === "" || this.state.returnTime === "") {
            window.alert("Please input an Owner name and Return Time");
        } else {
            this.setState({ loadingStatus: true });
            const Owner = {
                name: this.state.ownerName,
                returnTime: this.state.returnTime,
            };

            // Create the Owner and redirect user to Owner list
            OwnerManager.post(Owner)
                .then(() => this.props.history.push("/owners"));
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
                                id="ownerName"
                                placeholder="Owner Name"
                            />
                            <label htmlFor="OwnerName">Name</label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="returnTime"
                                placeholder="Return Time"
                            />
                            <label htmlFor="return time">Return Time</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewOwner}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default OwnerForm