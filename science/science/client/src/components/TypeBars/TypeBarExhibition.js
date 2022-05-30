import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const TypeBarExhibition = observer(() => {
    const {exhibition} = useContext(Context)
    return (
        <ListGroup>
            {exhibition.types.map(type =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={type.id}
                    className='p-3'
                    onClick={() => exhibition.setSelectedType(type)}
                    border={type.id === exhibition.selectedType.id ? 'dark' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default TypeBarExhibition;
