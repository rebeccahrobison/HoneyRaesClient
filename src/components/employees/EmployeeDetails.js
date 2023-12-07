import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "reactstrap";
import { getEmployeeById } from "../../data/employeesData";

export const EmployeeDetails = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState({})

  useEffect(() => {
    getEmployeeById(id).then(obj => setEmployee(obj))
  }, [id])



  return (
    <Table>
    <tbody>
      <tr>
        <th scope="row">Employee Id</th>
        <td>{employee.id}</td>
      </tr>
      <tr>
        <th scope="row">Name</th>
        <td>{employee.name}</td>
      </tr>
      <tr>
        <th scope="row">Specialty</th>
        <td>{employee.specialty}</td>
      </tr>
      {/* <tr>
        <th scope="row">Employee</th>
        <td>{employee.employee?.name || "Unassigned"}</td>
      </tr>
      <tr>
        <th scope="row">Completed?</th>
        <td>{employee.dateCompleted?.split("T")[0] || "Incomplete"}</td>
      </tr> */}
    </tbody>
  </Table>
  )
}