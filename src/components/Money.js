import React, { Component } from 'react'

class Money extends Component {
   constructor(props){
       super(props);
       this.state = {value: 0};
       this.handleChange = this.handleChange.bind(this);
   }
   componentDidMount(){
     this.props.onReload();
   }
   handleChange(event){
       this.setState({value: event.target.value});
   }
    render() {
    const {amount, amountValue, onDeposit, onWithdraw, onReload, isLoading} = this.props;
    const onD = () => onDeposit(this.state.value);
    const onW = () => onWithdraw(this.state.value);
    
    if(isLoading) return <div> loading</div>;    
    return (

      <div>
          <input type= {'text'} value={this.state.value} onChange={this.handleChange}/> 
        Money: {amount} {' '} dollar with Value: {amountValue} times
        <button onClick={onD}>deposit</button>
        <button onClick={onW}>withdraw</button>
        <button onClick={onReload}>Reload</button>
      </div>
    )
  }
}

export default Money
