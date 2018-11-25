import React, { Component } from 'react'
import Person from './Person';

export default class ListPeople extends Component {
  componentDidMount(){
      this.props.onReload();
  }
    render() {
    //   const allPeople  = this.props.people.people;
      console.log('inside People',this.props);
      const {isLoading, onReload, people, page} = this.props;
      //const fu = onReload(page);
      const listitems = people.map((item, index)=>(
          <li key={index}> <Person personData={item}  /></li>
      ));
      if (isLoading) {
    return <div>Loading people</div>;
       
      } else 
    return (
        
      <div> List data ne:
          <ul>
              {listitems}
          </ul>
        <button onClick={()=>onReload(page)}>reload data here</button>
      </div>
    )
  }
}
