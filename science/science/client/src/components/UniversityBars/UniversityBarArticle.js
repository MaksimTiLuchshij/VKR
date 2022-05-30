import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const UniversityBarArticle = observer(() => {
    const {article} = useContext(Context)
    return (
        <ListGroup>
            {article.universities.map(university =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={university.id}
                    className='p-3'
                    onClick={() => article.setSelectedUniversity(university)}
                    border={university.id === article.selectedUniversity.id ? 'dark' : 'light'}
                >
                    {university.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default UniversityBarArticle;
