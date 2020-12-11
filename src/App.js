import './App.css';
import React, { Component } from 'react';
import Map from './components/Map/Map';
import Navigation from './components/Navigation/Navigation';
import 'leaflet/dist/leaflet.css';
import { connect } from 'react-redux';
import { initInfo } from './store/actions/covid19';

class App extends Component {

  componentDidMount() {
    this.props.onInitInfo();
  }

  render () {
    return (
      <div className="App">
        <Navigation />
        <Map data={this.props.info}/>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    info: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitInfo: () => dispatch(initInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
