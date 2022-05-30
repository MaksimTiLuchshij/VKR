import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, ListGroup, Table} from "react-bootstrap";
import {Context} from "../../index";

const SubjectBar = observer(() => {
    const {achievement} = useContext(Context)

    return (
        <ListGroup>
            {achievement.subjects.map(subject =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={subject.id}
                    className='p-3'
                    onClick={() => achievement.setSelectedSubject(subject)}
                    border={subject.id === achievement.selectedSubject.id ? 'dark' : 'light'}
                >
                    {subject.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default SubjectBar;
