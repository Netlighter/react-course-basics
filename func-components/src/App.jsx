import React, { useState } from 'react';
import Clicker from './ClickerOnHooks';
import WithRef from './RefOnHooks';
import Timer from './TimerOnHooks';

function App() {
  const [isClicker, setClicker] = useState(false);
  const [isTimer, setTimer] = useState(false);

  return <div style={{ margin: '10rem' }} className="App">
    <h2>React Hooks</h2>
    <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
    {/* отображение при выполнении условия */}
    {isClicker && <Clicker />}

    <button onClick={() => setTimer(!isTimer)}>Toggle Timer</button>
    {isTimer && <Timer />}

  </div>;
}

export default App;
