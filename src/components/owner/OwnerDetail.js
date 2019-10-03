import React, { Component } from 'react';
import OwnerManager from '../../modules/OwnerManager';


class OwnerDetail extends Component {

    state = {
        name: "",
        breed: "",
        loadingStatus: true,
    }

    handleDelete = () => {
      //invoke the delete function in OwnerManger and re-direct to the Owner list.
      this.setState({loadingStatus: true})
      OwnerManager.delete(this.props.ownerId)
      .then(() => this.props.history.push("/owners"))
  }

    componentDidMount(){
        console.log("OwnerDetail: ComponentDidMount");
        //get(id) from OwnerManager and hang on to that data; put it into state
        OwnerManager.get(this.props.ownerId)
        .then((owner) => {
            this.setState({
                name: owner.name,
                returnTime: owner.returnTime,
                loadingStatus: false
            });
        });
    }

    render() {
      return (
        <div className="card">
          <div className="card-content">
          <picture>
              <img src={require('../owner/avatar.png')} alt="My Owner" />
            </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Return Time: {this.state.returnTime}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
          </div>
        </div>
      );
    }
}

export default OwnerDetail;