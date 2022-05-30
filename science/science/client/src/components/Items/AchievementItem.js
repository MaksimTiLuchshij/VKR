import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {ACHIEVEMENT_ROUTE} from "../../utils/consts";

const AchievementItem = ({achievement}) => {
    const history = useHistory()
    return (
        <Col md = {6} className="mt-3" onClick={() => history.push(ACHIEVEMENT_ROUTE + '/' + achievement.id)}>
            <Card style={{width: 450, cursor: 'pointer', background:'lightgray'}} border={"light"}>
                <Col className='text-center'>
                     <Image width={300} height ={300} src = {process.env.REACT_APP_API_URL + achievement.img} fluid={true}/>
                    <Row className='text-center'>
                            <h1 className='text-center'>
                                <div>{achievement.name}</div>
                            </h1>
                    </Row>
                </Col>
            </Card>
        </Col>
    );
};

export default AchievementItem;
