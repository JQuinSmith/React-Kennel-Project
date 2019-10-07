import React, { Component } from 'react';
import { Link } from "react-router-dom";


class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('../employee/nurse.png')} alt="My Vet" />
          </picture>
          <h3>Employee Name: <span className="card-employeename">{this.props.employee.name}</span></h3>
          <p>Role: {this.props.employee.role}</p>
          <Link to={`/employees/${this.props.employee.id}/details`}><button>Details</button></Link>
          <button type="button"
            onClick={() => {this.props.history.push(`/employees/${this.props.employee.id}/edit`) }}>Edit</button>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire This Employee</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;