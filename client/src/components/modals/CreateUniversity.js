import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { createUniversitet } from "../../http/sampleAPI";
import { Context } from "../../index";

const CreateUniversity = ({ show, onHide }) => {
    const { sample } = useContext(Context)
    const [err, setErr] = useState('')

    const [value, setValue] = useState('')
    const re = /[^а-яёА-ЯЁ ]/g;
    const addUniversity = () => {
        if (value.length === 0) {
            setErr('Поле пустое!');
            return;
        }
        else if (re.test(String(value))) {
            setErr("Только русские буквы!");
            return;
        }
        else {
            setErr('');
            createUniversitet({ university: value }).then(data => {
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
                    Добавить учебное заведение
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={value}
                        onChange={e => setValue(e.target.value)} placeholder={"Введите название учебного заведения"} />
                </Form>
                {err.length === 0 ?
                    <div></div>
                    :
                    <div className="pl-2" style={{ color: "red" }}>{err}</div>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addUniversity}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateUniversity