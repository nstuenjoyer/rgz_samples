import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    return (<Container className="d-flex" style={{ height: "calc(100% - 54px)", width: "calc(100%)" }}>
        <Row className="d-flex justify-content-center align-items-center "
            style={{ height: "calc(100% - 54px)", width: "calc(100%)" }}
        >
            <Col md={6}>
                <Card style={{ cursor: "pointer" }} onClick={() => navigate("/rules")}>
                    <h5 className="p-2" style={{ textAlign: "center" }}>На эту кнопку нажмешь - к знаниям пойдешь</h5>
                </Card>
            </Col>
            <Col md={6}>
                <Card style={{ cursor: "pointer" }} onClick={() => navigate("/docxsamples")}>
                    <h5 className="p-2" style={{ textAlign: "center" }}>На эту кнопку нажмешь - шаблоны найдешь</h5>
                </Card>
            </Col>
        </Row>
    </Container>
    )
}

export default Home;