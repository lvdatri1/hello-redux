import React, { Component } from 'react'

export default class Person extends Component {
  render() {
      const {personData } = this.props;
      console.log('person data :', personData);
      const gender = personData.gender;
      const name = personData.name.first + ' ' + personData.name.last;
    return (
      <div>
          name : {name}
          gender: {gender}
          

        
      </div>
    )
  }
}
