import React, { Component } from 'react'

export default class FilterHeader extends Component {
   handleFilter(gender){
this.props.filterPeople(gender);
   }              
    render() {
      
    return (
      <div> <button onClick={()=>this.handleFilter('female')}>Female </button>
      <button onClick={()=>this.handleFilter('male')}>Male </button>
      <button onClick={()=>this.handleFilter('all')}>All genders </button>
        
      </div>
    )
  }
}
