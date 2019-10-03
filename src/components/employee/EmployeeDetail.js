import React, { Component } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeDetail extends Component {

  state = {
      name: "",
      role: "",
      loadingStatus: true,
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    EmployeeManager.delete(this.props.employeeId)
    .then(() => this.props.history.push("/employees"))
  }

  componentDidMount(){
    console.log("EmployeeDetail: ComponentDidMount");
    //get(id) from EmployeeManager and hang on to the data; put it into state
    EmployeeManager.get(this.props.employeeId)
    .then((employee) => {
      this.setState({
        name: employee.name,
        role: employee.role,
        loadingStatus: false
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img src={require('../employee/nurse.png')} alt="My Vet" />
            </picture>
            <h3>name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>role: {this.state.role}</p>
            <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Drop Employee</button>
        </div>
      </div>
    );
  }
}

export default EmployeeDetail;
