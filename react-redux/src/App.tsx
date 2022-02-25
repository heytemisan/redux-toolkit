import React from 'react';
import { RootState } from './redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/counter'
import './App.css';


function App() { 
  const count  = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch(); //call action from the reducer
  return (
    <div className='app'>
      <h1>Redux</h1>
      <div className="app__container">
        <div className="first">
          <button
            className='btn'
            aria-label="Increment value"
            onClick={()=> dispatch(increment())}
          >
            Increment (+)
          </button>
          <span className='count'>{count}</span>
          <button
            className='btn'
            aria-label="Decrement value"
            onClick={()=> dispatch(decrement())}
          >
            Decrement (-)
          </button>
        </div>
        <div className="second">
          <button
            className='btnAmt'
            aria-label="incrementByAmount"
            onClick={()=> dispatch(incrementByAmount(20))}
          >
            Increment by 20
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default App;
