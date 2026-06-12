import React from 'react';

export const questionOne = () => {
    return {
        type: "ASK_ONE",
        payload: "How are you?"
    }
}

export const questionTwo = () => {
    return {
        type: "ASK_TWO",
        payload: "Where have you been?"
    }
}