import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {Row} from "react-bootstrap";
import AchievementItem from "../Items/AchievementItem";

const AchievementsList = observer(() => {
    const {achievement} = useContext(Context)

    return (
        <Row className="d-flex">
            {achievement.achievements.map(achievement =>
                <AchievementItem key={achievement.id} achievement = {achievement} />
            )}
        </Row>
    );
});

export default AchievementsList;
