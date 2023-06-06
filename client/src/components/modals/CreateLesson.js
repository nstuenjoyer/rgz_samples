import React, { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Context } from "../../index";
import { createLesson } from "../../http/sampleAPI";

const CreateLesson = ({ show, onHide }) => {
    const { sample } = useContext(Context)
    const [err, setErr] = useState('')
    const [value, setValue] = useState('')
    const re = /[^а-яёА-ЯЁ ]/g;

    const addLesson = () => {
        if (value.length === 0) {
            setErr('Поле пустое!');
            return;
        }
        else if (re.test(String(value))) {
            setErr("Только русские буквы!");
            return;
        }
        else {
            setErr('')
            createLesson({ name: value }).then(data => {
                setValue('')
                onHide()
            })
            sample.setDelelete();
        }

    }

    return (
        <Modal size="lg"
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить предмет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите предмет"} id="validationDefault01" required="" />
                </Form>
                {err.length === 0 ?
                    <div></div>
                    :
                    <div className="pl-2" style={{ color: "red" }}>{err}</div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addLesson}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default CreateLesson