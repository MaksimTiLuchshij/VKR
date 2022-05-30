import React, {useContext, useEffect} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBars/TypeBar";
import SubjectBar from "../components/SubjectBars/SubjectBar";
import AchievementsList from "../components/Lists/AchievementsList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchAchievements, fetchSubjects, fetchTypes, fetchUniversities} from "../http/achievementAPI";
import UniversityBar from "../components/UniversityBars/UniversityBar";
import TypeBarGrant from "../components/TypeBars/TypeBarGrant";
import SubjectBarGrant from "../components/SubjectBars/SubjectBarGrant";
import UniversityBarGrant from "../components/UniversityBars/UniversityBarGrant";
import GrantList from "../components/Lists/GrantList";
import ArticleList from "../components/Lists/ArticleList";
import ExhibitionList from "../components/Lists/ExhibitionList";

const Science = observer(() => {

    const {achievement} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => achievement.setTypes(data))
        fetchSubjects().then(data => achievement.setSubjects(data))
        fetchUniversities().then(data => achievement.setUniversities(data))
        fetchAchievements(null, null, null).then(data =>{
            achievement.setAchievements(data.rows)
        })
    },[])

    useEffect(()=>{
        fetchAchievements(achievement.selectedType.id, achievement.selectedSubject.id, achievement.selectedUniversity.id).then(data =>{
            achievement.setAchievements(data.rows)

        })
    },[achievement.selectedType, achievement.selectedSubject, achievement.selectedUniversity])

    return (
        <Container>
            <Row className="mt-2" >
                <Col md = {3}>
                    <h1>Фильтры</h1>
                    <p></p>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Тип</Card.Title>
                        </Card.Body>
                    </Card>
                    <TypeBar/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Предмет</Card.Title>
                        </Card.Body>
                    </Card>
                    <SubjectBar/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Университет</Card.Title>
                        </Card.Body>
                    </Card>
                    <UniversityBar/>
                </Col>
                <Col md = {9}>
                    <AchievementsList/>
                </Col>
            </Row>
        </Container>
    );
});

export default Science;
