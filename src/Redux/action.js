import * as actionTypes from './actionTypes';


export const add_ingredients = (value) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ADD_INGREDIENTS,
            payload: {value}
        })

    };
};

export const show_orders = () => {
    return (dispatch) => {
        dispatch({type: actionTypes.SHOW_ORDERS_START})
        fetch('http://5c52eda35dcbc40014b3aca3.mockapi.io/burger/v1/burger')
        .then(response => response.json())
        .then((response) => {
            console.log(response, "response")
        dispatch ({
            type: actionTypes.SHOW_ORDERS_SUCCESS,
            payload: response
        })
    })
        .catch(err => {
            dispatch({
                type: actionTypes.SHOW_ORDERS_FAILED,
                payload: err
            })
            console.log('error', err)
        })
}
}




