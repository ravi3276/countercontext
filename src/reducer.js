export const initialState={
    counter:0,
}

const reducer = (state, action) =>{
    console.log(action)
    switch (action.type) {
        case "increase":
            return {
                ...state,
                counter:state.counter + 1,
            }
        case "decrease":
            return {
                ...state,
                counter:state.counter - 1,
                }    
        default:
            return state;
    }
}

export default reducer;