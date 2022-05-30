import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOnePatent} from "../http/patentAPI";

const Patent = () => {
    const [patent, setPatent] = useState('')
    const {id} = useParams()
    useEffect(()=>{
        fetchOnePatent(id).then(data => setPatent(data))
    },[])
    return (
        <Container
            style={{height: window.innerHeight}}
            className='d-flex justify-content-center align-items-center'
        >
            <Card style={{width: 1000}} className="p-5">
                <h1 align='center'>{patent.name}</h1>
                <div className='bg-danger mx-3 my-4'>
                    <h2 align='center' className='mx-3 my-4' style={{color: "white"}}>{patent.contract}</h2>
                </div>
                <Table>
                    <Row >
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Год</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{patent.year}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Автор</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{patent.author}</h5>
                        </Col>
                    </Row>
                </Table>
            </Card>

        </Container>
    );
};

export default Patent;
