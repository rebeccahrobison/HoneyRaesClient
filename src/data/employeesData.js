export const getEmployees = () => {
  return fetch("/employees").then((r) => r.json())
}

export const getEmployeeById = (id) => {
  return fetch(`/employees/${id}`).then((r) => r.json())
}