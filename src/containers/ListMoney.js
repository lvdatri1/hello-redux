import { connect } from 'react-redux';
import Money from '../components/Money';
import { fetchMoney } from '../actions';

const MapStateToProps = (state) => {
    return {
        amount: state.money.amount,
        amountValue: state.counter.value,
        isLoading: state.money.isLoading
    }
}
const MapDispatchToProps = dispatch => {
    return { onDeposit: (m)=>dispatch({type: 'DEPOSIT', amount: m}),
    onWithdraw: (m1) => dispatch({type: 'WITHDRAW', amount: m1}),
    onReload: ()=>dispatch(fetchMoney())

    }
}

const ListMoney = connect(MapStateToProps, MapDispatchToProps)(Money);

export default ListMoney;