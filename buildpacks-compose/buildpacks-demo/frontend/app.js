const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("http://backend:5000/api/hello");
    res.send(`<h2>${response.data.message}</h2>`);
  } catch (err) {
    res.send("<h2>Backend not available yet...</h2>");
  }
});

app.listen(port, () => console.log(`Frontend running on port ${port}`));
