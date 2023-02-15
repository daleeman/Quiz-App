import React from "react";

function Question(props) {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <p className="fs-2">{props.questionOption}</p>
    </div>
  );
}

export default Question;
