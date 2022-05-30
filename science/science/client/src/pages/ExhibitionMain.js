import React, {useContext, useEffect} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchExhibitions, fetchSubjects, fetchTypes, fetchUniversities} from "../http/exhibitionAPI";
import TypeBarExhibition from "../components/TypeBars/TypeBarExhibition";
import UniversityBarExhibition from "../components/UniversityBars/UniversityBarExhibition";
import SubjectBarExhibition from "../components/SubjectBars/SubjectBarExhibition";
import ExhibitionList from "../components/Lists/ExhibitionList";
import TypeBarGrant from "../components/TypeBars/TypeBarGrant";
import SubjectBarGrant from "../components/SubjectBars/SubjectBarGrant";
import UniversityBarGrant from "../components/UniversityBars/UniversityBarGrant";
import GrantList from "../components/Lists/GrantList";

const ExhibitionMain = observer(() => {

    const {exhibition} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => exhibition.setTypes(data))
        fetchSubjects().then(data => exhibition.setSubjects(data))
        fetchUniversities().then(data => exhibition.setUniversities(data))
        fetchExhibitions(null, null,null).then(data =>{
            exhibition.setExhibitions(data.rows)
        })
    },[])

    useEffect(()=>{
        fetchExhibitions(exhibition.selectedType.id, exhibition.selectedSubject.id, exhibition.selectedUniversity.id).then(data =>{
            exhibition.setExhibitions(data.rows)

        })
    },[exhibition.selectedType, exhibition.selectedSubject, exhibition.selectedUniversity])
    const clearFilter = () => {
        window.location.reload()
    }
    return (
        <Container>
            <Row className="mt-2">
                <Col md = {3}>
                    <Button
                        className='btn-warning'
                        onClick={clearFilter}
                    >
                        Сбросить фильтры
                    </Button>
                    <h1>Фильтры</h1>
                    <p></p>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Тип</Card.Title>
                        </Card.Body>
                    </Card>
                    <TypeBarExhibition/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Предмет</Card.Title>
                        </Card.Body>
                    </Card>
                    <SubjectBarExhibition/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Университет</Card.Title>
                        </Card.Body>
                    </Card>
                    <UniversityBarExhibition/>
                </Col>
                <Col md = {9}>
                    <ExhibitionList/>
                </Col>
            </Row>
        </Container>
    );
});

export default ExhibitionMain;
