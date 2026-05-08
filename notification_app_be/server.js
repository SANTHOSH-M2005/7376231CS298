const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());

app.get("/notifications", async (req, res) => {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      error: "Failed to fetch notifications",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});