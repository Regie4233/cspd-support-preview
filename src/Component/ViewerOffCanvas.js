import React, { useEffect, useState } from 'react';
import { Form, Offcanvas, Button, Dropdown } from 'react-bootstrap';
function ViewerOffCanvas(props) {

  const [changeCaseCart, setChangeCaseCart] = useState('');
  // const [changeTrayName, setTrayName] = useState('');
  const [notes, setnotes] = useState('');

  useEffect(() => {
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
              <Form.Control placeholder={props.entrydata.casecartnum} onChange={(e) => setChangeCaseCart(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control placeholder={props.entrydata.notes} onChange={(e) => setnotes(e.target.value)} />
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
                <Dropdown.Item onClick={() => { props.handlers.UpdateLocation('Decontamination', props.entrydata.id, props.entrydata.isUrgent); }}>Decontamination</Dropdown.Item>
                <Dropdown.Item onClick={() => { props.handlers.UpdateLocation('Assembly Priority Rack', props.entrydata.id, props.entrydata.isUrgent); }}>Assembly Priority Rack</Dropdown.Item>
                <Dropdown.Item onClick={() => { props.handlers.UpdateLocation('Currently being assembled', props.entrydata.id, props.entrydata.isUrgent); }}>Currently being assembled</Dropdown.Item>
                <Dropdown.Item onClick={() => { props.handlers.UpdateLocation('Sterillization', props.entrydata.id, props.entrydata.isUrgent); }}>Sterillization</Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

            <Button variant="primary" className='smallmargin' onClick={() => {
              props.handlers.UpdateCaseCart(changeCaseCart, props.entrydata.id, props.entrydata.isUrgent);
              props.handlers.UpdateNotes(notes, props.entrydata.id, props.entrydata.isUrgent);
              props.handlers.OffCanvasClose();
            }}>
              Save Changes
            </Button>

            <Button className='moveRight smallmargin' variant="danger" onClick={() => { props.handlers.DeleteHandler(props.entrydata.id, props.entrydata.roomnum, props.entrydata.isUrgent); props.handlers.OffCanvasClose(); }}>
              Remove Entry
            </Button>
          </Form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


export default ViewerOffCanvas;