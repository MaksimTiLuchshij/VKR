import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const TypeBarGrant = observer(() => {
    const {grant} = useContext(Context)
    return (
        <ListGroup>
            {grant.types.map(type =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={type.id}
                    className='p-3'
                    onClick={() => grant.setSelectedType(type)}
                    border={type.id === grant.selectedType.id ? 'dark' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default TypeBarGrant;
