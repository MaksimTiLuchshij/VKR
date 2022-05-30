import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, ListGroup, Table} from "react-bootstrap";
import {Context} from "../../index";

const SubjectBarExhibition = observer(() => {
    const {exhibition} = useContext(Context)

    return (
        <ListGroup>
            {exhibition.subjects.map(subject =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={subject.id}
                    className='p-3'
                    onClick={() => exhibition.setSelectedSubject(subject)}
                    border={subject.id === exhibition.selectedSubject.id ? 'dark' : 'light'}
                >
                    {subject.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default SubjectBarExhibition;
