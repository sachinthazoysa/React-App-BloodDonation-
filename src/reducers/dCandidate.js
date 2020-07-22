import { ACTION_TYPES } from "../actions/dCandidate";
const intialState = {
    list : []
}

export const dCandidate = (state=intialState,action) => {
    switch (action.type) {//34.08 not sure
        case ACTION_TYPES.FETCH_ALL: 
            return{
                ...state,
                list:[...action.payload]
            }
    
        default:
            return state;
    }
}