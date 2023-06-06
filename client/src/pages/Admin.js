import React, { useState, useContext, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import CreateLesson from "../components/modals/CreateLesson";
import CreateSample from "../components/modals/createSample";
import CreateType from "../components/modals/CreateType";
import CreateUniversity from "../components/modals/CreateUniversity";
import { fetchLessons, fetchSamples, fetchTypes, fetchUniversities } from "../http/sampleAPI";
import { Context } from "../index";
import DeleteLesson from "../components/modals/DeleteLesson";
import DeleteUniversity from "../components/modals/DeleteUniversity";
import DeleteType from "../components/modals/DeleteType";


const Admin = () => {
    const { sample } = useContext(Context)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)
    const [deleteLessonVisible, setDeleteLessonVisible] = useState(false)
    const [deleteUniversityVisible, setDeleteUniversityVisible] = useState(false)
    const [lessonVisible, setLessonVisible] = useState(false)
    const [universityVisible, setUniversityVisible] = useState(false)
    const [sampleVisible, setSampleVisible] = useState(false)

    useEffect(() => {
        fetchUniversities().then(data => sample.setUniversities(data))
        fetchLessons().then(data => sample.setLessons(data))
        fetchTypes().then(data => sample.setTypes(data))
        sample.setSelectedTypes({})
        sample.setSelectedLessons({})
        sample.setSelectedUniversity({})
    }, [sample.delete])


    return (
        <Container className="d-flex flex-column">
            <Button onClick={() => setUniversityVisible(true)} variant="dark" className="mt-4 p-2">
                Добавить учебное заведение
            </Button>
            <Button onClick={() => setLessonVisible(true)} variant="dark" className="mt-4 p-2">
                Добавить предмет
            </Button>
            <Button onClick={() => setTypeVisible(true)} variant="dark" className="mt-4 p-2 ">
                Добавить тип работы
            </Button>
            <Button onClick={() => setSampleVisible(true)} variant="dark" className="mt-4 p-2">
                Добавить шаблон
            </Button>
            <Button onClick={() => setDeleteLessonVisible(true)} variant="dark" className="mt-4 p-2">
                Удалить предмет
            </Button>
            <Button onClick={() => setDeleteUniversityVisible(true)} variant="dark" className="mt-4 p-2">
                Удалить учебное заведение
            </Button>
            <Button onClick={() => setDeleteTypeVisible(true)} variant="dark" className="mt-4 p-2">
                Удалить тип работ
            </Button>
            <CreateLesson show={lessonVisible} onHide={() => setLessonVisible(false)} />
            <CreateSample show={sampleVisible} onHide={() => setSampleVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateUniversity show={universityVisible} onHide={() => setUniversityVisible(false)} />
            <DeleteLesson show={deleteLessonVisible} onHide={() => setDeleteLessonVisible(false)} ></DeleteLesson>
            <DeleteUniversity show={deleteUniversityVisible} onHide={() => setDeleteUniversityVisible(false)} ></DeleteUniversity>
            <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} ></DeleteType>
        </Container>
    )
}

export default Admin;