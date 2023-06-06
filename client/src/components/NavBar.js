import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Context } from "../index";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { observer } from 'mobx-react-lite'
import './NavBar.css';
import { useNavigate } from "react-router-dom"

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" variant="dark" className="NavBarSh">
            <Container>
                <NavLink style={{ color: 'white' }} to='/'>Главная страница</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }} >
                        <Button
                            onClick={() => navigate("/admin")}
                            variant="outline-light"
                        >
                            Админ панель
                        </Button>

                        <Button
                            onClick={() => logOut()}
                            style={{ marginLeft: '8px' }}

                            variant="outline-light"
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto"
                        onClick={() => navigate("/login")}
                        style={{ color: 'white' }} >
                        <Button variant="outline-light" >Авторизация</Button>
                    </Nav>

                }
            </Container>
        </Navbar >
    )
})

export default NavBar;