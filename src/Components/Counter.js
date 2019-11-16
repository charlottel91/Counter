import React, { useState } from 'react';

function Counter() {
  // Déclare une nouvelle variable d'état, qu’on va appeler « count »
  const [count, setCount] = useState(null);
  
  // Déclare une fonction setCount qui permet de modifier la valeur de count
  const handleClick = (e) => {
    setCount(parseFloat(e.target.value))
  }
  

  return (
    <div>
      <p>Le compteur est  à : { count }</p>
      <input 
      type = 'number' 
      name = 'counter' 
      value= {count}
      onChange={handleClick}
      ></input>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
    </div>
  );
};

export default Counter;