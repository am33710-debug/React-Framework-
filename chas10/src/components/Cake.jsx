import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { buyCake, restockCakes } from './../actions/CakeActions';

export const Cake = () => {

    const cakes = useSelector(state=>state.CakeReducer.cakes); // we take the variable from the main state
    const dispatch = useDispatch(); // call the dispatching function("buying cake function")

    const [cakesWanted, setCakesWanted] = useState(0);
    const [restock, setRestock] = useState(10);
    const [error, setError] = useState(''); // for input validation (send error message)

    return(
        <div id='cake'>
            <h2>Amount of Cakes: {cakes}</h2>
            {/* <button disabled={cakes < 1} onClick={() => {dispatch(buyCake(1))}}>Buy 1 Cake</button><br/><br/>
            <button disabled={cakes < 2} onClick={() => {dispatch(buyCake(2))}}>Buy 2 Cake</button><br/><br/>
            <button disabled={cakes < 3} onClick={() => {dispatch(buyCake(3))}}>Buy 3 Cake</button><br/><br/>
            <button onClick={() => {dispatch(restockCakes())}}>Restock Cakes</button><br/><br/> */}
            {// disabled is for checking something, like an IF statement, which if true, disables the button
            }

            <input
                type="number"
                placeholder="How many cakes?"
                value={cakesWanted}
                onChange={(e) => setCakesWanted(e.target.value)}
            /><br/>
            <button onClick={() => {
                if (!cakesWanted || !Number(cakesWanted) || cakesWanted <= 0)
                    setError("Please enter a valid number!");
                else if (cakesWanted > cakes)
                    setError("Not enough cakes!");
                else {
                    setError(''); // revert to default state
                    dispatch(buyCake(cakesWanted));
                    setCakesWanted(''); // also revert to default so it's empty for changing again
                }
            }}>Buy</button><br/>
            <button onClick={() => dispatch(restockCakes(restock))}>Restock Cakes</button><br/>

            {error && <p style={{color: 'red'}}>{error}</p>}
        </div> 
    )
}