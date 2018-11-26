import React, { Component } from 'react'

export default class Person extends Component {
  constructor(props){
      super(props);
      this.state = {isMore: false};
  }
 componentDidMount(){
 }
 handleClick(){
     this.setState({isMore: !this.state.isMore});
 }
    render() {
      const {personData } = this.props;
    //   console.log('person data :', personData);
      const isMore = this.state.isMore;
      const gender = personData.gender;
      const name = personData.name.first + ' ' + personData.name.last;
      const city = personData.location.city;
    //   const pic = personalData.picture.thumbnail;
         const pic = personData.picture.thumbnail;
    return (
      <div>
      <img src={pic} alt={name} />           name : {name}  {' '}
          gender: {gender} 
          
    {isMore?<div>{city}</div>:<div>no</div> }

        <button onClick={()=>this.handleClick()}> know more about</button>
      </div>
    )
  }
}
