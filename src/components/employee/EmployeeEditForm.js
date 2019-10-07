import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
import "./EmployeeForm.css"
// import EmployeeList from "../employee/EmployeeList";

class EmployeeEditForm extends Component {
  //set the initial state
  state = {
    employeeName: "",
    role: "",
    loadingStatus: true
  };

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  updateExistingEmployee = evt => {
    evt.preventDefault()
    this.setState({ loadingStatus: true });
    const editedEmployee = {
      id: this.props.match.params.employeeId,
      name: this.state.employeeName,
      role: this.state.role
    };
    EmployeeManager.update(editedEmployee)
      .then(() => this.props.history.push("/employees"))
  }

  componentDidMount() {
    EmployeeManager.getAll()
      .then(allEmployees => {
        EmployeeManager.get(this.props.match.params.employeeId)
          .then(employee => {
            this.setState({
              employeeName: employee.name,
              role: employee.role,
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
              <input type="text" required className="form-control" onChange={this.handleFieldChange} id="employeeName" value={this.state.employeeName}/>
              <label htmlFor="employeeName">Employee Name</label>
              <input type="text" required className="form-control"onChange={this.handleFieldChange} id="role" value={this.state.role}/>
              <label htmlFor="role">Role</label>
            </div>
            <div className="alignRight">
              <button type="button" disabled={this.state.loadingStatus} onClick={this.updateExistingEmployee} className="btn btn-primary">Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default EmployeeEditForm