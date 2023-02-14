import React, { useState, useEffect } from 'react';
import { States } from './components/Constants';
import './App.scss'

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [hint, setHint] = useState("");

  const [addressed, setAddressed] = useState("**: **********************")
  const [date, setDate] = useState("****: *********")
  const [time, setTime] = useState("****: *****")
  const [dressCode, setDressCode] = useState("*********: ***********")
  const [transport, setTransport] = useState("*********: ******")
  const [location_long, setLocation_Long] = useState("*************: **********")

  const [showHint, setShowHint] = useState(false);
  const [iter, setIter] = useState(0)

  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    let timeoutId = null;
    if (flipped) {
      timeoutId = setTimeout(() => {
        setFlipped(false);
      }, 500);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [flipped]);



  useEffect(()=>{

    if(iter >= States.length) return;
    setQuestion(States[iter].question)
    setAnswer("")
    setHint(States[iter].hint)


    switch(iter)
    {
      case 1:
        setAddressed("TO: MS. CHEUK KYU SYBIL HO")
        break;
      case 2:
        setDate("DATE: 21/2/2023")
        break;
      case 3:
        setTime("TIME: 19:00")
        break;
      case 4:
        setDressCode("DRESS CODE: SEMI-FORMAL")
        break;
      case 5:
        setTransport("TRANSPORT: PICK-UP")
        break;
      case 6:
        setLocation_Long("LOCATION_LONG: 151.205610")
        break;
    }

  }, [iter])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setAnswer(e.target.value);
      if (e.target.value !== States[iter].answer) {
        setFlipped(true);
      }
      else
      {
        setIter(iter+1)
      }
    }
  };

  return (
  <div className='App'>
    <div className='Grid'>
      <div className='Main'>
        <div className='QuestionHolder'>
          <h1>🌹💕❤️😘</h1>
          <h3>{question}</h3>
        </div>
        <input 
        type="text" 
        placeholder='Answer...' 
        value={answer} 
        onKeyDown={handleKeyDown} 
        onChange={e=>setAnswer(e.target.value)}
        style={{
          backgroundColor: flipped ? "#ff8288" : "white",
          transform: flipped ? "rotateY(360deg) rotateZ(360deg)" : "rotateY(0deg) rotateZ(0deg)",
          transition: "transform 0.5s",
          border: flipped ? "1px solid red" : "none"
        }}
        />
        <p onClick={()=>setShowHint(!showHint)}>{showHint ? hint : "hint?"}</p>
      </div>
      <div className='Invite'>
        <div className='InviteText'>
          <p style={{ fontWeight: "bold" }}>{addressed}</p>
          <p>{date}</p>
          <p>{time}</p>
          <p>{dressCode}</p>
          <p>{transport}</p>
          <p>{location_long}</p>
        </div>
      </div>
    </div>
  </div>
  );
}
export default App
