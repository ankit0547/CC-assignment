const Path = require("../util").Path;

const getHomePage = (req, res) => {
  res.sendFile(Path("./public/login.html"));
};

module.exports = { getHomePage };
