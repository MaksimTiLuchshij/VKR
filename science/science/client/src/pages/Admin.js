import React, {useState} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import CreateAchievement from "../modal/CreateAchievement";
import CreateSubject from "../modal/CreateSubject";
import exhibition from "../assets/выставка.jpg"
import patent from "../assets/патент.jpg"
import article from "../assets/статья.jpg"
import grant from "../assets/грант.jpg"
import CreateArticle from "../modal/CreateArticle";
import CreateExhibition from "../modal/CreateExhibition";
import CreatePatent from "../modal/CreatePatent";
import CreateGrant from "../modal/CreateGrant";
const Admin = () => {
    const [articleVisible, setArticleVisible] = useState(false)
    const [exhibitionVisible, setExhibitionVisible] = useState(false)
    const [patentVisible, setPatentVisible] = useState(false)
    const [grantVisible, setGrantVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Card style={{width: 400}} className='d-flex justify-content-center align-items-center' >
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${article}) no-repeat center center`,
                                width:150, height:150, backgroundSize:'cover'}}
                        >
                        </div>
                        <Card.Body>
                            <Card.Title>Добавить статью</Card.Title>
                            <Button
                                variant={"warning"}
                                className="mt-2"
                                onClick={() => setArticleVisible(true)}
                            >
                                Добавить
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Card style={{width: 400}} className='d-flex justify-content-center align-items-center'>
                        <Card.Body
                        >
                            <div
                                className='d-flex align-items-center justify-content-center'
                                style={{background: `url(${exhibition}) no-repeat center center`,
                                    width:150, height:150, backgroundSize:'cover'}}
                            >
                            </div>
                            <Card.Title>Добавить выставку</Card.Title>

                            <Button
                                variant={"warning"}
                                className="mt-2"
                                onClick={() => setExhibitionVisible(true)}
                            >
                                Добавить
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-5'>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Card style={{width: 400}} className='d-flex justify-content-center align-items-center'>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{background: `url(${patent}) no-repeat center center`,
                                width:150, height:150, backgroundSize:'cover'}}
                        >
                        </div>
                        <Card.Body>
                            <Card.Title>Добавить патент</Card.Title>
                            <Button
                                variant={"warning"}
                                className="mt-2"
                                onClick={() => setPatentVisible(true)}
                            >
                                Добавить
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='d-flex justify-content-center align-items-center'>
                    <Card style={{width: 400}} className='d-flex justify-content-center align-items-center'>
                        <Card.Body
                        >
                            <div
                                className='d-flex align-items-center justify-content-center'
                                style={{background: `url(${grant}) no-repeat center center`,
                                    width:150, height:150, backgroundSize:'cover'}}
                            >
                            </div>
                            <Card.Title>Добавить грант</Card.Title>
                            <Button
                                variant={"warning"}
                                className="mt-2"
                                onClick={() => setGrantVisible(true)}
                            >
                                Добавить
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <CreateArticle show={articleVisible} onHide={() => setArticleVisible(false)}/>
            <CreateExhibition show={exhibitionVisible} onHide={() => setExhibitionVisible(false)}/>
            <CreatePatent show={patentVisible} onHide={() => setPatentVisible(false)}/>
            <CreateGrant show={grantVisible} onHide={() => setGrantVisible(false)}/>
        </Container>
    );
};

export default Admin;
