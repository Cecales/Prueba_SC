const router = require("express").Router();
const { login } = require("../controllers/authController");

// Login route
router.post("/login");

// Login route
router.post("/login", async (req, res) => {
  const { user, password } = req.body;
  const response = await login(user, password);
  res.status(response.status).json(response);
});

module.exports = router;
