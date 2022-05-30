import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const UniversityBarGrant = observer(() => {
    const {grant} = useContext(Context)
    return (
        <ListGroup>
            {grant.universities.map(university =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={university.id}
                    className='p-3'
                    onClick={() => grant.setSelectedUniversity(university)}
                    border={university.id === grant.selectedUniversity.id ? 'dark' : 'light'}
                >
                    {university.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default UniversityBarGrant;
