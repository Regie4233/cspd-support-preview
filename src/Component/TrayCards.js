import React from 'react';
import { Popover, ListGroup, Dropdown, OverlayTrigger, Button, InputGroup, Form, FloatingLabel } from 'react-bootstrap';

class TrayCards extends React.Component {

    state = { casecart: '', notes: '' };

    popover = (
        <Popover id="popover-basic">
            <Popover.Header as="h3">
                <LocationUpdate handler={this.props.buttonhandler} traydata={this.props.trayinfo}></LocationUpdate>
            </Popover.Header>
            <Popover.Body>
                <div>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder={`Case Cart# ${this.props.trayinfo.casecartnum}`}
                            // aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={(e) => this.setState({casecart: e.currentTarget.value})}
                        />
                        <Button variant="primary" id="button-addon2" onClick={() => this.props.buttonhandler.UpdateCaseCart(this.state.casecart, this.props.trayinfo.id)}>
                            Change
                        </Button>
                    </InputGroup>
                </div>
                <div>
                <InputGroup className="mb-3">
                        <Form.Control
                            placeholder='Notes'
                            aria-describedby="basic-addon2"
                            onChange={(e) => this.setState({notes: e.currentTarget.value})}
                        />
                        <Button variant="primary" id="button-addon2" onClick={() => this.props.buttonhandler.UpdateNotes(this.state.notes, this.props.trayinfo.id)}>
                            Change
                        </Button>
                    </InputGroup>
                </div>
                <div>
                    <Button variant='warning' onClick={() => this.props.buttonhandler.deleteHandler(this.props.trayinfo.id, this.props.roomNumber, this.props.trayinfo.isUrgent)}>Delete</Button>
                    {/* returns the room number back to parent, inorder to delete this specific entry*/}
                </div>
            </Popover.Body>
        </Popover>

    );

    render() {

        const data = this.props.trayinfo;
        return (
            <>
                <Tray popover={this.popover} data={data} />
            </>
        );
    }
}


const Tray = (props) => (
    <OverlayTrigger trigger="click" placement="bottom" overlay={props.popover} rootClose>
        <ListGroup.Item action>
            <div className='traycard'>{props.data.isUrgent ? `OR ${props.data.roomnum} ${props.data.trayname}` : props.data.trayname}</div> {/* name of tray*/}
            <div className='trayLocation'>Location:{props.data.currentLocation}<div className='moveRight'>{`Case Cart# ${props.data.casecartnum}`}</div></div>
            <div>Notes: {props.data.notes}</div> <div className='timestamp'> {`created at ${props.data.timeadded}`}</div>
        </ListGroup.Item>
    </OverlayTrigger>
);

const LocationUpdate = (props) => (
    <Dropdown>
        <Dropdown.Header className='moveRight'>
            {/* <CloseButton onClick={() => this.setState({onShow: false})}></CloseButton> */}
        </Dropdown.Header>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Update Location
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item onClick={() => props.handler.UpdateLocation('Decontamination', props.traydata.id)}>Decontamination</Dropdown.Item>
            <Dropdown.Item onClick={() => props.handler.UpdateLocation('Assembly Priority Rack', props.traydata.id)}>Assembly Priority Rack</Dropdown.Item>
            <Dropdown.Item onClick={() => props.handler.UpdateLocation('Sterillization', props.traydata.id)}>Sterillization</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>

);




export default TrayCards;