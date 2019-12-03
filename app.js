//developer ackroydAI

//for joanna

require('dotenv').config();

const systemsleep = require('systemsleep');
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
  userAgent: 'redditsimplebot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

const client = new Snoostorm(r);

const streamOpts = {
  subreddit: 'testingground4bots',
  results: 5
};

const comments = client.CommentStream(streamOpts);

var sleep = require('systemsleep');
sleep(630*1); 


comments.on('comment', (comment) => {
  if (comment.body.includes('test')){
    comment.reply('try joanna-bot so i can develop her to try and win the Loebner prize in 2020 - thankyou - be kind https://joannabot.ejemplo.me');
  }
});

