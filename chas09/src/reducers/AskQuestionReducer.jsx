import React from 'react';

const initialState = {
    q1: 'none1',
    q2: 'none2'
}

const AskQuestionReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ASK_ONE":
            return {
                ...state,
                q1: action.payload
            }
        
        case "ASK_TWO":
            return {
                ...state,
                q2: action.payload
            }

        default: return state;
    }
}

export default AskQuestionReducer;