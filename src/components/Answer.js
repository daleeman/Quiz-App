import React from "react";

function Answer(props) {
  return (
    <button
      type="button"
      className="btn btn-outline-light btn-lg fs-4 w-100 p-2 m-3"
      onClick={props.handleAnswerClick}
    >
      {props.answerOption}
    </button>
  );
}

export default Answer;
