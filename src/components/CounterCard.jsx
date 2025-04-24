// src/components/CounterCard.jsx
import { useState } from 'react';

function CounterCard() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/components/CounterCard.jsx</code> e salve para testar HMR.
      </p>
    </div>
  );
}

export default CounterCard;
