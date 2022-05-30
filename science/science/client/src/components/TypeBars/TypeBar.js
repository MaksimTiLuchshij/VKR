import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const TypeBar = observer(() => {
    const {achievement} = useContext(Context)
    return (
        <ListGroup>
            {achievement.types.map(type =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={type.id}
                    className='p-3'
                    onClick={() => achievement.setSelectedType(type)}
                    border={type.id === achievement.selectedType.id ? 'dark' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default TypeBar;
