
  var mountNode = document.querySelector('#react-root');

  class MapComponent extends React.Component {

    constructor() {
      super()
    }

    componentDidMount() {
      var map = new google.maps.Map(this.map, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });

    }

    render() {
      return <div ref={(map) => { this.map = map }} id="map"></div>;
    }

  }

  class AppComponent extends React.Component {
    render() {
      return <div><MapComponent /></div>;
    }
  }

  ReactDOM.render(<AppComponent />, mountNode);
