import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../../logo.svg';
import * as styles from './pageTitle.style.scss';
const PageTitle = () => {
    return (
        <Container className={styles.pageTitleContainer}>
            <Row>
                <Col lg={6} className="order-last order-sm-first">
                    <Card className={styles.Card}>
                        <Card.Body>
                            <Card.Title>
                                Some quick example text to build on the card title and make up the
                                bulk of the card&apos;s content.
                            </Card.Title>
                        </Card.Body>
                    </Card>
                    <Card className={styles.Card}>
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card&apos;s content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Right Card/Top Card</Card.Title>
                            <Card.Img src={logo} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PageTitle;
