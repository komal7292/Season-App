import React from "react";
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader'


class App extends React.Component {
  state = {lat: null, err: ''}
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      GeolocationPosition => this.setState({ lat: GeolocationPosition.coords.latitude }),
      GeolocationPositionError =>this.setState({ err: GeolocationPositionError.message })
    );
  }
  render() {
    if (this.state.lat && !this.state.error) {
      return <SeasonDisplay lat={this.state.lat}/>
    }
    if (this.state.err && !this.state.lat) {
      return(
        <div>
          <h2 className='error'>Error: {this.state.err}</h2>
        </div>
      ) 
    }
    return <div><Loader message="Please accept allow location"/></div>
  }
}
export default App;
