class Request{
      get(url){
            return new Promise((resolve, reject)=> {
                  fetch(url)
                  .then(response=>response.json())
                  .then(data=>resolve(data))
                  .catch(err=>reject(err))
            })
      }
      post(url, albumData){
            return new Promise((resolve, reject)=> {
                  fetch(url, {
                        method: 'POST',
                        body: JSON.stringify(albumData),
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                      })
                  .then(response=>response.json())
                  .then(response=>resolve(response))
                  .catch(err=>reject(err))
            })
      }
      put(url,newAlbumData){
            return new Promise((resolve, reject)=> {
                  fetch(url, {
                        method: 'PUT',
                        body: JSON.stringify(newAlbumData),
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                      })
                  .then(response=>response.json())
                  .then(response=>resolve(response))
                  .catch(err=>reject(err))
            })
      }
}

let url = "https://jsonplaceholder.typicode.com/albums";
const request = new Request(); 
// request.get(url).then(albums=> console.log(albums));

// const  newAlbum = {
//       userId : 12,
//       title  : "Tarkan Karma" 
// }
// request.post(url, newAlbum).then(album=>console.log(album)).catch(err=>console.log(err))

const newAlbumURL = "https://jsonplaceholder.typicode.com/albums/41";
const  newAlbum41 = {
      userId : 1011,
      title  : "Tarkan Karma" 
}

request.put(newAlbumURL, newAlbum41).then(album=>console.log(album)).catch(err=>console.log(err))

request.get(url).then(albums=> console.log(albums));

