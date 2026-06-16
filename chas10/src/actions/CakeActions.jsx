import { BUY_CAKE, RESTOCK_CAKES } from '../constants/CakeConstants';

export const buyCake = (numOfCake) => {
    return {
        type: BUY_CAKE,
        payload: numOfCake
    }
}

export const restockCakes = () => {
    return {
        type: RESTOCK_CAKES,
        payload: 10
    }
}