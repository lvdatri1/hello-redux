const people = (state = {people: [], isLoading: false, page: 1}, action ) =>{
    console.log('inside reducer of people - state', state);
    console.log('inside reducer of people - action', action);
    switch (action.type){
        case "REQUEST_PEOPLE":
        {
            console.log('request to increase page',state);
            return{ ...state, isLoading: true, 

            }
        }
        
        case "RECEIVE_PEOPLE":
        return {...state, people : action.people, isLoading: false, page: state.page +1

        }
         default:
        return state;

    }
}
export default people;