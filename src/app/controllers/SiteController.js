class SiteController {
  // phương thức get, chọc vào /news
  home(req, res) {
    res.render("home");
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
