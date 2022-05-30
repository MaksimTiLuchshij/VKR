import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Card, ListGroup} from "react-bootstrap";

const TypeBarArticle = observer(() => {
    const {article} = useContext(Context)
    return (
        <ListGroup>
            {article.types.map(type =>
                <Card
                    style={{cursor: 'pointer'}}
                    key={type.id}
                    className='p-3'
                    onClick={() => article.setSelectedType(type)}
                    border={type.id === article.selectedType.id ? 'dark' : 'light'}
                >
                    {type.name}
                </Card>
            )}
        </ListGroup>
    );
});

export default TypeBarArticle;
