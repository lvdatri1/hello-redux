import React, { Component } from 'react'

export default class FilterHeader extends Component {
  handleFilter(gender) {
    this.props.filterPeople(gender);
  }
  render() {

    console.log('inside filter', this.props)
    const x = this.props.filterPeople;
    return (

      <div> <button onClick={() => x('FILTER_FEMALE')}>Female </button>
        <button onClick={() => x('FILTER_MALE')}>Male </button>
        <button onClick={() => x('FILTER_ALL')}>All genders </button>

      </div>
    )
  }
}
