import React, { useState, useEffect } from 'react';

function Clicker() {
  // from hook useState [value, setValue()]
  // default value as arg value=0 {undefined by def}
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)


  // [] - зависимости, без них при любом обновление отрабатывает коллбек
  // [] - лучше вносить туда условия при которых он отрабатывает
  // пустой [] заставляет отработать 1 раз like didMount
  // не пустой [] аналог didUpdate для конкретных условий
  // return аналог didUnmount для конкретных условий
  useEffect(() => {
    console.log('hello click', count)
    return () => console.log('unmount clicker')
  }, [count]);

  return <div className="App">
    {/* wow! without this.state */}


    <button onClick={increment}>+</button>
    <span
      style={{ margin: '0 .75rem', display: 'inline-block' }}
    >{count}</span>
    <button onClick={decrement}>-</button>
  </div>;
}

export default Clicker;
