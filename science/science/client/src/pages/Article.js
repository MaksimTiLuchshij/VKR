import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneArticle} from "../http/articlesAPI";

const Article = () => {
    const [article, setArticle] = useState('')
    const {id} = useParams()
    useEffect(()=>{
        fetchOneArticle(id).then(data => setArticle(data))
    },[])
    return (
        <Container
            style={{height: window.innerHeight}}
            className='d-flex justify-content-center align-items-center'
        >

            <Card style={{width: 1000}} className="p-5">
                <h1 align='center'>{article.name}</h1>
                <div className='bg-danger mx-3 my-4'>
                    <h2 align='center' className='mx-3 my-4' style={{color: "white"}}>{article.present_form}</h2>
                </div>
                <Table>
                    <h5 className='mx-3 my-4'>{article.title}</h5>
                    <Row >
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Год</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{article.year}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Автор</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{article.author}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Название журнала</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{article.journal_name}</h5>
                        </Col>
                    </Row>
                </Table>
            </Card>

        </Container>
    );
};

export default Article;
