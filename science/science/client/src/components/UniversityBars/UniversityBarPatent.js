import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const UniversityBarPatent = observer(() => {
    const {patent} = useContext(Context)
    return (
        <ListGroup>
            {patent.universities.map(university =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={university.id}
                    className='p-3'
                    onClick={() => patent.setSelectedUniversity(university)}
                    border={university.id === patent.selectedUniversity.id ? 'dark' : 'light'}
                >
                    {university.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default UniversityBarPatent;
