import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const UniversityBarExhibition = observer(() => {
    const {exhibition} = useContext(Context)
    return (
        <ListGroup>
            {exhibition.universities.map(university =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={university.id}
                    className='p-3'
                    onClick={() => exhibition.setSelectedUniversity(university)}
                    border={university.id === exhibition.selectedUniversity.id ? 'dark' : 'light'}
                >
                    {university.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default UniversityBarExhibition;
