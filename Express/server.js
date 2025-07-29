const express = require("express");

const app = express();
app.use(express.json());

const responses = require('./responses');

app.all("*", (req, res) => {
  const method = req.method.toLowerCase();
  const routePath = req.path.substring(1); // 例如 "Sample/Post"

  const response = responses[method]?.[routePath];

  if (response !== undefined) {
    return res.json(response);
  }

  return res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
