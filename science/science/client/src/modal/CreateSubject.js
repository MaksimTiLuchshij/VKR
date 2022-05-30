import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import data from "bootstrap/js/src/dom/data";
import {createSubject} from "../http/achievementAPI";

const CreateSubject = ({show, onHide}) => { /*два пропса show - виден компонент или нет,
onHide - функция,скрывающая модальное окно*/

    const [value, setValue] = useState('')
    const addType = () => {
        createSubject({name:value}).then(data => {
            setValue('')
            onHide()
        })
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
                    Добавить направление
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                        />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateSubject;
