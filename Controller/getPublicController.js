const Services = require("../models/User");

const getPublicController = {
  get: async (req, res) => {
    try {
      const services = await Services.find();

      res.status(200).json({ services });
    } catch (err) {
      return res.status(500).json({ err });
    }
  },
};

module.exports = getPublicController;
