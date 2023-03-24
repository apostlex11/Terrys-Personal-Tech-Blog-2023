const { Post } = require("../models");

const postData = [
  {
    title: "Lychee Monster",
    body: "Lychee Flavor Tastes Great",
    user_id: 1,
  },
  {
    title: "Tostitos Salsa",
    body: "Great tortilla chips",
    user_id: 2,
  },
  {
    title: "BonBon",
    body: "BONBONBONBONBONBON BONBON?",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;