const fs = require("fs");
const quotes = require("./quotes.js");
const blacklist = require("../blacklist.js");

function getRandomNumber(number) {
  const { floor, random } = Math;

  return floor(random() * number) + 1;
}

function getQuote(username) {
  const index = getRandomNumber(quotes.length) - 1;
  const quote = quotes[index];

  return quote.includes("{}") ? quote.replace("{}", username) : quote;
}

function userIsBanned(username) {
  return blacklist.includes(username);
}

module.exports = { getQuote, userIsBanned };
