'use strict'
const snoowrap = require('snoowrap');
const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];
const fs = require('fs');

const r = new snoowrap({
  userAgent: config.userAgent,
  clientId: config.clientId,
  clientSecret: config.clientSecret,
  refreshToken: config.refreshToken
})
var data = {};
var games = [];
data.games = games;
//getPosts();
var gameId = [];

async function getPosts(){
  var params = {
    query: 'Game Thread',
    subreddit: 'nhlstreams',
    sort: 'new',
    time: 'year'
  };
  await r.search(params).then((val)=>{
    if(typeof(val[0])==='undefined'){
      console.log("Nothing new.");
    }else{
      for(let i = 0;i<val.length;i++){
        let title  = val[i].title;
        let id = val[i].id;
        gameId.push(id);
        //console.log('added');
        if(title.includes("Game Thread")){
          console.log(`Title: ${title}, ID: ${id}`);
        }
        var game = {
          "title":title,
          "id":id,
          "links":[]
        }
        data.games.push(game);
      }
      //console.log(JSON.stringify(data));
      var json  = JSON.stringify(data);
      // fs.writeFile('data.json', json, 'utf8', ()=>{
      //   console.log("done");
      // });
    }
    return json;
  });
}

getPosts().then(console.log)




// linkList = [];
// r.getSubmission(id).comments.then((com)=>{
//   for(let j = 0;j<com.length;j++){
//     let bod = com[j].body;
//     var matches = bod.match(/\bhttps?:\/\/\S+/gi);
//     if(matches!= null){
//       for(let x = 0;x<matches.length;x++){
//         var temp = matches[x]
//         if(temp[temp.length-1]==')'){
//           matches[x] = matches[x].slice(0,-1);
//         }
//       }
//       linkList[j-1] = matches;
//       //console.log(`Comment ${j}=> ${matches}`);
//       if(j==com.length-1){
//         var game ={
//           "title": title,
//           "links": linkList
//         }
//         data.games.push(game);
//         console.log(JSON.stringify(data));
//       }
//     }

