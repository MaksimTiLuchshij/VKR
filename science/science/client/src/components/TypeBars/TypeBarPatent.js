import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const TypeBarPatent = observer(() => {
    const {patent} = useContext(Context)
    return (
        <ListGroup>
            {patent.types.map(type =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={type.id}
                    className='p-3'
                    onClick={() => patent.setSelectedType(type)}
                    border={type.id === patent.selectedType.id ? 'dark' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default TypeBarPatent;
