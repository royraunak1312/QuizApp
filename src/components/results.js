import React from "react";

const Result = ({score, again}) => {
  return(
  <div className= "score-board">
    <h1 className= "score">You scored {score}/5</h1>
    <button className="playBtn" onClick = {() => {
      again();
    }}>Play Again</button>
  </div>);
}

export default Result;
