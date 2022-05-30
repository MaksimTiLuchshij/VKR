import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createPatent, fetchSubjects, fetchTypes, fetchUniversities} from "../http/patentAPI";
import {observer} from "mobx-react-lite";

const CreatePatent = observer(({show, onHide}) => {
    const {patent} = useContext(Context)
    const [name, setName] = useState('')
    const [contract, setContract] = useState('')
    const [year, setYear] = useState(0)
    const [author, setAuthor] = useState('')

    useEffect(()=>{
        fetchTypes().then(data => patent.setTypes(data))
        fetchSubjects().then(data => patent.setSubjects(data))
        fetchUniversities().then(data => patent.setUniversities(data))
    },[])

    const addPatent = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('contract', contract)
        formData.append('year', `${year}`)
        formData.append('author', author)
        formData.append('subjectId', patent.selectedSubject.id)
        formData.append('typeId', patent.selectedType.id)
        formData.append('universityId', patent.selectedUniversity.id)
        createPatent(formData).then(data => onHide())
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
                    Добавить патент
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-warning'
                        >
                            {patent.selectedSubject.name || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {patent.subjects.map(subject =>
                                <Dropdown.Item
                                    onClick={() => patent.setSelectedSubject(subject)}
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
                            {patent.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {patent.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => patent.setSelectedType(type)}
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
                            {patent.selectedUniversity.name || "Выберите университет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {patent.universities.map(university =>
                                <Dropdown.Item
                                    onClick={() => patent.setSelectedUniversity(university)}
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
                        placeholder="Введите название патента"
                    >
                    </Form.Control>
                    <Form.Control
                        value={contract}
                        onChange={e => setContract(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название контракта"
                    >
                    </Form.Control>
                    <Form.Control
                        value={year}
                        onChange={e => setYear(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите год патентования"
                    >
                    </Form.Control>
                    <Form.Control
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ФИО автора"
                    >
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addPatent}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreatePatent;
