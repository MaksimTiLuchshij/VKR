import React from 'react';
import {Card, Col, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {useHistory} from 'react-router-dom'
import {ARTICLE_ROUTE} from "../../utils/consts";

const ArticleItem = ({article}) => {
    const history = useHistory()
    return (
        <Col md = {6} className="mt-3" onClick={() => history.push(ARTICLE_ROUTE + '/' + article.id)}>
            <Card bg={"danger"} style={{ width: '25rem' }}>
                <Card.Body>
                    <Card.Title style={{color:'white'}}>{article.name}</Card.Title>
                    <Card.Text style={{color:'white'}}>
                        {article.present_form}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className=''>
                        <h5>{article.title}</h5>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Год</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{article.year}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Row>
                            <Col>
                                <h5 align='left'>Автор</h5>
                            </Col>
                            <Col>
                                <h5 align='right'>{article.author}</h5>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    );
};

export default ArticleItem;
