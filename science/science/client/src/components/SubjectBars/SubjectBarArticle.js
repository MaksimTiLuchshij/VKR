import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Card, ListGroup, Table} from "react-bootstrap";
import {Context} from "../../index";

const SubjectBarArticle = observer(() => {
    const {article} = useContext(Context)

    return (
        <ListGroup>
            {article.subjects.map(subject =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={subject.id}
                    className='p-3'
                    onClick={() => article.setSelectedSubject(subject)}
                    border={subject.id === article.selectedSubject.id ? 'dark' : 'light'}
                >
                    {subject.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default SubjectBarArticle;
