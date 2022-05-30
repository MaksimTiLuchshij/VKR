import React, {useEffect, useState} from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneExhibition} from "../http/exhibitionAPI";

const Exhibition = () => {
    const [exhibition, setExhibition] = useState('')
    const {id} = useParams()
    useEffect(()=>{
        fetchOneExhibition(id).then(data => setExhibition(data))
    },[])
    return (
        <Container
            style={{height: window.innerHeight}}
            className='d-flex justify-content-center align-items-center'
        >
            <Card style={{width: 1000}} className="p-5">
                <h1 align='center'>{exhibition.name}</h1>
                <div className='bg-danger mx-3 my-4'>
                    <h2 align='center' className='mx-3 my-4' style={{color: "white"}}>{exhibition.type_work}</h2>
                </div>
                <Table>
                    <Row >
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Место проведения</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{exhibition.place}</h5>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Год</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{exhibition.year}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Автор: {exhibition.author}</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>Квалификация: {exhibition.qualification}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h5 align='left' className='mx-3 my-4'>Призовое место</h5>
                        </Col>
                        <Col>
                            <h5 align='right' className='mx-3 my-4'>{exhibition.prize_place}</h5>
                        </Col>
                    </Row>
                </Table>
            </Card>

        </Container>
    );
};

export default Exhibition;
