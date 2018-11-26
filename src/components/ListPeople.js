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
    let data = <div> List data ne:
    <ul>
        {listitems}
    </ul>
    </div>;

    
    if (isLoading) 
    data  = <div> List data ne:
    <ul>
        {listitems}
    </ul>
    <div>Loading</div>
    </div>;
  else
  data  = <div> List data ne:
  <ul>
      {listitems}
  </ul>
  <button onClick={()=>onReload(page)}>reload data here</button>
  </div>;
  
  return data;
  }
}


const fx = ()=>{
    const {isLoading, onReload, people, page} = this.props;
    //const fu = onReload(page);
    const listitems = people.map((item, index)=>(
        <div key={index}> <Person personData={item}  /></div>
    ));
    let data = <div> List data ne:
    <ul>
        {listitems}
    </ul>
    </div>;

    
    if (isLoading) 
    data  = <div> List data ne:
    <ul>
        {listitems}
    </ul>
    <div>Loading</div>
    </div>;
  else
  data  = <div> List data ne:
  <ul>
      {listitems}
  </ul>
  <button onClick={()=>onReload(page)}>reload data here</button>
  </div>;
  
  return data;

}