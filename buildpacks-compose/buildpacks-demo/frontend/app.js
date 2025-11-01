const express = require("express");
const axios = require("axios");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Frontend</title></head>
      <body style="font-family:sans-serif; text-align:center; margin-top:50px;">
        <h2>Frontend App</h2>
        <button onclick="callBackend()">Call Backend</button>
        <p id="response"></p>

        <script>
          async function callBackend() {
            const res = await fetch('/call-backend');
            const data = await res.json();
            document.getElementById('response').innerText = data.message;
          }
        </script>
      </body>
    </html>
  `);
});

app.get("/call-backend", async (req, res) => {
  try {
    const response = await axios.get("http://backend:5000/api/hello");
    res.json({ message: response.data.message });
  } catch (err) {
    res.json({ message: "Backend not reachable." });
  }
});

app.listen(port, () => console.log(`✅ Frontend running on port ${port}`));
