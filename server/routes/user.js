const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorization");
const pool = require("../db");

router.get("/public-info", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT user_name, user_email FROM users WHERE user_id = $1",
      [req.user.id]
    );
    res.json(user.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/public-info", authorize, async (req, res) => {
  console.log(req.body);
  console.log(req.user);
  try {
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }
    if (!validEmail(req.body.user_email)) {
      res.json({ value: "invalid email" });
    } else {
      const modify = await pool.query(
        "UPDATE users SET user_name=$1, user_email=$2 WHERE user_id = $3",
        [req.body.user_name, req.body.user_email, req.user.id]
      );
      res.json({ value: true });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
