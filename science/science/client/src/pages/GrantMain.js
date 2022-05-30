import React, {useContext, useEffect} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchGrants, fetchSubjects, fetchTypes, fetchUniversities} from "../http/grantAPI";
import TypeBarGrant from "../components/TypeBars/TypeBarGrant";
import UniversityBarGrant from "../components/UniversityBars/UniversityBarGrant";
import SubjectBarGrant from "../components/SubjectBars/SubjectBarGrant";
import GrantList from "../components/Lists/GrantList";

const GrantMain = observer(() => {

    const {grant} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => grant.setTypes(data))
        fetchSubjects().then(data => grant.setSubjects(data))
        fetchUniversities().then(data => grant.setUniversities(data))
        fetchGrants(null, null, null).then(data =>{
            grant.setGrants(data.rows)
        })
    },[])

    useEffect(()=>{
        fetchGrants(grant.selectedType.id, grant.selectedSubject.id, grant.selectedUniversity.id).then(data =>{
            grant.setGrants(data.rows)

        })
    },[grant.selectedType, grant.selectedSubject, grant.selectedUniversity])
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
                    <TypeBarGrant/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Предмет</Card.Title>
                        </Card.Body>
                    </Card>
                    <SubjectBarGrant/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Университет</Card.Title>
                        </Card.Body>
                    </Card>
                    <UniversityBarGrant/>
                </Col>
                <Col md = {9}>
                    <GrantList/>
                </Col>
            </Row>
        </Container>
    );
});

export default GrantMain;
