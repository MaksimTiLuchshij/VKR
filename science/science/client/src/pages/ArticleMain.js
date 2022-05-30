import React, {useContext, useEffect} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import ArticleList from "../components/Lists/ArticleList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchArticles, fetchSubjects, fetchTypes, fetchUniversities} from "../http/articlesAPI";
import UniversityBarArticle from "../components/UniversityBars/UniversityBarArticle";
import SubjectBarArticle from "../components/SubjectBars/SubjectBarArticle";
import TypeBarArticle from "../components/TypeBars/TypeBarArticle";
import TypeBarGrant from "../components/TypeBars/TypeBarGrant";
import SubjectBarGrant from "../components/SubjectBars/SubjectBarGrant";
import UniversityBarGrant from "../components/UniversityBars/UniversityBarGrant";
import GrantList from "../components/Lists/GrantList";

const ArticleMain = observer(() => {

    const {article} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data => article.setTypes(data))
        fetchSubjects().then(data => article.setSubjects(data))
        fetchUniversities().then(data => article.setUniversities(data))
        fetchArticles(null, null).then(data =>{
            article.setArticles(data.rows)
        })
    },[])

    useEffect(()=>{
        fetchArticles(article.selectedType.id, article.selectedSubject.id, article.selectedUniversity.id).then(data =>{
            article.setArticles(data.rows)

        })
    },[article.selectedType, article.selectedSubject, article.selectedUniversity])
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
                    <TypeBarArticle/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Предмет</Card.Title>
                        </Card.Body>
                    </Card>
                    <SubjectBarArticle/>
                    <Card bg={"danger"}>
                        <Card.Body>
                            <Card.Title style={{color:'white'}}>Университет</Card.Title>
                        </Card.Body>
                    </Card>
                    <UniversityBarArticle/>
                </Col>
                <Col md = {9}>
                    <ArticleList/>
                </Col>
            </Row>
        </Container>
    );
});

export default ArticleMain;
