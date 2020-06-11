import React from "react";
import { Row, Col, CardImg} from 'reactstrap';
import "../styles.css";

const AnswerImg = (props) => {
    return(
        <div>
            <Row>
                <Col className="center" xs={6}>
                    <CardImg top width="100%" src={props.image}/>
                </Col>
            </Row>
        </div>
    )
}

export default AnswerImg;