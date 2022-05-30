import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, ListGroup, Table} from "react-bootstrap";
import {Context} from "../../index";

const SubjectBarGrant = observer(() => {
    const {grant} = useContext(Context)

    return (
        <ListGroup>
            {grant.subjects.map(subject =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={subject.id}
                    className='p-3'
                    onClick={() => grant.setSelectedSubject(subject)}
                    border={subject.id === grant.selectedSubject.id ? 'dark' : 'light'}
                >
                    {subject.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default SubjectBarGrant;
