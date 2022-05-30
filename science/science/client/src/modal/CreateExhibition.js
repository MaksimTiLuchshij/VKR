import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createExhibition, fetchSubjects, fetchTypes, fetchUniversities} from "../http/exhibitionAPI";
import {observer} from "mobx-react-lite";

const CreateExhibition = observer(({show, onHide}) => {
    const {exhibition} = useContext(Context)
    const [name, setName] = useState('')
    const [type_work, setType_work] = useState('')
    const [place, setPlace] = useState('')
    const [year, setYear] = useState(0)
    const [author, setAuthor] = useState('')
    const [qualification, setQualification] = useState('')
    const [prize_place, setPrize_place] = useState('')

    useEffect(()=>{
        fetchTypes().then(data => exhibition.setTypes(data))
        fetchSubjects().then(data => exhibition.setSubjects(data))
        fetchUniversities().then(data => exhibition.setUniversities(data))
    },[])

    const addExhibition = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('type_work', type_work)
        formData.append('place', place)
        formData.append('year', `${year}`)
        formData.append('author', author)
        formData.append('qualification', qualification)
        formData.append('prize_place', prize_place)
        formData.append('subjectId', exhibition.selectedSubject.id)
        formData.append('typeId', exhibition.selectedType.id)
        formData.append('universityId', exhibition.selectedUniversity.id)
        createExhibition(formData).then(data => onHide())
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
                    Добавить выставку
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-warning'
                        >
                            {exhibition.selectedSubject.name || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {exhibition.subjects.map(subject =>
                                <Dropdown.Item
                                    onClick={() => exhibition.setSelectedSubject(subject)}
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
                            {exhibition.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {exhibition.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => exhibition.setSelectedType(type)}
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
                            {exhibition.selectedUniversity.name || "Выберите университет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {exhibition.universities.map(university =>
                                <Dropdown.Item
                                    onClick={() => exhibition.setSelectedUniversity(university)}
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
                        placeholder="Введите название выставки"
                    >
                    </Form.Control>
                    <Form.Control
                        value={type_work}
                        onChange={e => setType_work(e.target.value)}
                        className="mt-3"
                        placeholder="Введите тип работы"
                    >
                    </Form.Control>
                    <Form.Control
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                        className="mt-3"
                        placeholder="Введите место проведения"
                    >
                    </Form.Control>
                    <Form.Control
                        value={year}
                        onChange={e => setYear(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите год выставки"
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
                        value={qualification}
                        onChange={e => setQualification(e.target.value)}
                        className="mt-3"
                        placeholder="Введите квалификацию автора"
                    >
                    </Form.Control>
                    <Form.Control
                        value={prize_place}
                        onChange={e => setPrize_place(e.target.value)}
                        className="mt-3"
                        placeholder="Введите призовое место"
                    >
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addExhibition}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateExhibition;
