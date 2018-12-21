const requireLogin = require("../middlewares/requireLogin");
module.exports = app => {
  app.post("/api/serveys", requireLogin, (req, res) => {});
};
