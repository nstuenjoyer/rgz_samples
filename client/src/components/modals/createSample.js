import React, { useContext, useState } from "react";
import { Button, Dropdown, Form, Modal } from "react-bootstrap";
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import { createSample } from "../../http/sampleAPI";

const CreateSample = observer(({ show, onHide }) => {
    const { sample } = useContext(Context)

    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [nameErr, setNameErr] = useState('')
    const [fileErr, setFileErr] = useState('')
    const [lessionErr, setLessionErr] = useState('')
    const [typeErr, setTypeErr] = useState('')
    const [universityErr, setUniversityErr] = useState('')
    const re = /[^а-яёА-ЯЁ ]/g;
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addSample = () => {
        if (!sample.selectTypes.id) {
            setTypeErr("Выберите тип работы")
        }
        else if (!sample.selectLessons.id) {
            setLessionErr("Выберите предмет")

        }
        else if (!sample.selectUniversity.id) {
            setUniversityErr("Выберите УЗ")

        }
        else if (!name) { setNameErr("Поле пустое") }
        else if (re.test(String(name))) {
            setNameErr("Только русские буквы!");
        }
        else if (!file) { setFileErr("Выберите файл") }

        else {
            console.log('+')
            setLessionErr('')
            setUniversityErr('')
            setTypeErr('')
            setFileErr('')
            setNameErr('')
            const formData = new FormData()
            formData.append('name', name)
            formData.append('docx_sample', file)
            formData.append('LessonId', sample.selectLessons.id)
            formData.append('universityId', sample.selectUniversity.id)
            formData.append('sampleTypeId', sample.selectTypes.id)
            createSample(formData).then(data => onHide())
            sample.setSelectedTypes({})
            sample.setSelectedLessons({})
            sample.setSelectedUniversity({})
            setFile(null)
            sample.setDelelete();
            setName('')
        }
        if (sample.selectTypes.id) {
            setTypeErr("")
        }
        if (sample.selectLessons.id) {
            setLessionErr("")

        }
        if (sample.selectUniversity.id) {
            setUniversityErr("")
        }
        if (name) { setNameErr("") }
        if (re.test(String(name))) {
            setNameErr("Только русские буквы!");
        }
        if (!re.test(String(name))) {
            setNameErr("");
        }
    }

    return (
        <Modal size="lg"
            show={show}
            onHide={onHide}
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить шаблон

                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{sample.selectTypes.type || "Выберите тип работы"}</Dropdown.Toggle>
                        <Dropdown.Menu>{sample.types.map(type =>
                            <Dropdown.Item key={type.id} onClick={() => sample.setSelectedTypes(type)}>{type.type}</Dropdown.Item>
                        )}</Dropdown.Menu>
                        {typeErr.length === 0 ?
                            <div></div>
                            :
                            <div className="pl-2" style={{ color: "red" }}>{typeErr}</div>
                        }
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{sample.selectLessons.name || "Выберите предмет"}</Dropdown.Toggle>
                        <Dropdown.Menu>{sample.lessons.map(lesson =>
                            <Dropdown.Item key={lesson.id} onClick={() => sample.setSelectedLessons(lesson)}>{lesson.name} </Dropdown.Item>
                        )}</Dropdown.Menu>
                        {lessionErr.length === 0 ?
                            <div></div>
                            :
                            <div className="pl-2" style={{ color: "red" }}>{lessionErr}</div>
                        }
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <Dropdown.Toggle>{sample.selectUniversity.university || "Выберите учебное заведение"}</Dropdown.Toggle>
                        <Dropdown.Menu>{sample.universities.map(university =>
                            <Dropdown.Item key={university.id} onClick={() => sample.setSelectedUniversity(university)}>{university.university}</Dropdown.Item>
                        )}</Dropdown.Menu>
                        {universityErr.length === 0 ?
                            <div></div>
                            :
                            <div className="pl-2" style={{ color: "red" }}>{universityErr}</div>
                        }
                    </Dropdown>
                    <Form.Control value={name} onChange={e => setName(e.target.value)} className="mt-2" placeholder="Введите название шаблона" />
                    {nameErr.length === 0 ?
                        <div></div>
                        :
                        <div className="pl-2" style={{ color: "red" }}>{nameErr}</div>
                    }
                    <Form.Control className="mt-2" type="file" accept=".docx" onChange={selectFile} />
                    {fileErr.length === 0 ?
                        <div></div>
                        :
                        <div className="pl-2" style={{ color: "red" }}>{fileErr}</div>
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addSample}>Добавить</Button>
            </Modal.Footer>
        </Modal >
    )
})
export default CreateSample