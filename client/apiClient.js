import request from 'superagent'

const rootUrl = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?days=10'

export function getCurrentActive () {
  return request.get(rootUrl + '&status=open')
    .then(res => {
      return res.body.events
    })
}
