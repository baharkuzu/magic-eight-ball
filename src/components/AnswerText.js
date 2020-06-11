import React from "react";
import "../styles.css";

const AnswerText = (props) => {
    return(
        <div>        
            <p className="article"><b>{props.answertext}</b></p>
        </div>
    )
}

export default AnswerText;