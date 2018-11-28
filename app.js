'use strict'
const snoowrap = require('snoowrap');

const r = new snoowrap({
  userAgent: "DLCOnoobGhost",
  clientId: "NQ_Q0Jcy_KstnQ",
  clientSecret: "6HJJAPfbr7C3VLoG7jwXbWH2n0I",
  refreshToken: "70808853-dMtva1BwQ-TU4a9KL1YboRARXuE"
})
// r.getSubmission('9pubaq').title.then(console.log);

// r.getSubreddit('nhlstreams').getNew().map(post => post.id).then((value)=>{
//   for(let i = 0;i<value.length;i++){
//     r.getSubmission(value[i]).title.then((title)=>{
//       if(title.includes("NHL")){
//         console.log(`Title: ${title}`);
//       }
//     });
    
//   }
// });

r.search({
  query: 'Game Thread',
  subreddit: 'nhlstreams',
  sort: 'new'
}).then((val)=>{
  for(let i = 0;i<1;i++){
    let title  = val[i].title;
    let id = val[i].id;
    r.getSubmission(id).comments.then((com)=>{
      console.log(com[1]);
      // for(let i = 0;i<com.length;i++){
      //   console.log("=> "+com[i].body);
      //   console.log("-------------------------------");
      // }
    });
    console.log(`Title: ${title}, ID: ${id}`);
  }
  
});
