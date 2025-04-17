const Services = require("../models/User");
const handle = require("./tokenController");

async function getPrivate(req, res) {
  try {
    const id = req.params.id;

    const user = await Services.findById(id);

    if (!user) {
      return res.status(404).json({ msg: "Usuário não encontrado!" });
    }

    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = getPrivate;
