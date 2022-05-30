import React from 'react';
import {Card, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {GRANT_ROUTE} from "../../utils/consts";

const GrantItem = ({grant}) => {
    const history = useHistory()
    return (
        <Col md = {6} className="mt-3" onClick={() => history.push(GRANT_ROUTE + '/' + grant.id)}>
            <Card bg={"danger"} style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title style={{color:'white'}}>{grant.name}</Card.Title>
                    <Card.Text style={{color:'white'}}>
                        {grant.contract}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Грантодатель</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{grant.grantor}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Автор</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{grant.author}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Сумма</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{grant.sum} руб.</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default GrantItem;
