import React, { Component } from 'react'
import Person from './Person';


export default class ListPeople extends Component {

  componentDidMount(){
      this.props.onReload();
  }
    render() {
    //   const allPeople  = this.props.people.people;
    const {isLoading, onReload, people, page} = this.props;
    //const fu = onReload(page);
    const listitems = people.map((item, index)=>(
        <div key={index}> <Person personData={item}  /></div>
    ));
    return <div onScroll={()=>onReload(page)}> List data ne:
    <ul>
        {listitems}
    </ul>
          {isLoading?<div>Loading</div>:<button onClick={()=>onReload(page)}>reload data here</button>}
    </div>;
  }
}


