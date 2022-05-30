import React, {useContext, useEffect} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchPatents, fetchSubjects, fetchTypes, fetchUniversities} from "../http/patentAPI";
import TypeBarPatent from "../components/TypeBars/TypeBarPatent";
import UniversityBarPatent from "../components/UniversityBars/UniversityBarPatent";
import SubjectBarPatent from "../components/SubjectBars/SubjectBarPatent";
import PatentList from "../components/Lists/PatentList";
const PatentMain = observer(() => {

    const {patent} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => patent.setTypes(data))
        fetchSubjects().then(data => patent.setSubjects(data))
        fetchUniversities().then(data => patent.setUniversities(data))
        fetchPatents(null, null, null).then(data =>{
            patent.setPatents(data.rows)
        })
    },[])

    useEffect(()=>{
        fetchPatents(patent.selectedType.id, patent.selectedSubject.id, patent.selectedUniversity.id).then(data =>{
            patent.setPatents(data.rows)

        })
    },[patent.selectedType, patent.selectedSubject, patent.selectedUniversity])
    const clearFilter = () => {
        window.location.reload()
    }
    return (
        <Container>
            <Row className="mt-2">
                <Col md = {3}>
                    <h1>Фильтры</h1>
                    <Button
                        className='btn-warning'
                        onClick={clearFilter}
                    >
                        Сбросить фильтры
                    </Button>
                    <p></p>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Тип</Card.Title>
                        </Card.Body>
                    </Card>
                    <TypeBarPatent/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Предмет</Card.Title>
                        </Card.Body>
                    </Card>
                    <SubjectBarPatent/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Университет</Card.Title>
                        </Card.Body>
                    </Card>
                    <UniversityBarPatent/>
                </Col>
                <Col md = {9}>
                    <PatentList/>
                </Col>
            </Row>
        </Container>
    );
});

export default PatentMain;
