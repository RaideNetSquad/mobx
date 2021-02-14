import { observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';

import counter from './store/Counter';
const Counter = observer(() => {
    return(
        <div className='counter'>
            <div className="label">
                {counter.total}
            </div>
            <div className='btns'>
                <button className='btn' onClick={() => counter.Increment()}>+</button>
                <button className='btn' onClick={() => counter.Decrement()}>-</button>
            </div>
        </div>
    )
});

export default Counter;