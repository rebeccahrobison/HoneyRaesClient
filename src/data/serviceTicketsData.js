const _apiUrl = "/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getServiceTicketById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}
