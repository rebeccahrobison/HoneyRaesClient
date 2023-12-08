import { useEffect, useState } from "react";
import { Button, Form, Input, Label } from "reactstrap";
import { getCustomers } from "../../data/customersData";
import { postTicket } from "../../data/serviceTicketsData";
import { useNavigate } from "react-router-dom";

export default function CreateTicket() {
  const [ticket, setTicket] = useState({description: "", emergency: false})
  const [customers, setCustomers] = useState([])

  const navigate = useNavigate();

  useEffect(() => {
    getCustomers().then(arr => setCustomers(arr))
  }, 
  [])

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    console.log("button clicked")

    if (ticket.description && ticket.customerId) {
      postTicket(ticket).then(() => {
        navigate("/tickets")
      })
    } else {
      window.alert("Please fill out all fields")
    }
  }

  return (
  <Form>
    <h3>Submit a Ticket</h3>
    <div className="form-group">
      <Label>Description of problem</Label>
      <Input onChange={(e) => {
        const ticketCopy = {...ticket}
        ticketCopy.description = e.target.value
        setTicket(ticketCopy)
      }}
      />
    </div>
    <div className="form-group">
      <Label>Emergency:</Label>
      <Input type="checkbox"
        onChange={(e) => {
          const ticketCopy = {...ticket}
          ticketCopy.emergency = e.target.checked
          setTicket(ticketCopy)
        }}/>
    </div>
    <div className="form-group">
      <Input 
        type="select"
        onChange={(e) => {
          const ticketCopy = {...ticket}
          ticketCopy.customerId = parseInt(e.target.value)
          setTicket(ticketCopy)
        }}
      >
        <option>Choose Customer Name . . .</option>
        {customers.map(c => {
          return (
            <option value={c.id} key={c.id}>{c.name}</option>
          )
        })}
      </Input>
    </div>
    <Button onClick={handleSubmitBtn}>Submit Ticket</Button>
    
  </Form>
  );
}

//customer, description, emergency