import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import SampleItem from './SampleItem';
import { Context } from '../index';

const SampleList = observer(() => {
    const { sample } = useContext(Context)
    return (
        <Row className="d-flex m-auto">
            {sample.samples.map(sample =>
                <SampleItem key={sample.id} props={sample} />

            )}
        </Row>

    );
})

export default SampleList;