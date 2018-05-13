import React from "react"
import MyMapComponent from './MyMapComponent';

export default class DataMap extends React.Component {
  state = {
    isMarkerShown: true,
    toggle: true,
    isMarkerInfoShown: true,
    toggleInfo: true
  }

  flipOverMarkers = () => {
    const { isMarkerShown, toggle } = this.state;
    this.setState({
      isMarkerShown: !isMarkerShown,
      toggle: !toggle
    });
  }

  flipOverInfoMarkers = () => {
    const { isMarkerInfoShown, toggleInfo } = this.state;
    this.setState({
      isMarkerInfoShown: !isMarkerInfoShown,
      toggleInfo: !toggleInfo
    });
  };

  render() {
    return (
      <div>
        <div className="container py-5">
          <h1 className="display-4">Genijalno.ba</h1>
          <button className="myBtn mb-2"
            onClick={this.flipOverMarkers.bind(this)}>
            {this.state.toggle ? 'Hide Markers' : 'Show Markers'}
          </button>

          <button className="myBtn"
            onClick={this.flipOverInfoMarkers.bind(this)}>
            {this.state.toggleInfo ? 'Hide Info Markers' : 'Show Info Markers'}
          </button>
        </div>
        
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6C5cnXRvJjsYI0SI9nlojhaEtovEUOxk"
          loadingElement={<div className="loadingElement" />}
          containerElement={<div className="containerElement" />}
          mapElement={<div className="mapElement" />}
          isMarkerShown={this.state.isMarkerShown} 
          isMarkerInfoShown={this.state.isMarkerInfoShown} />
      </div>
    )
  }
}