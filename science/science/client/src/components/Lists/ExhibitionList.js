import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import ExhibitionItem from "../Items/ExhibitionItem";

const ExhibitionList = observer(() => {
    const {exhibition} = useContext(Context)

    return (
        <Row className="d-flex">
            {exhibition.exhibitions.map(exhibition =>
                <ExhibitionItem key={exhibition.id} exhibition = {exhibition} />
            )}
        </Row>
    );
});

export default ExhibitionList;
