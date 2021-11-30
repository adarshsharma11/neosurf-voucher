import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import TextField from '../Components/TextField';
const VoucherInput = (props) => {
    const {
        formField: { voucherCode1, voucherCode2, voucherCode3 }
    } = props;
    return (
        <Container>
            <Row>
                <Col lg={12} className="order-last order-sm-first">
                    <Card>
                        <Card.Body>
                            <Card.Title>Enter your neosurf voucher code.</Card.Title>
                            <Row className="align-items-center">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <TextField
                                        className="mb-2"
                                        id="inlineFormInput"
                                        name={voucherCode1.name}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Username
                                    </Form.Label>
                                    <TextField
                                        className="mb-2"
                                        id="inlineFormInput"
                                        name={voucherCode2.name}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <TextField
                                        className="mb-2"
                                        id="inlineFormInput"
                                        name={voucherCode3.name}
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2" variant="dark">
                                        Countinue
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col lg="12">
                                    <p>
                                        Need help? Read our FAQs for more information or email us
                                        for direct assistance.
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};
VoucherInput.propTypes = {
    formField: PropTypes.any
};
export default VoucherInput;
