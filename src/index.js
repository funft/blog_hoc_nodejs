const morgan = require("morgan");
const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

//http logger, log ra cái hàng ::1 -- ...., thông tin bên dưới terminal để xem lỗi như nào!?
app.use(morgan("combined"));

//Template engine: dùng để tách riêng file html
//xem ở vid9 f8, copy từ https://www.npmjs.com/package/express-handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
