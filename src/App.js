import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Money from './components/Money';
import Counter from './components/Counter';
import ListFeature from './containers/ListFeature';
import ListMoney from './containers/ListMoney';


class App extends Component {

  render() {
    // const {value, onIncrement, onDecrement} = this.props.counter;
    // const {amount, onDeposit, onWithdraw} = this.props.money;
    console.log("step 1 inside render of App ()",this.props);

    return ( <div>

    <ListFeature />
    <ListMoney />

    </div>
      );
  }
}

export default App;


{/* <Counter value={value} onIncrement={onIncrement} onDecrement={onDecrement}/>
    <Money amount={amount} onDeposit={onDeposit} onWithdraw={onWithdraw} /> */}