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
                <h5>{props.id}</h5>
                <h5 className='align-self-center' style={{ textAlign: "center" }}>{props.name}</h5>
                <Form className='d-flex flex-row justify-content-between'><Button type="button" className="btn btn-primary btn-sm align-self-center mt-auto" href={'http://localhost:5000/' + props.docx_sample}>Скачать шаблон</Button>
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