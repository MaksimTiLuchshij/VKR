import React, {useContext, useEffect, useState} from 'react';
import {Button, Dropdown, Form, Modal} from "react-bootstrap";
import {Context} from "../index";
import {createGrant, fetchSubjects, fetchTypes, fetchUniversities} from "../http/grantAPI";
import {observer} from "mobx-react-lite";

const CreateGrant = observer(({show, onHide}) => {
    const {grant} = useContext(Context)
    const [name, setName] = useState('')
    const [competition, setCompetition] = useState('')
    const [grantor, setGrantor] = useState('')
    const [author, setAuthor] = useState('')
    const [qualification, setQualification] = useState('')
    const [sum, setSum] = useState(0)

    useEffect(()=>{
        fetchTypes().then(data => grant.setTypes(data))
        fetchSubjects().then(data => grant.setSubjects(data))
        fetchUniversities().then(data => grant.setUniversities(data))
    },[])

    const addGrant = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('competition', competition)
        formData.append('grantor', grantor)
        formData.append('author', author)
        formData.append('qualification', qualification)
        formData.append('sum', `${sum}`)
        formData.append('subjectId', grant.selectedSubject.id)
        formData.append('typeId', grant.selectedType.id)
        formData.append('universityId', grant.selectedUniversity.id)
        createGrant(formData).then(data => onHide())
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
                    Добавить грант
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle
                            className='bg-warning'
                        >
                            {grant.selectedSubject.name || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {grant.subjects.map(subject =>
                                <Dropdown.Item
                                    onClick={() => grant.setSelectedSubject(subject)}
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
                            {grant.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {grant.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => grant.setSelectedType(type)}
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
                            {grant.selectedUniversity.name || "Выберите университет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {grant.universities.map(university =>
                                <Dropdown.Item
                                    onClick={() => grant.setSelectedUniversity(university)}
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
                        placeholder="Введите название гранта"
                    >
                    </Form.Control>
                    <Form.Control
                        value={competition}
                        onChange={e => setCompetition(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название соревнований"
                    >
                    </Form.Control>

                    <Form.Control
                        value={grantor}
                        onChange={e => setGrantor(e.target.value)}
                        className="mt-3"
                        placeholder="Введите грантодателя"
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
                        value={sum}
                        onChange={e => setSum(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите сумму гранта (в рублях)"
                    >
                    </Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addGrant}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateGrant;
