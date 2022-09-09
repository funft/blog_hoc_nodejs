class NewController {
  // phương thức get, chọc vào /news
  index(req, res) {
    res.render("news");
  }

  show(req, res) {
    res.send("news detail!");
  }
}

module.exports = new NewController();
