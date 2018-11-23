const host = 'http://localhost:3000/data';
//const host = 'https://www.reddit.com/r/reactjs.json';

// const callToGetCounter = () =>{
//     return fetch(host + '/data')
// .then(response=> response.json())
// .then(data => data.counter)
// .catch(error => {console.log(error)});
// }
// export default callToGetCounter;

export const requestCounter=()=>
{
    console.log('heelo');
    return {type: 'REQUEST_COUNTER'}
}
export const fetchCounter = () =>{
  //  console.log("inside reload xx");
    return dispatch =>{
        dispatch(requestCounter);
        return fetch(host)
        .then(response => response.json())
        .then(data => { return dispatch(receiveCounter(data.counter));

        })
        .catch(error => {console.log('eerrr', error)})
        .catch(err => {console.log('error 2', err)});
    }
}
export const receiveCounter = (data) =>{
    return {type: 'RECEIVE_COUNTER', value:data}
}
export const requestMoney=()=>
{
    console.log('Request money');
    return {type: 'REQUEST_MONEY'}
}
export const fetchMoney = ()=> {
    console.log('request reload money');
    return dispatch =>{
        dispatch(requestMoney);
        return fetch(host)
        .then(response => response.json())
        .then(data => { return dispatch(receiveMoney(data.money));

        })
        .catch(error => {console.log('eerrr', error)})
        .catch(err => {console.log('error 2', err)});
    }
}
export const receiveMoney = (data) =>{
    return {type: 'RECEIVE_MONEY', amount:data}
}