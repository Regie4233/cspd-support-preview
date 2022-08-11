import React, { useEffect, useState } from 'react';
import { Form, Offcanvas, Button, Dropdown } from 'react-bootstrap';
function ViewerOffCanvas(props) {

  const [changeCaseCart, setChangeCaseCart] = useState('');
  const [changeTrayName, setTrayName] = useState('');

  useEffect(()=>{
   // setTrayName(props.entrydata.trayname);
    
  }, []);
  return (
    <>

      <Offcanvas show={props.toshow} onHide={props.handlers.OffCanvasClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Update Entry</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>

            <Form.Group className="mb-3">
              <Form.Control placeholder={props.entrydata.trayname} />
              <Form.Text className="text-muted">
                Change the tray name above
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Case Cart #</Form.Label>
              <Form.Control placeholder={props.entrydata.casecartnum} onChange={(e) => setChangeCaseCart(e.target.value)}/>
            </Form.Group>

            <Dropdown>
              <Dropdown.Header>
                <div className='strongtext'>
                  Current Location: {props.entrydata.currentLocation}
                </div>

              </Dropdown.Header>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Update Location
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {props.handlers.UpdateLocation('Decontamination', props.entrydata.id);}}>Decontamination</Dropdown.Item>
                <Dropdown.Item onClick={() => {props.handlers.UpdateLocation('Assembly Priority Rack', props.entrydata.id);}}>Assembly Priority Rack</Dropdown.Item>
                <Dropdown.Item onClick={() => {props.handlers.UpdateLocation('Currently being assembled', props.entrydata.id);}}>Currently being assembled</Dropdown.Item>
                <Dropdown.Item onClick={() => {props.handlers.UpdateLocation('Sterillization', props.entrydata.id);}}>Sterillization</Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>

            <Button variant="primary" className='smallmargin' onClick={() => {props.handlers.UpdateCaseCart(changeCaseCart, props.entrydata.id); props.handlers.OffCanvasClose();}}>
              Save Changes
            </Button>

            <Button className='moveRight smallmargin' variant="danger" onClick={() => {props.handlers.DeleteHandler(props.entrydata.id, props.entrydata.roomnum); props.handlers.OffCanvasClose();}}>
              Remove Entry
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default ViewerOffCanvas;