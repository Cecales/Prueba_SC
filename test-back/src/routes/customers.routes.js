const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customersController");
const { checkAuth } = require("../middleware/auth");

// GET all costumers
router.get("/", checkAuth, async (req, res) => {
  const costumers = await getCustomers();
  res.status(costumers.status).json(costumers);
});

// GET costumer by Id
router.get("/:id", checkAuth, async (req, res) => {
  const customer = await getCustomerById(req.params.id);
  res.status(customer.status).json(customer);
});

// ADD a new costumer
router.post("/", checkAuth, async (req, res) => {
  const response = await createCustomer(req.body);
  res.status(response.status).json(response);
});

// UPDATE a costumer
router.put("/:id", checkAuth, async (req, res) => {
  const response = await updateCustomer(req.params.id, req.body);
  res.status(response.status).json(response);
});

router.delete("/:id", checkAuth, async (req, res) => {
  const response = await deleteCustomer(req.params.id);
  res.status(response.status).json(response);
});

module.exports = router;
