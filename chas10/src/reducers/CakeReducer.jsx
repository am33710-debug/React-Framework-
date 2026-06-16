import { BUY_CAKE, RESTOCK_CAKES } from '../constants/CakeConstants';

const initialState = {
    cakes: 10
}

const CakeReducer = (state=initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                cakes: state.cakes - action.payload 
                //         10      -       1
            }

        case RESTOCK_CAKES:
            return {
                ...state,
                cakes: action.payload // back to 10 cakes
            }
            
        default: return state;
    }
}

export default CakeReducer;