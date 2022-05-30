import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, ListGroup, Table} from "react-bootstrap";
import {Context} from "../../index";

const SubjectBarPatent = observer(() => {
    const {patent} = useContext(Context)

    return (
        <ListGroup>
            {patent.subjects.map(subject =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={subject.id}
                    className='p-3'
                    onClick={() => patent.setSelectedSubject(subject)}
                    border={subject.id === patent.selectedSubject.id ? 'dark' : 'light'}
                >
                    {subject.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default SubjectBarPatent;
