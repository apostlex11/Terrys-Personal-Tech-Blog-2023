const { User } = require("../models");

const userData = [
  {
    username: "Lychee",
    email: "TopLychee@gmail.com",
    password: "LycheeFlavor123",
  },
  {
    username: "Tostitos",
    email: "TortillaChip@gmail.com",
    password: "TostitosChip123",
  },
  {
    username: "BonBon",
    email: "BonBon@gmail.com",
    password: "BonBonBon123",
  },
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;