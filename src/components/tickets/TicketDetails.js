import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Table } from "reactstrap";
import { getServiceTicket, getServiceTicketById } from "../../data/serviceTicketsData";

export default function TicketDetails() {
  const { id } = useParams();
  const navigate = useNavigate()

  const [ticket, setTicket] = useState(null);

  //add useEffect here to get the ticket details from the API
  useEffect(() => {
    getServiceTicketById(id).then(obj => setTicket(obj))
  }, [id])

  if (!ticket) {
    return null;
  }

  const handleAssignBtn = (e) => {
    e.preventDefault()

    navigate("assign")
  }

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <th scope="row">Customer</th>
            <td>{ticket.customer.name}</td>
          </tr>
          <tr>
            <th scope="row">Description</th>
            <td>{ticket.description}</td>
          </tr>
          <tr>
            <th scope="row">Emergency</th>
            <td>{ticket.emergency ? "yes" : "no"}</td>
          </tr>
          <tr>
            <th scope="row">Employee</th>
            <td>
              {
                ticket.employee?.name 
                || 
                <Button onClick={e => handleAssignBtn(e)}>Assign Ticket</Button>
              }
            </td>

          </tr>
          <tr>
            <th scope="row">Completed?</th>
            {ticket.dateCompleted.split("T")[0] == "0001-01-01" ?
              <td>{"Incomplete"}</td>
              :
              <td>{ticket.dateCompleted?.split("T")[0]}</td>
            }
          </tr>


        </tbody>
      </Table>
      {/* {ticket.employeeId ?
        ""
        :
        <Button onClick={e => handleAssignBtn(e)}>Assign Ticket</Button>
      } */}
    </div>
  );
}
