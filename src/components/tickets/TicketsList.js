import { useEffect, useState } from "react";
import { Button, Table } from "reactstrap";
import { completeTicket, deleteTicket, getServiceTickets } from "../../data/serviceTicketsData";
import { Link } from "react-router-dom";

export default function TicketsList() {
  const [tickets, setTickets] = useState([]);

  const getAndSetTickets = () => {
    getServiceTickets().then(setTickets)
  }

  useEffect(() => {
    getAndSetTickets()
  }, []);

  const handleDeleteBtn = (e, id) => {
    e.preventDefault()

    deleteTicket(id).then(getAndSetTickets())
  }

  const handleCompleteBtn = (e, id) => {
    e.preventDefault();
    console.log("complete btn clicked")

    completeTicket(id).then(getAndSetTickets())
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Emergency?</th>
          <th>Date Completed</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={`ticket-${t.id}`}>
            <th scope="row">{t.id}</th>
            <td>{t.description}</td>
            <td>{t.emergency ? "yes" : "no"}</td>
            {t.dateCompleted.split("T")[0] == "0001-01-01" ? 
              <td>{"Incomplete"}</td>
              :
              <td>{t.dateCompleted?.split("T")[0]}</td>
            }
            <td>
              <Link to={`${t.id}`}>Details</Link>
            </td>
            <td>
              <Button onClick={(e) => handleDeleteBtn(e, t.id)}>Delete</Button>
            </td>
            {(t.dateCompleted.split("T")[0] == "0001-01-01" && t.employeeId) ?
              <td>
                <Button onClick={e => handleCompleteBtn(e, t.id)}>Complete</Button>
              </td>
            :
              <td></td>
            }

          </tr>
        ))}
      </tbody>
    </Table>
  );
}
