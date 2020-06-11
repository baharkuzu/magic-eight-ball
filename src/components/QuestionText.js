import React from "react";

const QuestionText = (props) => {
    return(
        <div className="answer">
            <p className="text-primary"><b>Question: </b>{props.question}</p> 
        </div>
    )
}

export default QuestionText;