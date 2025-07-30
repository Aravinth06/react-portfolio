// server/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const contactRoute = require("./routes/contact");

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});
