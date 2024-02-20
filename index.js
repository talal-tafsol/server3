const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Server 3",
  });
});

app.get("/test", (req, res) => {
  res.status(200).json({
    message: "Hello from Test Server 3",
  });
});

app.listen(PORT, () => console.log(`Server 3 is running on port: ${PORT}`));
