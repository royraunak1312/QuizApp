import React, {useState, useEffect} from "react";
import "./assets/style.css";
import quizService from "./quizService/index.js";
import Qbox from "./components/questionBox.js";
import Result from "./components/results.js";
import Footer from "./components/footer.js";

function App() {
  const [responseNo, setResponseNo] = useState(0);
  const [score, setScore] = useState(0);
  const [questionSet, setQuestionSet] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    quizService().then(questions => {
      setQuestionSet(questions);
    })
  }



  return (
    <div>
      <div className="title">QuizApp</div>
      <div className= "container">
       {questionSet.length > 0 && responseNo <5 && questionSet.map((question) => <Qbox key= {question.questionId} question= {question.question} options= {question.answers} selected = {(answer) => {
         setResponseNo(responseNo < 5? responseNo + 1: 5);
         console.log(responseNo);
         if (answer === question.correct)
          {setScore(score + 1);}
       }}/>)}
       {responseNo === 5 && <Result score = {score} again= {() => {
         setResponseNo(0);
         setScore(0);
         getData();
       }}/>}
       <Footer />
      </div>

    </div>
  );
}

export default App;
