import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
    ADMIN_ROUTE,
    ARTICLE_ROUTE,
    EXHIBITION_ROUTE,
    GRANT_ROUTE,
    LOGIN_ROUTE,
    PATENT_ROUTE,
    SCIENCE_ROUTE
} from "../utils/consts";
import {Container} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="danger">
            <Container>
                <Button
                    className='mx-2'
                    variant={"warning"}
                    onClick={() => history.push(ARTICLE_ROUTE)}
                >
                    Статьи
                </Button>
                <Button
                    className='mx-2'
                    variant={"warning"}
                    onClick={() => history.push(EXHIBITION_ROUTE)}
                >
                    Выставки
                </Button>
                <Button
                    className='mx-2'
                    variant={"warning"}
                    onClick={() => history.push(PATENT_ROUTE)}
                >
                    Патенты
                </Button>
                <Button
                    className='mx-2'
                    variant={"warning"}
                    onClick={() => history.push(GRANT_ROUTE)}
                >
                    Гранты
                </Button>
                {user.isAuth ?
                    <Nav className="m-auto" style={{color:'white'}}>
                        <Button
                            className='mx-2'
                            variant={"warning"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        <Button
                            className='mx-2'
                            variant={"warning"}
                            onClick={() => logOut()}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="m-auto" style={{color:'white'}}>
                        <Button variant={"warning"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>

            }
            </Container>

        </Navbar>
    );
});

export default NavBar
