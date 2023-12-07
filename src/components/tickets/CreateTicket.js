import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import { getCustomers } from "../../data/customersData";

export default function CreateTicket() {
  const [ticket, setTicket] = useState({description: "", emergency: false})
  const [customers, setCustomers] = useState([])


  useEffect(() => {
    getCustomers().then(arr => setCustomers(arr))
  }, 
  [])

  const handleChange = (e) => {
    const ticketCopy = {...ticket}
    ticket[e.target.name] = e.target.value
    setTicket(ticketCopy)
  }
  //TODO add names properties to form elements

  return (
  <Form>
    <h3>Submit a Ticket</h3>
    <div className="form-group">
      <Label>Description of problem</Label>
      <Input/>
    </div>
    <div className="form-group">
      <Label>Emergency:</Label>
      <Input type="checkbox"/>
    </div>
    <div className="form-group">
      <Input type="select">
        <option>Choose Customer Name . . .</option>
        {customers.map(c => {
          return (
            <option key={c.id}>{c.name}</option>
          )
        })}
      </Input>
    </div>
    
  </Form>);
}

//customer, description, emergency