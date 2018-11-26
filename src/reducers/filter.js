const filter = (state='all', action)=>{
    switch (action.type) {
        case "FILTER_MALE":
        {
            return 'MALE';
        }
        case "FILTER_FEMALE":
        {
            return 'FEMALE';
        }
        case "FILTER_ALL":
        {
            return 'ALL';
        }
        default:
        return state;

    }

}
export default filter;