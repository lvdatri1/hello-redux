import { connect } from 'react-redux';
import ListPeople from '../components/ListPeople';
import { filterPeople, fetchPeople } from '../actions';

const MapStateToProps = (state) => ({
  people: filterPeople(state.people.people, state.filter),
  isLoading: state.people.isLoading,
  page: state.people.page,

})

const MapDispatchToProps = dispatch => {
  return {

    onReload: (page) => dispatch(fetchPeople(page)),

  }
}


const People = connect(MapStateToProps, MapDispatchToProps)(ListPeople);

export default People;