import axios from 'axios';

function fetch(request, callback) {
  axios.get(request)
    .then(response => {
      callback(response.data);
    });
}

function fetchSmallObjects(requestSmallObj, callback) {
  let artistIdString = '';
  axios.get(requestSmallObj)
    .then(response => {
      for (let i = 0; i < response.data.albums.items.length; i++) {
        artistIdString = artistIdString + response.data.albums.items[i].id + ',';
      }
      artistIdString = artistIdString.slice(0, -1);
      const request = `https://api.spotify.com/v1/albums/?ids=${artistIdString}`;
      fetch(request, callback);
    });
}


export function getArtists(artist, callback) {
  const request = `https://api.spotify.com/v1/search?q=artist:${artist}&type=artist`;
  fetch(request, callback);
}

export function getAlbums(artist, callback) {
  const requestSmallObj = `https://api.spotify.com/v1/search?q=album:${artist}&type=album,artist`;
  fetchSmallObjects(requestSmallObj, callback);
}
