import React, { useState, useEffect} from "react";
import { Button, Form, FormGroup, Input, Col, Container, Row } from 'reactstrap';
import AnswerImg from "./AnswerImg.js";
import AnswerText from "./AnswerText.js";
import QuestionText from "./QuestionText.js";
import {connect} from "react-redux";
import {getData} from "../redux/action";

const Question = (props) => {
    const {getData, data} = props;

    const [question, setQuestion] = useState('');
    const [value, setValue] = useState('');  

    {console.log(data)}
    return (
        <div>
            <Container>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    setQuestion(value);
                    setValue('');
                    getData();
                }}>

                    <Row>
                        <Col className="center" xs={8}>
                            <FormGroup>
                                <Input 
                                type="text"
                                name="question" 
                                placeholder="Enter Your Question" 
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value)
                                }}/>
                            </FormGroup>
                        </Col>
                    </Row>
                        <Button color="primary">Submit</Button>
                </Form>  

                <QuestionText question={question}/>
                <AnswerText answertext={data.answer}/>
                <AnswerImg image={data.image}/>
            </Container>
        </div>
    );
  }
  
  const mapStateToProps = (state) => {
    return{
        data: state.appReducer.data,
    }
}

const mapDispatchToProps = {
    getData: getData
  };

  
export default connect(mapStateToProps,mapDispatchToProps)(Question);
