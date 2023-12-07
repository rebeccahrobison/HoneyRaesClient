import { useEffect, useState } from "react";
import { getCustomers } from "../data/customersData";
import { Table } from "reactstrap";
import { Link } from "react-router-dom";

export const Customers = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(arr => setCustomers(arr))
  }, [])
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          {/* <th>Specialty</th> */}
          {/* <th>Date Completed</th> */}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((c) => (
          <tr key={`customer-${c.id}`}>
            <th scope="row">{c.id}</th>
            <td>{c.name}</td>
            {/* <td>{c.specialty}</td> */}
            <td>
              <Link to={`${c.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}