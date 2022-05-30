import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createArticle, fetchSubjects, fetchTypes, fetchUniversities} from "../http/articlesAPI";
import {observer} from "mobx-react-lite";

const CreateArticle = observer(({show, onHide}) => {
    const {article} = useContext(Context)
    const [name, setName] = useState('')
    const [presentForm, setPresentForm] = useState('')
    const [year, setYear] = useState(0)
    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [journal_name, setJournal_name] = useState('')

    useEffect(()=>{
        fetchTypes().then(data => article.setTypes(data))
        fetchSubjects().then(data => article.setSubjects(data))
        fetchUniversities().then(data => article.setUniversities(data))
    },[])

    const addArticle = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('present_form', presentForm)
        formData.append('year', `${year}`)
        formData.append('author', author)
        formData.append('title', title)
        formData.append('journal_name', journal_name)
        formData.append('subjectId', article.selectedSubject.id)
        formData.append('typeId', article.selectedType.id)
        formData.append('universityId', article.selectedUniversity.id)
        createArticle(formData).then(data => onHide())
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
                    Добавить статью
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-warning'
                        >
                            {article.selectedSubject.name || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {article.subjects.map(subject =>
                                <Dropdown.Item
                                    onClick={() => article.setSelectedSubject(subject)}
                                    key = {subject.id}
                                >
                                    {subject.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-warning'
                        >
                            {article.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {article.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => article.setSelectedType(type)}
                                    key = {type.id}
                                >
                                    {type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-warning'
                        >
                            {article.selectedUniversity.name || "Выберите университет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {article.universities.map(university =>
                                <Dropdown.Item
                                    onClick={() => article.setSelectedUniversity(university)}
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
                        placeholder="Введите название статьи"
                    >
                    </Form.Control>
                    <Form.Control
                        value={presentForm}
                        onChange={e => setPresentForm(e.target.value)}
                        className="mt-3"
                        placeholder="Введите форму представления"
                    >
                    </Form.Control>
                    <Form.Control
                        value={year}
                        onChange={e => setYear(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите год написания"
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
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите краткое описание"
                    >
                    </Form.Control>
                    <Form.Control
                        value={journal_name}
                        onChange={e => setJournal_name(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название журнала"
                    >
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addArticle}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateArticle;
