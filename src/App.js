import React from 'react';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  )
  return (
    <div>Current Location</div>
  )
}
export default App