import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCustomerById } from "../data/customersData";
import { Table } from "reactstrap";

export const CustomerDetails = () => {
  const { id } = useParams();

  const [customer, setCustomer] = useState({})

  useEffect(() => {
    getCustomerById(id).then(obj => setCustomer(obj))
  }, [id])

  return (
    <Table>
    <tbody>
      <tr>
        <th scope="row">Employee Id</th>
        <td>{customer.id}</td>
      </tr>
      <tr>
        <th scope="row">Name</th>
        <td>{customer.name}</td>
      </tr>
      {/* <tr>
        <th scope="row">Specialty</th>
        <td>{customer.specialty}</td>
      </tr> */}
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