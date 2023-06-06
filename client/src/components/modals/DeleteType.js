import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { deleteTypes } from "../../http/sampleAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
const DeleteType = observer(({ show, onHide }) => {
    const { sample } = useContext(Context)
    const [err, setErr] = useState('')
    const [value, setValue] = useState('')
    const re = /[^а-яёА-ЯЁ ]/g;

    const lessonDelete = () => {

        if (!sample.selectTypes.type) {
            setErr("Выберите тип")

        }
        else {
            setErr('')

            deleteTypes(sample.selectTypes.id).then(data => {
                sample.setSelectedTypes({})
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
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle>{sample.selectTypes.type || "Выберите тип работы"}</Dropdown.Toggle>
                    <Dropdown.Menu>{sample.types.map(type =>
                        <Dropdown.Item key={type.id} onClick={() => sample.setSelectedTypes(type)}>{type.type}</Dropdown.Item>
                    )}</Dropdown.Menu>
                    {err.length === 0 ?
                        <div></div>
                        :
                        <div className="pl-2" style={{ color: "red" }}>{err}</div>
                    }
                </Dropdown>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-success" onClick={onHide} >Закрыть</Button>
                <Button variant="outline-danger" onClick={lessonDelete}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    )
})
export default DeleteType