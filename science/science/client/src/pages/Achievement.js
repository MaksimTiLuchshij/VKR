import React, {useEffect, useState} from 'react';
import {Card, Carousel, Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from 'react-router-dom'
import {fetchOneAchievement} from "../http/achievementAPI";

const Achievement = () => {
    const [achievement, setAchievement] = useState({info:[]})
    const {id} = useParams()
    useEffect(()=>{
        fetchOneAchievement(id).then(data => setAchievement(data))
    },[])

    return (
        <Container
            className='align-self-md-center'
        >
            <Carousel className='text-center align-self-md-center' variant="dark">
                <Carousel.Item className='text-center'>
                        <Image width={300} height={300} src={process.env.REACT_APP_API_URL + achievement.img} fluid={true}/>
                </Carousel.Item>
                <Carousel.Item>
                    <h1>{achievement.name}</h1>
                    <h2>Характеристики</h2>
                    {achievement.info.map((info, index) =>
                        <Row key = {info.id} style={{background: index % 2 === 0 ? 'lightgray': 'transparent', padding:10}}>
                            {info.title}:{info.description}
                        </Row>
                    )}
                </Carousel.Item>
                <Carousel.Item>
                            <h3>{achievement.author}</h3>
                            <h3>{achievement.tags}</h3>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Achievement;
