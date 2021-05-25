import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, error: "" };

    window.navigator.geolocation.getCurrentPosition(
      (GeolocationPosition) => {
        console.log(GeolocationPosition);
        this.setState({ lat: GeolocationPosition.coords.latitude });
      },
      (GeolocationPositionError) => {
        this.setState({ error: GeolocationPositionError.message });
      }
    );
  }
  render() {
    if (this.state.lat && !this.state.error) {
      return <div>latitude: {this.state.lat}</div>;
    }
    if (this.state.error && !this.state.lat) {
      return <div>Error: {this.state.error}</div>;
    }
    return(
      <div>
        <div class="ui segment">
          <div class="ui active dimmer">
            <div class="ui text loader">Loading!!</div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
