import react from 'react';
import { Container, Col, Row, Tab, Tabs, Button, Dropdown, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import FloatingAddButton from './FloatingAddButton';
import {HiOutlineViewGridAdd} from 'react-icons/hi';

class SelectedCaseTabs extends react.Component {


    render() {

        return (
            <>
                <div className='d-none d-md-block'>
                    <FloatingAddButton clickhandle={this.props.showModal} />
                </div>

                
                <div className='mainForm d-block d-md-none'>
                    <Navbar bg="dark" variant="dark" className='fixed-bottom'>
                        <Container className='d-flex justify-content-center'>
                            <Nav className='me-auto'>
                                <Dropdown
                                    drop='up'
                                    onSelect={(x) => this.props.changeCase(x)}
                                >
                                    <Dropdown.Toggle
                                        variant='outline-warning'>
                                        Showing Case {this.props.caseNum}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item eventKey={1}>First Cases</Dropdown.Item>
                                        <Dropdown.Item eventKey={2}>Second Cases</Dropdown.Item>
                                        <Dropdown.Item eventKey={3}>Third Cases</Dropdown.Item>
                                        <Dropdown.Item eventKey={4}>Fourth Cases</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                            </Nav>
                            <Button onClick={this.props.showModal} className='' variant='warning'> <HiOutlineViewGridAdd className='buttonMobile'/> </Button>
                        </Container>
                        
                    </Navbar>
                    <div>
                        <Container>
                            <Row>
                                {
                                    this.props.arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                                }
                            </Row>
                        </Container>
                    </div>

                </div>

                <div className='mainForm d-none d-md-block'>
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={this.props.caseNum}
                        onSelect={(k) => this.props.changeCase(k)} //setcaseNum(k)
                        className="mb-3 tabs"
                        style={{backgroundColor: 'lightsteelblue'}}
                    >
                        <Tab eventKey={1} title="First Cases">
                            <Container>
                                <Row>
                                    {
                                        this.props.arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                                    }
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={2} title="Second Cases">
                            <Container>
                                <Row>
                                    {
                                        this.props.arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                                    }
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={3} title="Third Cases">
                            <Container>
                                <Row>
                                    {
                                        this.props.arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                                    }
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={4} title="Fourth Cases">
                            <Container>
                                <Row>
                                    {
                                        this.props.arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                                    }
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={5} title="Fifth Cases">
                            <Container>
                                <Row>
                                    {
                                        this.props.arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                                    }
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey={6} title="Sixth++ Cases">
                            <Container>
                                <Row>
                                    {
                                        this.props.arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                                    }
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </div>
            </>
        );
    }
}

export default SelectedCaseTabs;