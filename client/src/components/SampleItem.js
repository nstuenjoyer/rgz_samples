import React, { useContext } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { deleteSample } from '../http/sampleAPI';


const SampleItem = observer(({ props }) => {
    const { user, sample } = useContext(Context)
    const buttonDelete = () => {
        deleteSample(props.id, props.docx_sample);
        sample.setDelelete();
    }

    return (
        <Col md={4} className='mt-4' >
            <Card className='p-2' style={{ height: "100%" }}  >
                <h6 style={{ paddingLeft: "4px" }}>Предмет: {sample.lessons.find(function (item) { return item.id === props.LessonId; }).name}</h6>
                <h6 style={{ paddingLeft: "4px" }}>Тип работы: {sample.types.find(function (item) { return item.id === props.sampleTypeId; }).type}</h6>
                <h6 style={{ paddingLeft: "4px" }}>Вуз: {sample.universities.find(function (item) { return item.id === props.universityId; }).university}</h6>
                <h5 className='align-self-center mt-auto' style={{ textAlign: "center" }}>{props.name}</h5>
                <Form className='d-flex flex-row justify-content-between mt-auto'><Button type="button" className="btn btn-primary btn-sm align-self-center mt-auto" href={'http://217.71.129.139:4560/' + props.docx_sample}>Скачать шаблон</Button>
                    {
                        user.isAuth ?
                            <Button type="button" className="btn btn-danger btn-sm align-self-center mt-auto" onClick={buttonDelete}>удалить шаблон</Button>
                            :
                            ''
                    }</Form>
            </Card>
        </Col >

    );
})

export default SampleItem;