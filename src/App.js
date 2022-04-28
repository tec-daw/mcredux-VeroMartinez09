import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addFaq, removeAll, updateFAQ, removeFaq } from './actions/faqs'

function App() {
  const counter = useSelector((state)=>{
    return state.counter.counter
  });


  const dispatcher = useDispatch();

  /*
  const handleDecrement = () =>{
    dispatcher(decrement(10))
  }
  */

  return (
    <div className="App">
      <h1>Hello World</h1>

      <input placeholder='question'/>
      <input placeholder='answer'/>
      <button onClick={() => dispatcher(addFaq('thequestion'))}>Add new FAQ</button>
      <button onClick={() => dispatcher(removeAll())}>Remove all FAQS</button>

    </div>
  );
}

export default App;
