import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Question from "./components/Question.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Magic Eight Ball</h1>
      <h2>Ask your question?</h2>
      <Question/> 
    </div>
  );
}

export default App;
/* const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement); */

/*
Implementation steps
1) Add input element to JSX
2) Input should be controlled with state (implement proper event handler)
3) Add a button to submit the question to JSX
4) Add event handler of the button
5) As a result of submitting: show the question, answer in text, and answer as image at below
6) API endpoint is: https://yesno.wtf/api and example output:
  {
    "answer":"yes",
    "forced":false,
    "image":"https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif"
  }
7) Make asked question, answer and answer image as new component in different file.
8) Display an error message ("You didn't ask a question"), if user didn't write "?"(question mark) in the input.

Good to have:
- Make your code ES6 compatible
- Prefer stateless functional components over class components if you can
- Using React Hooks instead of class components
*/
