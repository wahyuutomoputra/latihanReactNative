import RNFetchBlob from 'rn-fetch-blob';

const url = 'https://jsonplaceholder.typicode.com/';

export const post = async (link, data, thenFunc, catchFunc) => {
    RNFetchBlob.config({
        trusty : true
      })
      .fetch('POST', url+link, {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }, JSON.stringify({data}),
      )
      .then(thenFunc)
      .catch(catchFunc)

}

export const get = async (link, thenFunc, catchFunc, extraLink = '' ) => {
    RNFetchBlob.config({
        trusty : true
      })
      .fetch('GET', url+link+extraLink, {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }, 
      )
      .then(thenFunc)
      .catch(catchFunc)
}