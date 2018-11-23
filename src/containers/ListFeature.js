import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { fetchCounter } from '../actions'
//import Money from '../components/Money';

const mapStateToProps = state => {
    console.log("inside statetoprops", state);
    return {
        value: state.counter.value,
    isLoading: state.counter.isLoading}
}
const mapDispatchToProps = (dispatch) => {
    console.log('click increase');
    return { onIncrement: () =>  dispatch({type: 'INCREMENT'}),
    onDecrement: () =>  dispatch({type: 'DECREMENT'}),
    onReload: ()=> dispatch(fetchCounter())

    }
}

const ListFeature = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default ListFeature;
