import './App.css';
import { useState} from 'react'

function App(){
  const questions=[{
    questionText:'whats the capital city of kenya',
    answerOptions:[
      {answerText:'Nairobi',isCorrect:true},
      {answerText:'kitale',isCorrect:false},
      {answerText:'Nakuru',isCorrect:false},
    ]
  },
 {questionText:'Whats is my favourite color',
 answerOptions:[
   {answerText:'black',isCorrect:false},
   {answerText:'green',isCorrect:false},
   {answerText:'white',isCorrect:true},
 ]
},
{questionText:'which is my all time best song',
answerOptions:[
  {answerText:'yummy',isCorrect:false},
  {answerText:'no brainer',isCorrect:true},
  {answerText:'this america',isCorrect:false},
]}
];
const [currentQuestion,setCurrentQuestion]=useState(0);
const [score,setScore]=useState(0);
const [index,setIndex]=useState(1);
const checkAns = (isCorrect)=>{
  if(isCorrect===true){
    setScore(score + 1);
  }
}
function AnswerBtn(){
  const nextIndex= index +1;
  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion);
    setIndex(nextIndex);
    
  }else{
    alert('no more quiz')
  }
  checkAns();
}
  return (
    
   <div className="App">
      <div className="App-header">
       <h1>question {index}  /<span>{questions.length}</span></h1>
       </div>
       
       <div className='quiz'>
         <h2>{questions[currentQuestion].questionText}</h2>
        </div>
        <div className='answer'>
          {questions[currentQuestion].answerOptions.map((answerOption)=>(
            <button onClick={AnswerBtn}>{answerOption.answerText}</button>
          ))}

      </div>
      <div className='score'>your score is {score} </div>
    </div>
   
  );
  
}


export default App;
