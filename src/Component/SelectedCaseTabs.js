import react from 'react';
import { Container, Col, Row, Tab, Tabs, Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap';
// import { AiOutlineMenuFold } from 'react-icons/ai';
class SelectedCaseTabs extends react.Component {


    render() {

        return (
            <>
                <div className='mainForm d-block d-md-none'>
                    <h1 className='d-flex justify-content-center'>{`Showing Case ${this.props.caseNum}`}</h1>
                </div>
                <div className='mainForm d-block d-md-none'>
                    <div className='fixed-top d-flex justify-content-end p-2 mainForm'>
                        <Dropdown
                            drop='start'
                            onSelect={(x) => this.props.changeCase(x)}
                        >
                            <Dropdown.Toggle 
                            variant='outline-dark'>
                                {/* <AiOutlineMenuFold className='iconsize' /> */}
                                ----
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey={1}>First Cases</Dropdown.Item>
                                <Dropdown.Item eventKey={2}>Second Cases</Dropdown.Item>
                                <Dropdown.Item eventKey={3}>Third Cases</Dropdown.Item>
                                <Dropdown.Item eventKey={4}>Fourth Cases</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
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
                        //onSelect={((k) =>console.log(k))}
                        //defaultActiveKey='2'
                        onSelect={(k) => this.props.changeCase(k)} //setcaseNum(k)
                        className="mb-3 tabs"
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
                        <Tab eventKey={4} title="Fourth++ Cases">
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