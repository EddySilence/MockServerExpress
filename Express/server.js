const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // 跨域問題可以在這新增來符合實際需求

const responses = require('./responses');

app.all("*", (req, res) => {
  const method = req.method.toLowerCase();
  const routePath = req.path.substring(1); // 去除前面/ 例如 "/Sample/Post" => "Sample/Post"

  const response = responses[method]?.[routePath];

  if (response !== undefined) {
    // 返回假資料 可根據實際情況做調整
    return res.json(response);
  }

  return res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
