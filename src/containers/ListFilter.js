import { connect } from 'react-redux';
import FilterHeader from '../components/FilterHeader'
import { fetchFilter } from '../actions';

const MapStateToProps = (state) => ({
    filter: state.filter

})

const MapDispatchToProps = dispatch => {
    return {

        filterPeople: (gender) => dispatch({ type: gender }),

    }
}


const ListFilter = connect(MapStateToProps, MapDispatchToProps)(FilterHeader);

export default ListFilter;