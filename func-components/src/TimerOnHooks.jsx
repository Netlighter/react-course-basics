import React, { useState, useEffect, useRef } from 'react';


// отдельная функция которую можно вызвать
// чтобы задать стандартное значение при useState
function setDefaultValue() {
  const userCount = localStorage.getItem('timer');
  return userCount ? +userCount : 0;
}


export default function Timer() {
  const [timeCount, setTimeCount] = useState(setDefaultValue());
  const [isCounting, setIsCount] = useState(false);
  const timerIdRef = useRef(null);

  useEffect(() => {
    // any change -> setItem
    localStorage.setItem('timer', timeCount)

  }, [timeCount])

  useEffect(() => {
    //any change -> check IF then setInterval

    if (isCounting) {
      timerIdRef.current = setInterval(() => {
        // без предыдущего значения  prevCount таймер запоминает
        // результат функции и возвращает одно и то же
        // получается всего одно прибавление
        setTimeCount((prevCount) => prevCount + 1);
      }, 1000)
    }

    //any change, any conditions -> return

    return () => {
      console.log('unmount')
      //clear interval -> delete interval
      // IF deleted (null) -> dont clear
      timerIdRef.current && clearInterval(timerIdRef.current);
      timerIdRef.current = null;
    }
  }, [isCounting])

  const handleStart = () => {
    setIsCount(true);

  }

  const handleStop = () => {
    setIsCount(false);
  }

  const handleReset = () => {
    setTimeCount(0);
    setIsCount(false);
  }

  return (
    <div>
      <h1>React Timer!</h1>
      <h3>{timeCount}</h3>

      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset...</button>
      <br />
      <br />
    </div>
  )
}
