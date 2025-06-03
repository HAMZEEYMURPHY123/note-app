import { useState } from 'react';

export default function Counter() {
 const [count, setCount] = useState(0);

 function handleIncrement() {
  setCount(count + 1);
  console.log(count);
 }
 function handleDecrement() {
  setCount(count - 1);
  console.log(count);
 }

 return (
  <div>
   <button onClick={handleIncrement}>Count</button>
   <button onClick={handleDecrement}>Reduce</button>
  </div>
 );
}
