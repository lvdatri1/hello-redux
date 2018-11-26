import React, { Component } from 'react';
import './App.css';
import ListFeature from './containers/ListFeature';
import ListMoney from './containers/ListMoney';
import People from './containers/People';
import ListFilter from './containers/ListFilter'

class App extends Component {

  render() {
    return (<div>
      <ListFeature />
      <ListMoney />
      <ListFilter />
      <People />
    </div>
    )
  }
}

export default App;
