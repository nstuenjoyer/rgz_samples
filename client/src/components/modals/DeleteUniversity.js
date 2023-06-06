import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { deleteUniversities } from "../../http/sampleAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
const DeleteUniversity = observer(({ show, onHide }) => {
    const { sample } = useContext(Context)
    const [err, setErr] = useState('')
    const [value, setValue] = useState('')
    const re = /[^а-яёА-ЯЁ ]/g;

    const lessonDelete = () => {

        if (!sample.selectUniversity.id) {
            setErr("Выберите УЗ")

        }
        else {
            setErr('')

            deleteUniversities(sample.selectUniversity.id).then(data => {
                sample.setSelectedUniversity({})
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
                <Dropdown className="mt-2">
                    <Dropdown.Toggle>{sample.selectUniversity.university || "Выберите учебное заведение"}</Dropdown.Toggle>
                    <Dropdown.Menu>{sample.universities.map(university =>
                        <Dropdown.Item key={university.id} onClick={() => sample.setSelectedUniversity(university)}>{university.university}</Dropdown.Item>
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
export default DeleteUniversity