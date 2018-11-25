import { connect } from 'react-redux';
import ListPeople from '../components/ListPeople';
import { fetchPeople } from '../actions';

const MapStateToProps = (state) => ({
  people: state.people.people,
  isLoading: state.people.isLoading,
  page: state.people.page,

})

const MapDispatchToProps = dispatch => {
    return { 
    
    onReload: (page)=>dispatch(fetchPeople(page)),

    }
}


const People = connect(MapStateToProps, MapDispatchToProps)(ListPeople);

export default People;