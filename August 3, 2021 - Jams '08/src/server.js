// https://tools.applemediaservices.com/api/toolbox/US/search.json?term=jack-johnson%2Fif-i-had-eyes&limit=1&locale=en-US&apis=music

const fs = require('fs');
const fetch = require('node-fetch');

let spotArr = [];
let appleArr = [];

async function getiTracks(param) {
    try {
      const res = await fetch(`https://tools.applemediaservices.com/api/toolbox/US/search.json?term=${param}&limit=1&locale=en-US&apis=music`)
      const rawdata = await res.json()
      let song = new Object();
      song = {
          title: rawdata['songs'][0]['attributes']['name'],
          artist: rawdata['songs'][0]['attributes']['artistName'],
          url: rawdata['songs'][0]['attributes']['url'],
          artwork: rawdata['songs'][0]['attributes']['artwork']['url'],
          preview: rawdata['songs'][0]['attributes']['previews'][0]['url']
      }
      console.log(song)

      // appleArr.push(song);
      // console.log(song)
      // return await rawdata['songs'][0]['attributes']['url'];
    } catch (error) {
        console.log(error.res.body + param);
    }
  }

let crudedata = fs.readFileSync('songs.json');
let rawdata = JSON.parse(crudedata).items;
for(let i = 0; i < rawdata.length; i++) {
    spotArr.push(encodeURI(`${rawdata[i].track.artists[0].name}-${rawdata[i].track.name}`.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')))
    getiTracks(spotArr[i])
}