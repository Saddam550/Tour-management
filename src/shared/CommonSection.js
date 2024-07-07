import React from 'react';
import './common-section.css';
import { Container, Row, Col } from 'react-bootstrap';

const CommonSection = ({title}) => {
    return (
        <div>
            <div>
            <section className="common__section">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1>{title}</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
        </div>
    );
};

export default CommonSection;