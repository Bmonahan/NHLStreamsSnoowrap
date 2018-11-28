'use strict'
const snoowrap = require('snoowrap');
const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];

const r = new snoowrap({
  userAgent: config.userAgent,
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  refreshToken: config.refreshToken
})
r.search({
  query: 'Game Thread',
  subreddit: 'nhlstreams',
  sort: 'new',
  time: 'week'
}).then((val)=>{
  if(typeof(val[0])==='undefined'){
    console.log("Nothing new.");
  }else{
    for(let i = 0;i<1;i++){
      let title  = val[i].title;
      let id = val[i].id;
      // r.getSubmission(id).comments.then((com)=>{
      //   console.log(com[1]);
      //   // for(let i = 0;i<com.length;i++){
      //   //   console.log("=> "+com[i].body);
      //   //   console.log("-------------------------------");
      //   // }
      // });
      console.log(`Title: ${title}, ID: ${id}`);
    }
  }
});
