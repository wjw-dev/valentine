import React, { useState, useEffect } from 'react';
import './App.scss'

class QAH
{
    question = ""
    answer = ""
    hint = "" 

    constructor(question, answer, hint)
    {
        this.question = question;
        this.answer = answer;
        this.hint = hint;
    }
}




const Q1 = new QAH(
    "Under which monument did we have our first kiss",
    "Sydney Harbour Bridge",
    "Do you really need a hint for this?"
)


const Q2 = new QAH(
    "What suburb did we have our first coffee in?",
    "Strathfield",
    "😉"
)

const Q3 = new QAH(
    "I want a: Kelvin, Proposition 64. Egyptian Fruit",
    "Hotpot Date",
    "Think about it !",
)

//"Where was the first place that you received flowers?",
const Q4 = new QAH(
    "Go to the link you are sent, and reorder the words to find the question.",
    "Beach Burrito",
    "I was hoodwinked"
)

// Opera House
const Q5 = new QAH(
    "I am thinking of something. Ask me yes or no questions to find out what it is.",
    "Opera House",
    ""
)

// 6. Give me the sum of:
//     1. The height of the Taj Mahal 73
//     2. The length of Ponte Vecchio +95 = 
//     3. The number of platforms in the eiffel tower + 3 = 
//     4. The number of letters in the name of the person who designed Casa Batlló + 16
//     5. 187
const Q6 = new QAH(
    "Answer my questions",
    "187",
    ""
)


const Q7 = new QAH(
    "Good job baby! Happy Valentines!",
    "",
    ""
)



const States = [Q1, Q2, Q3, Q4, Q5, Q6, Q7]



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
        setDate("DATE: 22/2/2023")
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
