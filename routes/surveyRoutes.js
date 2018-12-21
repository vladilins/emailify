const requireLogin = require("../middlewares/requireLogin");
const requireCredit = require("../middlewares/requireCredite");
module.exports = app => {
  app.post("/api/serveys", requireLogin, requireCredit, (req, res) => {});
};
