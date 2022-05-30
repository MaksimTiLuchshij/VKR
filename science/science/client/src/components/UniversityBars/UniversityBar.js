import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const UniversityBar = observer(() => {
    const {achievement} = useContext(Context)
    return (
        <ListGroup>
            {achievement.universities.map(university =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={university.id}
                    className='p-3'
                    onClick={() => achievement.setSelectedUniversity(university)}
                    border={university.id === achievement.selectedUniversity.id ? 'dark' : 'light'}
                >
                    {university.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default UniversityBar;
