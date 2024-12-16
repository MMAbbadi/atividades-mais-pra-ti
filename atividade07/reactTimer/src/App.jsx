import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [seconds, setSeconds] = useState(0);
  let  [minutes,setMinutes] = useState(0)
  let  [hours,setHours] = useState(0)
  let [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let timer = null;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds >= 5) {
            setMinutes((prevMinutes) => {
              if (prevMinutes >= 5) {
                setHours((prevHours) => prevHours + 1); 
                return 0; 
              }
              return prevMinutes + 1; 
            });
            return 0; 
          }
          return prevSeconds + 1; 
        });
      }, 500);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  let startTimer = () => setIsRunning(true);
  let pauseTimer = () => setIsRunning(false);
  let restartTimer = () => {
    setIsRunning(false);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  return (
    <>
      <div>
        <h1>
            {`${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}        
        </h1>
      </div>
      <div className='flex justify-center gap-[10px]'>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={restartTimer}>Restart</button>
      </div>    
    </>
  )
}

export default App
