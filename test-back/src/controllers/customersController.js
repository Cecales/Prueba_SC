// Model Customer
const customersModel = require("../models/customers");

const createCustomer = async (dataCustomer) => {
  if (
    !dataCustomer.documentType ||
    !dataCustomer.documentNumber ||
    !dataCustomer.name ||
    !dataCustomer.city ||
    !dataCustomer.address ||
    !dataCustomer.phone
  )
    return { status: 400, message: "Todos los campos son requeridos" };
  try {
    const newCustomer = await customersModel.create(dataCustomer);
    return {
      status: 200,
      message: "Cliente creado exitosamente!",
      data: newCustomer,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Se presento un error al crear el cliente!",
      data: error,
    };
  }
};

const getCustomers = async () => {
  try {
    const costumers = await customersModel.find();
    return {
      status: 200,
      message: "Se encontraron los clientes de manera exitosa!",
      data: costumers,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Se presento un error al buscar clientes!",
      data: error,
    };
  }
};

const getCustomerById = async (idCustomer) => {
  if (!idCustomer)
    return { status: 400, message: "El ID del cliente es requerido!" };
  try {
    const costumer = await customersModel.findById(idCustomer);
    return {
      status: 200,
      message: "Se encontraron los clientes de manera exitosa!",
      data: costumer,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Se presento un error al buscar clientes!",
      data: error,
    };
  }
};

const updateCustomer = async (idCustomer, dataCustomer) => {
  if (!idCustomer)
    return { status: 400, message: "El ID del cliente es requerido!" };
  try {
    const costumer = await customersModel.findByIdAndUpdate(
      idCustomer,
      dataCustomer
    );
    return {
      status: 200,
      message: "Cliente Actualizado!",
      data: costumer,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Se presento un error al actualizar el cliente!",
      data: error,
    };
  }
};

const deleteCustomer = async (idCustomer) => {
  if (!idCustomer)
    return { status: 400, message: "El ID del cliente es requerido!" };
  try {
    const costumer = await customersModel.findByIdAndRemove(idCustomer);
    return {
      status: 200,
      message: "Cliente Eliminado!",
      data: costumer,
    };
  } catch (error) {
    return {
      status: 500,
      message: "Se presento un error al eliminar clientes!",
      data: error,
    };
  }
};

module.exports = {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
};
