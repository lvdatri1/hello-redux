import React, { Component } from 'react'

class Counter extends Component {
    constructor(props){
        super(props);
        this.onDoubleClick = this.onDoubleClick.bind(this);
        
    }
    componentDidMount(){
  //    this.props.onReload();
    }
    onDoubleClick(){
console.log(this.props);
this.props.onIncrement();
this.props.onIncrement();
    }
  render() {
      const {value, onIncrement, onDecrement, onReload, isLoading}= this.props;
      console.log('step 2 inside render of compoent Counter', this.props);
      console.log('heheh', value);
   if(isLoading) {
     console.log('inside loading',isLoading);
     return (<div> loading</div>)
     }
    return (
      <div>
        value: {value} times {' '} 
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={this.onDoubleClick}> increase 2 times</button>
        <button onClick={onReload}>Reload</button>
      </div>
    )
  }
}


export default Counter
