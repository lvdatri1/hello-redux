const filter = (state = 'all', action) => {
    console.log('inside reducer fitler', action);
    switch (action.type) {
        case "FILTER_MALE":
            {
                return 'male';
            }
        case "FILTER_FEMALE":
            {
                return 'female';
            }
        case "FILTER_ALL":
            {
                return 'all';
            }
        default:
            return state;

    }

}
export default filter;