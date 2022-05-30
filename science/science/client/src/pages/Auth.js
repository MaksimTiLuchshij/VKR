import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SCIENCE_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useHistory} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password)
                localStorage.setItem('role', data.role)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SCIENCE_ROUTE)
        }
        catch (e){
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}} //Высота браузера - высота всего навбара
        >
            <Card style={{width: 600}} className="p-5">
                <h1 className="m-auto">{isLogin ? 'Авторизация':'Регистрация'}</h1>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={password}
                    />
                    <Button
                        className='mt-3'
                        variant={'outline-success'}
                        onClick={click}
                    >
                        {isLogin ? 'Войти':'Регистрация'}
                    </Button>
                    {isLogin ?
                        <NavLink to={REGISTRATION_ROUTE}>Или зарегистрируйтесь</NavLink>
                        :
                        <NavLink to={LOGIN_ROUTE}>Или войдите</NavLink>
                    }
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
