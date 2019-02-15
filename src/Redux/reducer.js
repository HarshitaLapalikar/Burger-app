import * as actionTypes from './actionTypes';


const InitialState = {
    ingredient: {},
    data: [],
    loading : false,
};


const reducer= (state=InitialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENTS:
        return{...state, ingredient: action.payload};

            case actionTypes.SHOW_ORDERS_START:
            return{...state, loading:true }

            case actionTypes.SHOW_ORDERS_SUCCESS:
            return{...state, loading: false, data: action.payload }

            case actionTypes.SHOW_ORDERS_FAILED:
            return{...state, loading:false, error:action.payload}
            

        default:
        return state;  
        
    }



};

export default reducer; 