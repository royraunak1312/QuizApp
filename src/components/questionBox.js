import React, {useState} from "react";

function QuestionBox (props) {
  const [optionArray, setOptionArray] = useState(props.options);
  return (
    <div className = "questionBox">
      <h4 className= "question">{props.question}</h4>
      {optionArray.map((option, index) => <button key= {index} className = "answerBtn" onClick= {() => {
        setOptionArray([option]);
        props.selected(option);
      }}
        >{option}</button>)}
    </div>
  );
}

export default QuestionBox;
