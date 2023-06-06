import React, { useContext, useState } from "react";
import { Container, Form, Card, Button } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import './Auth.css';
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { useNavigate } from "react-router-dom"


const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === '/login'
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const navigate = useNavigate()

    const buttonIn = async () => {

        try {
            let data;
            if (isLogin) {
                data = await login(email, pass)
            } else {
                data = await registration(email, pass)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate("/")
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container className="d-flex justify-content-center align-items-center "
            style={{ height: "calc(100% - 54px)" }}>
            <Card style={{ width: "600px" }} className="p-2 LoginForm">
                <h2 className="m-auto">
                    {isLogin ?
                        'Авторизация'
                        :
                        'Регистрация'
                    }
                </h2>
                <Form className="d-flex flex-column">
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} className="mt-3" placeholder="Введите email" />
                    <Form.Control value={pass} onChange={e => setPass(e.target.value)} type="password" className="mt-3" placeholder="Введите пароль" />
                    <div className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div><NavLink to="/registration">Нет аккаунта?</NavLink> </div>
                            :
                            <div><NavLink to="/login">Аккаунт уже есть?</NavLink> </div>
                        }

                        <Button
                            onClick={buttonIn}
                            className="align-self-end" variant="success">
                            {isLogin ?
                                'Войти'
                                :
                                'Регистрация'
                            }
                        </Button>{' '}
                    </div>

                </Form>
            </Card>

        </Container>
    )
})

export default Auth;