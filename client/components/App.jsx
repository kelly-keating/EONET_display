import React from 'react'

import {getCurrentActive} from '../apiClient'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
  }

  componentDidMount () {
    getCurrentActive()
      .then(events => {
        this.setState({events})
      })
  }

  // var map;
  //   function initMap() {
  //     map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: -34.397, lng: 150.644},
  //       zoom: 8
  //     });
  // }


  render () {
    return (
      <div className='app'>
        <h1>Fullstack Boilerplate</h1>
        <ul>
          {this.state.events.map(evt => (
            <li key={evt.id}>{evt.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
