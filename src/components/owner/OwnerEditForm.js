import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"
import "./OwnerForm.css"
// import OwnerList from "../Owner/OwnerList";

class OwnerEditForm extends Component {
  //set the initial state
  state = {
    ownerName: "",
    returnTime: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingOwner = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedOwner = {
      id: this.props.match.params.OwnerId,
      name: this.state.ownerName,
      role: this.state.returnTime
  };
  OwnerManager.update(editedOwner)
      .then(() => this.props.history.push("/owners"))
}

  componentDidMount() {
    OwnerManager.getAll()
      .then(allOwners => {
        OwnerManager.get(this.props.match.params.ownerId)
          .then(owner => {
            this.setState({
              OwnerName: owner.name,
              returnTime: owner.returnTime,
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
                id="OwnerName"
                value={this.state.OwnerName}
              />
              <label htmlFor="OwnerName">Owner Name</label>

              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="role"
                value={this.state.returnTime}
              />
              <label htmlFor="returnTime">Return Time</label>
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingOwner}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default OwnerEditForm