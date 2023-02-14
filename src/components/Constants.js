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



export const States = [Q1, Q2, Q3, Q4, Q5, Q6, Q7]
