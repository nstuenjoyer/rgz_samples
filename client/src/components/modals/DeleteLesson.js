import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { createLesson, deleteLessons } from "../../http/sampleAPI";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
const DeleteLesson = observer(({ show, onHide }) => {
    const { sample } = useContext(Context)
    const [err, setErr] = useState('')
    const [value, setValue] = useState('')
    const re = /[^а-яёА-ЯЁ ]/g;

    const lessonDelete = () => {

        if (!sample.selectLessons.id) {
            setErr("Выберите предмет")

        }
        else {
            setErr('')

            deleteLessons(sample.selectLessons.id).then(data => {
                sample.setSelectedLessons({})
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
                    Удалить предмет
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className="mt-2">
                    <Dropdown.Toggle>{sample.selectLessons.name || "Выберите предмет"}</Dropdown.Toggle>
                    <Dropdown.Menu>{sample.lessons.map(lesson =>
                        <Dropdown.Item key={lesson.id} onClick={() => sample.setSelectedLessons(lesson)}>{lesson.name} </Dropdown.Item>
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
export default DeleteLesson