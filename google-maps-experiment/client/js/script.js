
  var mountNode = document.querySelector('#react-root');

  class MapComponent extends React.Component {

    constructor() {
      super()

      //if we had data passed in from another component
      this.state = { options: GM.SharedData.data }
    }

    componentDidMount() {
      var me = {lat: 32.9673497, lng: -96.8166474};

      var map = new google.maps.Map(this.map, {
        center: {lat: 32.8203525, lng: -97.0115304},
        zoom: 10
      });

      var marker = new google.maps.Marker({
          position: me,
          map: map
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
