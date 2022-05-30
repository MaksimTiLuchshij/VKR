import React from 'react';
import {Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {PATENT_ROUTE} from "../../utils/consts";

const PatentItem = ({patent}) => {
    const history = useHistory()
    return (
        <Col md = {6} className="mt-3" onClick={() => history.push(PATENT_ROUTE + '/' + patent.id)}>
            <Card bg={"danger"} style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title style={{color:'white'}}>{patent.name}</Card.Title>
                    <Card.Text style={{color:'white'}}>
                        {patent.contract}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Год</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{patent.year}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Автор</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{patent.author}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default PatentItem;
