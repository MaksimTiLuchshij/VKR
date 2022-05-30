import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import PatentItem from "../Items/PatentItem";

const PatentList = observer(() => {
    const {patent} = useContext(Context)

    return (
        <Row className="d-flex">
            {patent.patents.map(patent =>
                <PatentItem key={patent.id} patent = {patent} />
            )}
        </Row>
    );
});

export default PatentList;
