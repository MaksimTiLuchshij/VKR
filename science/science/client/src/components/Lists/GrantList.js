import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import GrantItem from "../Items/GrantItem";

const GrantList = observer(() => {
    const {grant} = useContext(Context)

    return (
        <Row className="d-flex">
            {grant.grants.map(grant =>
                <GrantItem key={grant.id} grant = {grant} />
            )}
        </Row>
    );
});

export default GrantList;
