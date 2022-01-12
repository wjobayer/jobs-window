import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import design from '../../../images/1_8.jpg'
import designa from '../../../images/2_8.jpg'
import designb from '../../../images/3_8.jpg'
import './Inspiration.css'


const Inspiration = () => {
    return (
        <div className="my-5">
<Container>
  <Row>
    <Col sm className="my-2"><h4 className="mb-4">Design <span className="fw-bold">Inspiration</span></h4>
    <p className="custom-font text-start">Incorporating chevron shapes and symmetry, our designers sought to create dynamic designs that evoke balance and harmony. Chevrons, angles, and geometric outlines define the Geo Collection is refined yet bold aesthetic.</p>
    </Col>
    <Col sm><img src={design} alt="" /></Col>
    <Col sm><img src={designa} alt="" /></Col>
    <Col sm><img src={designb} alt="" /></Col>
  </Row>
</Container>
        </div>
    );
};

export default Inspiration;