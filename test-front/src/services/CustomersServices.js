import axios_core from "axios";

const SERVER_NAME = "http://localhost:3000";
const API_CUSTOMERS = "/api/customers";
const PRIVATE_HEADERS = {
  "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
  "Content-Type": "application/json",
};

export async function createCustomer(customer) {
  const axios = axios_core.create({
    baseURL: SERVER_NAME,
    headers: PRIVATE_HEADERS,
  });

  try {
    let response = await axios.post(`${SERVER_NAME}${API_CUSTOMERS}`, customer);
    return response;
  } catch (err) {
    return { status: 500, message: err };
  }
}

export async function getCustomers() {
  const axios = axios_core.create({
    baseURL: SERVER_NAME,
    headers: PRIVATE_HEADERS,
  });

  let response = await axios.get(`${SERVER_NAME}${API_CUSTOMERS}`);
  return response;
}

export async function getCustomer(idCustomer) {
  const axios = axios_core.create({
    baseURL: SERVER_NAME,
    headers: PRIVATE_HEADERS,
  });

  let response = await axios.get(`${SERVER_NAME}${API_CUSTOMERS}/${idCustomer}`);
  return response;
}

export async function updateCustomer(idCustomer, customer) {
  const axios = axios_core.create({
    baseURL: SERVER_NAME,
    headers: PRIVATE_HEADERS,
  });

  let response = await axios.put(
    `${SERVER_NAME}${API_CUSTOMERS}/${idCustomer}`,
    customer
  );
  return response;
}

export async function deleteCustomer(idCustomer) {
  const axios = axios_core.create({
    baseURL: SERVER_NAME,
    headers: PRIVATE_HEADERS,
  });

  let response = await axios.delete(`${SERVER_NAME}${API_CUSTOMERS}/${idCustomer}`);
  return response;
}
