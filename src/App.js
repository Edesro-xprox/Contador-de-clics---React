import './App.css';
import Button from './components/Button';
import Count from './components/Count';
import Blocked from  './components/Blocking';
import Reload from  './components/Reload';
import logoGamer from './img/logo_gamer.jpg';
import {  useState, useEffect } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0);
  const [timer, setTimer] = useState(10);
  const [timeIsUp, setTimeIsUp] = useState(false);
  const [clickEnter, setEnter] = useState(false);
  const [reloadUp, setReloadUp] = useState(false);
  const [timeReload, setTimeReload] = useState(5);

  const handleClick = () => {
    if(!timeIsUp){
      setNumClicks(numClicks + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
  }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimeIsUp(true);
      setEnter(true);
    }
  }, [timer]);

  useEffect(() =>{
    if(timeIsUp){
      const handleEnter = () =>{
        setEnter(false);
        setReloadUp(true);
        setTimeReload(5);
        console.log('Mensaje consola')
      }
  
      document.addEventListener('keydown', handleEnter);
      return () => {document.removeEventListener('keydown', handleEnter)}
    }
  }, [timeIsUp])

  useEffect(() =>{
    if(timeIsUp){
      const interval = setInterval(() =>{
        setTimeReload((prevTimer) => prevTimer - 1);
      }, 1000);
  
      return () => clearInterval(interval);
    }
  }, [timeIsUp])

  useEffect(() =>{
    if(timeReload === 0){
      setReloadUp(false);
      setTimeIsUp(false);
      setNumClicks(0);
      setTimer(10);
    }
  }, [timeReload])

  return (
    <div className="App">
      <div className="logo-gamer-container">
        <img className="logo-gamer" src={logoGamer} alt="Logo Gamer" />
      </div>

      <div className="containerMain">
        {!timeIsUp && <Count numClicks={numClicks} />}
        {!timeIsUp && <Button text="Click" handleClick={handleClick}/>}
        {clickEnter && <Blocked count={numClicks}/>}
        {reloadUp && <Reload number={timeReload}/>}
      </div>
    </div>
  );
}

export default App;
