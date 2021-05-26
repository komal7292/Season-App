import React from "react";
import SeasonDisplay from './SeasonDisplay';

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
      return <div>Error: {this.state.err}</div>;
    }
    return <div>Loading!!!</div>
  }
}
export default App;
