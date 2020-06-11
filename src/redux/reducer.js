import  {GET_DATA} from "./types";

const initialState = {
    data: [],
    loading: false,
};

export const appReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_DATA:
        return {
            ...state,
            data: action.payload,
            loading: true
        };
        default:
            return state;
    }
};

export default appReducer;