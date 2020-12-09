const { MESSAGES, POE } = require("./constants");
const { getQuote, userIsBanned } = require("./utilities");

function onMessage({ author, channel, content }) {
  const { username } = author;

  if (username === POE) return null;

  if (userIsBanned(username)) {
    channel.send(MESSAGES.UNAUTHORISED);
    return null;
  }

  if (content.includes(POE)) {
    channel.send(getQuote(username));
  }
}

function onReady() {
  console.log(`${POE} is ready!\n`);
}

module.exports = {
  onMessage,
  onReady,
};
