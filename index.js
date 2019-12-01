require('dotenv').config();


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
  subreddit: 'chatbots',
  results: 25
};

const comments = client.CommentStream(streamOpts);

var sleep = require('system-sleep');
sleep(120*1000); 


comments.on('comment', (comment) => {
  if (comment.body.includes('chatbot')){
    comment.reply('try joanna-bot https://joannabot.ejemplo.me');
  }
});

