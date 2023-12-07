export const getCustomers = () => {
  return fetch("/customers").then((r) => r.json())
}

export const getCustomerById = (id) => {
  return fetch(`/customers/${id}`).then((r) => r.json())
}