import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CreateEmp.css';


function CreateEmp() {
    return (
        <>
            <Container>
                <Row className='align-items-center'>
                    <Col className='col-6'>
                        <h2 className='mb-3'>
                            Create Employee
                        </h2>
                        <Form>
                            <Row className='justify-content-center'>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter First Name" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Last Name" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Personal Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter personal email" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicEmail">
                                    <Form.Label>Official Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter official email" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Contact</Form.Label>
                                    <Form.Control type="text" placeholder="Contact No" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-6" controlId="formBasicPassword">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" placeholder="Designation" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <div className='d-flex'>
                                        {
                                            ['Male', 'Female'].map((label) => {
                                                return (
                                                    <div className='col-2'>
                                                        <Form.Check type='radio' label={label} name="gender" />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </Form.Group>

                                

                                <div className='col-3 text-center'>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                    <Col>
                        <img src='images/emplo.png' alt='emp' className='img-fluid' />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CreateEmp