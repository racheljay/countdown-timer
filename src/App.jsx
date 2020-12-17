import React, { useEffect, useState } from 'react';
import './App.css';


function App() {

  
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    // console.log(year)
    //+ will turn the date object into an integer
    const diff = +new Date(`${year}-12-25`) - +new Date();
    let timeLeft = {}
    
    if (diff > 0) {
      
      timeLeft = {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      };
    }
   // else {
      // console.log(timeLeft)
      return timeLeft
    //}
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
  });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((item) => {
      if(!timeLeft[item]) {
        return;
      }
      timerComponents.push(
        <span>
          {timeLeft[item]} {item}{" "}
        </span>
      )
      
    })

    //clear timeout if not mounted

  return (
    <>
      <div>
        <h1>They Are Coming</h1>
        {/* <div>{remainingTime}</div> */}
        {/* <div>{time}</div> */}
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </>

  );
}

export default App;
