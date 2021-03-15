//initial data layer(user not logged in)
export const initialState = {
    user: null,
};

//adding actions into the data
export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
        //listen to actions and react by return function, changing user to whatever was passed otherwise return state
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer; 