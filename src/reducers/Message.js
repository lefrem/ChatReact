import { ADD_MESSAGE, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_ERROR  } from '../constant/ActionTypes';

const INITIAL_STATE = []

function messages(state = INITIAL_STATE, action){
    switch (action.type) {
        
        case ADD_MESSAGE:
            return [...state, action.message];

        case LOAD_MESSAGES_SUCCESS:
            return [...state, action.message];

        case LOAD_MESSAGES_ERROR:
            return [...state, "error"];

        default:
            return state;
    };
};


export default messages;
