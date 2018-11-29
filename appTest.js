'use strict'
const snoowrap = require('snoowrap');
const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];

const r = new snoowrap({
  userAgent: config.userAgent,
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  refreshToken: config.refreshToken
});
var list = [];

var i = 0;
async function getPosts() {
  while (i < 10) {
    console.log(i);
    const post = await r.getSubreddit('aww').getRandomSubmission().then(post => post);
    var info = {
      url: post.url,
      score: post.score
    }

    console.log(info);
    list.push(info);
    i++;
  }
}
getPosts();
console.log(list);