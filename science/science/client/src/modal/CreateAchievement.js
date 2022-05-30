import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../index";
import {createAchievement, fetchSubjects, fetchTypes, fetchUniversities} from "../http/achievementAPI";
import {observer} from "mobx-react-lite";

const CreateAchievement = observer(({show, onHide}) => {
    const {achievement} = useContext(Context)
    const [name, setName] = useState('')
    const [tags, setTags] = useState('')
    const [author, setAuthor] = useState('')
    const [img, setImg] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(()=>{
        fetchTypes().then(data => achievement.setTypes(data))
        fetchSubjects().then(data => achievement.setSubjects(data))
        fetchUniversities().then(data => achievement.setUniversities(data))
    },[])

    const addInfo = () => {
        setInfo([...info, {title: '', description:'', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectImg = e => {
        setImg(e.target.files[0])
    }

    const addAchievement = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('tags', tags)
        formData.append('author', author)
        formData.append('img', img)
        formData.append('subjectId', achievement.selectedSubject.id)
        formData.append('typeId', achievement.selectedType.id)
        formData.append('universityId', achievement.selectedUniversity.id)
        formData.append('info', JSON.stringify(info))
        createAchievement(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить научную работу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-dark'
                        >
                            {achievement.selectedSubject.name || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {achievement.subjects.map(subject =>
                                <Dropdown.Item
                                    onClick={() => achievement.setSelectedSubject(subject)}
                                    key = {subject.id}
                                >
                                    {subject.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-dark'
                        >
                            {achievement.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {achievement.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => achievement.setSelectedType(type)}
                                    key = {type.id}
                                >
                                    {type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-dark'
                        >
                            {achievement.selectedUniversity.name || "Выберите университет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {achievement.universities.map(university =>
                                <Dropdown.Item
                                    onClick={() => achievement.setSelectedUniversity(university)}
                                    key = {university.id}
                                >
                                    {university.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название работы"
                    >
                    </Form.Control>
                    <Form.Control
                        value={tags}
                        onChange={e => setTags(e.target.value)}
                        className="mt-3"
                        placeholder="Введите теги через запятую"
                    >
                    </Form.Control>
                    <Form.Control
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ФИО автора"
                    >
                    </Form.Control>
                    <Form.Control
                        className="mt-3"
                        placeholder="Выберите файл"
                        type='file'
                        onChange={selectImg}
                    >
                    </Form.Control>
                    <p></p>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить характеристику
                    </Button>
                    {
                        info.map(i =>
                            <Row className='mt-2' key = {i.number}>
                                <Col md = {4}>
                                   <Form.Control
                                       value={i.title}
                                       onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                       placeholder="Введите название"
                                   >

                                   </Form.Control>
                                </Col>
                                <Col md = {4}>
                                    <Form.Control
                                        value={i.description}
                                        onChange={(e) => changeInfo('description',e.target.value, i.number)}
                                        placeholder='Введите описание'
                                    >

                                    </Form.Control>
                                </Col>
                                <Col md = {4}>
                                    <Button
                                        onClick={() => removeInfo(i.number)}
                                        variant={"outline-danger"}>
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addAchievement}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateAchievement;
