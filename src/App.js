import React, { Component } from 'react';
import './App.css';
import ListFeature from './containers/ListFeature';
import ListMoney from './containers/ListMoney';
import People from './containers/People';

class App extends Component {

  render() {
    return ( <div>
    <ListFeature />
    <ListMoney />
    <People />
 </div>
 )
  }
}

export default App;
