import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import SelectBar from "../components/SelectBar";
import SampleList from "../components/SampleList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchLessons, fetchSamples, fetchTypes, fetchUniversities } from "../http/sampleAPI";
import Pages from "../components/Pages";

const DocxSamples = observer(() => {
    const { sample } = useContext(Context)
    useEffect(() => {
        fetchUniversities().then(data => sample.setUniversities(data))
        fetchLessons().then(data => sample.setLessons(data))
        fetchTypes().then(data => sample.setTypes(data))
        fetchSamples(null, null, null, 1, 9).then(data => {
            sample.setSamples(data.rows)
            sample.setTotalCount(data.count)
        })
    }, [sample.delete])

    useEffect(() => {
        fetchSamples(sample.selectTypes.id, sample.selectLessons.id, sample.selectUniversity.id, sample.page, 9).then(data => {
            sample.setSamples(data.rows)
            sample.setTotalCount(data.count)
        })
    }, [sample.page, sample.selectTypes, sample.selectLessons, sample.selectUniversity])



    return (
        <Container className="mt-2 " >
            <Row className="d-flex justify-content-center  "
                style={{ height: "calc(100% - 54px)", width: "calc(100%)" }}
            >
                <Col md={3}>
                    <SelectBar />
                    <Pages ></Pages>
                </Col>
                {(sample.totalCount !== 0) ?
                    <Col md={9}>

                        <SampleList />

                    </Col>
                    :
                    <Col md={9}>
                        <h5 className="mt-4">По заданым критериям шаблонов не найдено</h5>
                    </Col>
                }

            </Row>

        </Container>
    )
})

export default DocxSamples;