import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
const VoucherSwap = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} className="order-last order-sm-first">
                    <Card>
                        <Card.Body>
                            <Card.Title>Enter your neosurf voucher swap voucher.</Card.Title>
                            <Button type="submit" className="mb-2" variant="dark">
                                Confirm Swap
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default VoucherSwap;
