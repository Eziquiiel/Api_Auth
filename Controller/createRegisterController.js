const Services = require("../models/User");
const bcrypt = require("bcrypt");

const createRegisterController = {
  createRegister: async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;

    if (!name) {
      return res.status(422).json({ msg: "O nome é Obrigatório!" });
    }
    if (!email) {
      return res.status(422).json({ msg: "O email é Obrigatório!" });
    }
    if (!password) {
      return res.status(422).json({ msg: "A senha é Obrigatório!" });
    }
    if (password !== confirmpassword) {
      return res.status(422).json({ msg: "As senhas não conferem!" });
    }

    const e_mail = await Services.findOne({ email: email });

    if (e_mail) {
      return res.status(422).json({ msg: "Usuário já Criado!" });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const register = new Services({
      name,
      email,
      password: passwordHash,
    });

    try {
      register.save();

      return res.status(201).json({ msg: "Usuário criado com sucesso!" });
    } catch (err) {
      return res.status(500).json({ err });
    }
  },
};

module.exports = createRegisterController;
