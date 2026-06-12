import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { questionOne, questionTwo } from './../actions/AskQuestionAction';

export const Hello = () => {

    const dispatch = useDispatch();
    const q1 = useSelector(state=>state.AskQuestionReducer.q1);
    const q2 = useSelector(state=>state.AskQuestionReducer.q2);

    useEffect(() => {
        dispatch(questionOne());
        dispatch(questionTwo());
    }, [dispatch])

    return(
        <div id='hello-func'>
            <h1>{q1}</h1>
            <h1>{q2}</h1>
        </div>
    )
}