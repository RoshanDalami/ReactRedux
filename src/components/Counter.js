import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'
import {counterAction} from '../store/index'

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch();
  const incrementHandler = () =>{
    dispatch(counterAction.increment())
  };
  const increaseHandler = () =>{
    dispatch(counterAction.increase(5)) //{type:SOME_UNIQUE_IDENTIFIER,payload: extra_information}
  };
  const decrementHandler = () =>{
    dispatch(counterAction.decrement())
  };

  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter())
  };


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
