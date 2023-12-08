const _apiUrl = "/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getServiceTicketById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}


export const postTicket = (ticketObj) => {
  return fetch(`${_apiUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticketObj)
  })
}

export const deleteTicket = (id) => {
  return fetch(`${_apiUrl}/${id}`, {
    method: "DELETE"
  })
}

export const completeTicket = (id) => {
  return fetch(`${_apiUrl}/${id}/complete`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
  })
}

export const assignTicket = (ticketId, ticket) => {
  return fetch(`${_apiUrl}/${ticketId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ticket)
  })
}