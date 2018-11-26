const host = "http://localhost:3000/data";
//const host = 'https://www.reddit.com/r/reactjs.json';

export const requestCounter = () => {
//   console.log("heelo");
  return { type: "REQUEST_COUNTER" };
};
export const fetchCounter = () => {
  return dispatch => {
    dispatch(requestCounter());
    return fetch(host)
      .then(response => response.json())
      .then(data => {
        return dispatch(receiveCounter(data.counter));
      })
      .catch(error => {
        console.log("eerrr", error);
        return dispatch(receiveCounter(99));
      })
      .catch(err => {
        console.log("error 2", err);
      });
  };
};
export const receiveCounter = data => {
  return { type: "RECEIVE_COUNTER", value: data };
};
export const requestMoney = () => {
  return { type: "REQUEST_MONEY" };
};
export const fetchMoney = () => {
  return dispatch => {
    dispatch(requestMoney());
    return fetch(host)
      .then(response => response.json())
      .then(data => {
        return dispatch(receiveMoney(data.money));
      })
      .catch(error => {
        console.log("eerrr", error);
        return dispatch(receiveMoney(999));
      })
      .catch(err => {
        console.log("error 2", err);
        return dispatch(receiveMoney(999));
      });
  };
};
export const receiveMoney = data => {
  return { type: "RECEIVE_MONEY", amount: data };
};

export const requestPeople = () => ({
  type: "REQUEST_PEOPLE"
});
export const receivePeople = data => {
  return {
    type: "RECEIVE_PEOPLE",
    people: data
  };
};

const hostPeople = "https://randomuser.me/api/?results=10&seed=abc";

export const fetchPeople = (page = 1) => {
  return dispatch => {
    dispatch(requestPeople());
    return fetch(hostPeople + "&page=" + page)
      .then(response => response.json())
      .then(data => {
        return dispatch(receivePeople(data.results));
      })
      .catch(error => {
        console.log("eerrr", error);
      })
      .catch(err => {
        console.log("error 2", err);
      });
  };
};

export const filterPeople=(people, gender)=>{
    if (gender==='all') return people;
    else  return people.filter(person=>person.gender==gender);

}