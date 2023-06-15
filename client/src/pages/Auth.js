import React, { useContext, useEffect, useState } from "react";
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
    const [secret, setSecret] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passDirty, setPassdirty] = useState(false)
    const [secretDirty, setSecretdirty] = useState(false)
    const [isformValid, setFormValid] = useState(false);
    const [emailerr, setEmailerr] = useState('Поле не может быть пустым');
    const [secreterr, setSecreterr] = useState('Поле не может быть пустым');
    const [passerr, setPasserr] = useState('Поле не может быть пустым');
    const [servererr, setServerErr] = useState('')
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        if (!isEmailValid(e.target.value)) {
            setEmailerr('Неправильно введен email');
        }
        else {
            setEmailerr("")
        }
    }

    const passHandler = (e) => {
        setPass(e.target.value)
        if (e.target.value.length <= 4) {
            setPasserr('Пароль слишком короткий');
        }
        else {
            setPasserr("")
        }
    }

    const secretHandler = (e) => {
        setSecret(e.target.value)
        if (e.target.value != "root123") {
            setSecreterr('Неправильный код')
        }
        else {
            setSecreterr("")
        }
    }

    useEffect(() => {
        if (emailerr || passerr || secreterr) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }

    }, [emailerr, passerr, secreterr])

    const navigate = useNavigate()

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "email": { setEmailDirty(true); break; }
            case "pass": { setPassdirty(true); break; }
            case "secret": { setSecretdirty(true); break; }
        }
    }

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
            setEmail('')
            setPass('')
        } catch (e) {
            setServerErr(e.response.data.message)
        }

    }
    const clearinput = () => {
        setEmail('')
        setPass('')
        setSecret('')
        setEmailDirty(false)
        setSecretdirty(false)
        setPassdirty(false)
        setEmailerr('Поле не может быть пустым')
        setSecreterr('Поле не может быть пустым')
        setPasserr('Поле не может быть пустым')
        setServerErr('')
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
                {servererr && <div style={{ color: 'red' }}>{servererr}</div>}
                <Form className="d-flex flex-column">
                    <Form.Control onBlur={e => blurHandler(e)} name="email" value={email} onChange={e => emailHandler(e)} type="email" className="mt-3" placeholder="Введите email" />
                    {(emailDirty && emailerr) && <div style={{ color: 'red' }}>{emailerr}</div>}
                    <Form.Control onBlur={e => blurHandler(e)} name="pass" value={pass} onChange={e => passHandler(e)} type="password" className="mt-3" placeholder="Введите пароль" />
                    {(passDirty && passerr) && <div style={{ color: 'red' }}>{passerr}</div>}
                    <Form.Control onBlur={e => blurHandler(e)} name="secret" value={secret} onChange={e => secretHandler(e)} type="password" className="mt-3" placeholder="Введите секретный код" />
                    {(secretDirty && secreterr) && <div style={{ color: 'red' }}>{secreterr}</div>}
                    <div className="d-flex justify-content-between mt-3">
                        {isLogin ?
                            <div><NavLink to="/registration" onClick={clearinput}>Нет аккаунта?</NavLink> </div>
                            :
                            <div><NavLink to="/login" onClick={clearinput}>Аккаунт уже есть?</NavLink> </div>
                        }

                        <Button
                            onClick={buttonIn}
                            disabled={!isformValid}
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