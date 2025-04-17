const Services = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createLoginController = {
  createLogin: async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(422).json({ msg: "O email é Obrigatório!" });
    }

    if (!password) {
      return res.status(422).json({ msg: "A senha é Obrigatório!" });
    }

    const user = await Services.findOne({ email: email });

    if (!user) {
      return res.status(422).json({ msg: "Usuário não encontrado" });
    }

    const checkpassword = await bcrypt.compare(password, user.password);

    if (!checkpassword) {
      return res.status(404).json({ msg: "Senha inválida!" });
    }

    try {
      const secret = process.env.SECRET;

      const token = jwt.sign(
        {
          id: user._id,
        },
        secret
      );

      return res
        .status(200)
        .json({ msg: "Autentificação realizada com sucesso!", token });
    } catch (err) {
      return res.status(500).json({
        msg: "Aconteceu um error no servidor, tente novamente mais tarde!",
      });
    }
  },
};

module.exports = createLoginController;
