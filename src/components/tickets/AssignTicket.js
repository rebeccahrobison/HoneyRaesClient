import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getEmployees } from "../../data/employeesData";
import { assignTicket, getServiceTicketById } from "../../data/serviceTicketsData";
import { Button, Form, Input } from "reactstrap";

export const AssignTicket = () => {
  const ticketId = useParams().id;
  const navigate = useNavigate()

  const [employees, setEmployees] = useState([])
  const [ticket, setTicket] = useState({})

  useEffect(() => {
    getServiceTicketById(ticketId).then(obj => setTicket(obj))
  }, [ticketId])

  useEffect(() => {
    getEmployees().then(arr => setEmployees(arr))
  }, [])

  const handleAssignBtn = (e) => {
    e.preventDefault()
    
    if(ticket.employeeId != 0) {
      assignTicket(ticketId, ticket).then(() => navigate("/tickets"))
    } else {
      window.alert("Please choose an employee to assign the ticket to")
    }
  }

  return (
    <Form>
    <h3>Assign a Ticket</h3>

    <div className="form-group">
      <Input 
        type="select"
        onChange={(e) => {
          const ticketCopy = {...ticket}
          ticketCopy.employeeId = parseInt(e.target.value)
          setTicket(ticketCopy)
        }}
      >
        <option value="0">Choose Employee to Assign . . .</option>
        {employees.map(e => {
          return (
            <option value={e.id} key={e.id}>{e.name}</option>
          )
        })}
      </Input>
    </div>
    <Button onClick={e => handleAssignBtn(e)}>Assign Ticket</Button>
    
  </Form>
  )
}