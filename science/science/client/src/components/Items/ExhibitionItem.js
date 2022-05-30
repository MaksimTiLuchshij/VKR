import React from 'react';
import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {EXHIBITION_ROUTE} from "../../utils/consts";

const ExhibitionItem = ({exhibition}) => {
    const history = useHistory()
    return (
        <Col md = {6} className="mt-3" onClick={() => history.push(EXHIBITION_ROUTE + '/' + exhibition.id)}>
            <Card bg={"danger"} style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title style={{color:'white'}}>{exhibition.name}</Card.Title>
                    <Card.Text style={{color:'white'}}>
                        {exhibition.type_work}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Год</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{exhibition.year}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Автор</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{exhibition.author}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default ExhibitionItem;
