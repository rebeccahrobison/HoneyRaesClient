import { useEffect, useState } from "react";
import { getEmployees } from "../../data/employeesData";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getEmployees().then(arr => setEmployees(arr))
  }, [])

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Specialty</th>
          {/* <th>Date Completed</th> */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={`employee-${e.id}`}>
            <th scope="row">{e.id}</th>
            <td>{e.name}</td>
            <td>{e.specialty}</td>
            {/* <td>{t.dateCompleted?.split("T")[0] || "Incomplete"}</td> */}
            <td>
              <Link to={`${e.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}