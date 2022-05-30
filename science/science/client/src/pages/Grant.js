import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneGrant} from "../http/grantAPI";

const Grant = () => {
    const [grant, setGrant] = useState('')
    const {id} = useParams()
    useEffect(()=>{
        fetchOneGrant(id).then(data => setGrant(data))
    },[])
    return (
        <Container
            style={{height: window.innerHeight}}
            className='d-flex justify-content-center align-items-center'
        >
            <Card style={{width: 1000}} className="p-5">
                <h1 align='center'>{grant.name}</h1>
                <div className='bg-danger mx-3 my-4'>
                    <h2 align='center' className='mx-3 my-4' style={{color: "white"}}>{grant.competition}</h2>
                </div>
                <Table>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Грантодатель</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{grant.grantor}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Автор: {grant.author}</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>Квалификация: {grant.qualification}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Сумма гранта</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{grant.sum} руб.</h5>
                        </Col>
                    </Row>
                </Table>
            </Card>

        </Container>
    );
};

export default Grant;
