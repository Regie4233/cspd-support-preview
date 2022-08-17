import React, { useEffect, useState } from 'react';
import { Button, Modal, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import TabnList from './TabnList';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FloatingAddButton from './FloatingAddButton';

function RoomCreator(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);
        setTrayname('');
        setRadioValue(0);
        setChecked(false);

    }


    const handleShow = () => setShow(true);

    //const [traydata, setTraydata] = useState([]);
    const [lastadded, setlastadded] = useState(false);
    const [otrayname, setTrayname] = useState('');

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState(0);

    const [caseCart, setCaseCart] = useState('');

    const [counter, setCounter] = useState(0);
    //buttoncontrols


    const [rm1, setRm1] = useState([]);
    const [rm2, setRm2] = useState([]);

    const [rm3, setRm3] = useState([]);
    const [rm4, setRm4] = useState([]);

    const [rm5, setRm5] = useState([]);
    const [rm6, setRm6] = useState([]);

    const [rm7, setRm7] = useState([]);
    const [rm8, setRm8] = useState([]);

    const [rm9, setRm9] = useState([]);
    const [rm10, setRm10] = useState([]);

    const [rm11, setRm11] = useState([]);
    const [rm12, setRm12] = useState([]);

    const [rm13, setRm13] = useState([]);
    const [rm14, setRm14] = useState([]);

    const [rm15, setRm15] = useState([]);
    const [rm16, setRm16] = useState([]);

    const [rm17, setRm17] = useState([]);
    const [rm18, setRm18] = useState([]);

    const [rm19, setRm19] = useState([]);
    const [rm20, setRm20] = useState([]);

    const [rm21, setRm21] = useState([]);
    const [rm22, setRm22] = useState([]);

    const [rm23, setRm23] = useState([]);
    const [rm24, setRm24] = useState([]);

    const [rm25, setRm25] = useState([]);
    const [rm26, setRm26] = useState([]);

    const [rm27, setRm27] = useState([]);
    const [rm28, setRm28] = useState([]);

    const [rm29, setRm29] = useState([]);
    const [rm30, setRm30] = useState([]);

    const [rm31, setRm31] = useState([]);
    const [rm32, setRm32] = useState([]);

    const [urgent, setUrgent] = useState([]);
    const [traydata, settraydata] = useState([]);
    const arr_room = [rm1, rm2, rm3, rm4, rm5, rm6, rm7, rm8, rm9, rm10,
        rm11, rm12, rm13, rm14, rm15, rm16, rm17, rm18, rm19, rm20,
        rm21, rm22, rm23, rm24, rm25, rm26, rm27, rm28, rm29, rm30, rm31, rm32];

   

    async function fetchData() {
        //const response = await Axios.get('http://localhost:3001/api/get/traydata');
        const response = await Axios.get('https://mlmdb.herokuapp.com/api/get/traydata');
        setRm1(response.data.or1);
        setRm2(response.data.or2);
    }


    useEffect(() => {

        fetchData();

    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
            setCounter((prevCounter) => prevCounter + 1);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const dt = new Date();
        const timeStamp = `${dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()}:${dt.getMinutes()} ${dt.getHours() > 12 ? 'pm' : 'am'}`;
        if (radioValue === 0) {
            alert('Please Select a Room!');
            return;
        }
        Axios.post('https://mlmdb.herokuapp.com/api/insert', {
        //Axios.post('http://localhost:3001/api/insert', {
            ftrayname: otrayname,
            fcurrentlocation: '- -',
            fnotes: 'no notes',
            fradioVal: radioValue,
            fisUrgent: checked,
            fdate: timeStamp,
            fcasecart: caseCart

        }).then(() => {
            setlastadded((prevState) => !prevState);
            if (checked === true) {
                setUrgent([...urgent, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue, isUrgent: checked }]);
            } else {
                if (radioValue === '1') {
                    setRm1([...rm1, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '2') {
                    setRm2([...rm2, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '3') {
                    setRm3([...rm3, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '4') {
                    setRm4([...rm4, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '5') {
                    setRm5([...rm5, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '6') {
                    setRm6([...rm6, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '7') {
                    setRm7([...rm7, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '8') {
                    setRm8([...rm8, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '9') {
                    setRm9([...rm9, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '10') {
                    setRm10([...rm10, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '11') {
                    setRm11([...rm11, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '12') {
                    setRm12([...rm12, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '13') {
                    setRm13([...rm13, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '14') {
                    setRm14([...rm14, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '15') {
                    setRm15([...rm15, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '16') {
                    setRm16([...rm16, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '17') {
                    setRm17([...rm17, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '18') {
                    setRm18([...rm18, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '19') {
                    setRm19([...rm19, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '20') {
                    setRm20([...rm20, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '21') {
                    setRm21([...rm21, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '22') {
                    setRm22([...rm22, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '23') {
                    setRm23([...rm23, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '24') {
                    setRm24([...rm24, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '25') {
                    setRm25([...rm25, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '26') {
                    setRm26([...rm26, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '27') {
                    setRm27([...rm27, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '28') {
                    setRm28([...rm28, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '29') {
                    setRm29([...rm29, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '30') {
                    setRm30([...rm30, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '31') {
                    setRm31([...rm31, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
                else if (radioValue === '32') {
                    setRm32([...rm32, { trayname: otrayname, currentLocation: 'nocal', notes: 'nonots', roomnum: radioValue }]);
                }
            }
        });
        setCaseCart('- -');
        handleClose();
    };


    const buttonHandler = {
        deleteAll: (selectedRoom) => {
            const room = eval(`rm${selectedRoom}`);
            room.forEach(element => {
                 Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${element.id}`).then(() => {
                //Axios.delete(`http://localhost:3001/api/delete/${element.id}`).then(() => {
                    room.splice(element.indexOf, 1);
                    setlastadded((prevState) => !prevState);
                });

            });
        },
        deleteHandler: (tname, selectedRoom, isurgent) => {
            console.log("urg " + isurgent);
            if (isurgent === 1) {

                 Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${tname}`).then(() => {
                //Axios.delete(`http://localhost:3001/api/delete/${tname}`).then(() => {
                    console.log('Deleting ' + tname + ' ' + selectedRoom);

                    let ccc = urgent.find(x => x.id === tname);
                    if (ccc) {
                        const aaa = urgent.indexOf(ccc.id)
                        urgent.splice(aaa, 1);
                        console.log('deleting from ' + urgent + ' tray name ' + tname);
                        setlastadded((prevState) => !prevState);
                    } else {
                        console.log('Tray not found');

                    }
                });
            } else {
                Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${tname}`).then(() => {
                //Axios.delete(`http://localhost:3001/api/delete/${tname}`).then(() => {
                    console.log('Deleting ' + tname + ' ' + selectedRoom);

                    const room = eval(`rm${selectedRoom}`);
                    let ccc = room.find(x => x.id === tname);
                    if (ccc) {
                        const aaa = room.indexOf(ccc.id)
                        room.splice(aaa, 1);
                        console.log('deleting from ' + room + ' tray name ' + tname);
                        setlastadded((prevState) => !prevState);
                    } else {
                        console.log('Tray not found');

                    }
                });
            }


        },
        UpdateLocation: (newLocation, entryId) => {
            Axios.put('https://mlmdb.herokuapp.com/api/update/location', {
            //Axios.put('http://localhost:3001/api/update/location', {
                fid: entryId,
                fcurrentLocation: newLocation
            });
            setlastadded((prevState) => !prevState);
        },
        UpdateCaseCart: (newCaseCart, entryId) => {
            Axios.put('https://mlmdb.herokuapp.com/api/update/casecart', {
            //Axios.put('http://localhost:3001/api/update/casecart', {
                fid: entryId,
                fcasecart: newCaseCart
            });
            setlastadded((prevState) => !prevState);
        }

    }

    const radios = [
        { name: 'OR 1', value: '1' },
        { name: 'OR 2', value: '2' },
        { name: 'OR 3', value: '3' },
        { name: 'OR 4', value: '4' },
        { name: 'OR 5', value: '5' },
        { name: 'OR 6', value: '6' },
        { name: 'OR 7', value: '7' },
        { name: 'OR 8', value: '8' },
        { name: 'OR 9', value: '9' },
        { name: 'OR 10', value: '10' },
        { name: 'OR 11', value: '11' },
        { name: 'OR 12', value: '12' },
        { name: 'OR 12A', value: '13' },
        { name: 'OR 14', value: '14' },
        { name: 'OR 15', value: '15' },
        { name: 'OR 16', value: '16' },
        { name: 'OR 17', value: '17' },
        { name: 'OR 18', value: '18' },
        { name: 'OR 19', value: '19' },
        { name: 'OR 20', value: '20' },
        { name: 'OR 21', value: '21' },
        { name: 'OR 22', value: '22' },
        { name: 'OR 23', value: '23' },
        { name: 'OR 24', value: '24' },
        { name: 'OR 25', value: '25' },
        { name: 'OR 26', value: '26' },
        { name: 'OR 27', value: '27' },
        { name: 'OR 28', value: '28' },
        { name: 'OR 29', value: '29' },
        { name: 'OR 30', value: '30' },
        { name: 'OR 31', value: '31' },
        { name: 'OR 32', value: '32' },
    ];
    return (
        <>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Tray</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Tray Name</InputGroup.Text>
                        <Form.Control
                            autoFocus
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={event => setTrayname(event.target.value)}
                        />
                    </InputGroup>
                    <InputGroup size='sm'>
                        <InputGroup.Text id="basic-addon1">Case Cart #</InputGroup.Text>
                        <Form.Control
                            aria-describedby="basic-addon1"
                            onChange={event => setCaseCart(event.target.value)}
                        />
                    </InputGroup>
                    <br />
                    <ToggleButton
                        className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-danger"
                        checked={checked}
                        value="1"
                        onChange={e => setChecked(e.currentTarget.checked)}
                    >
                        Mark as Urgent Tray
                    </ToggleButton>
                    <br />
                    <div>

                        <ButtonGroup>
                            <Container>
                                <Row>
                                    {radios.map((radio, idx) => (

                                        <Col>
                                            <ToggleButton
                                                key={idx}
                                                id={`radio-${idx}`}
                                                type="radio"
                                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                                name="radio"
                                                value={radio.value}
                                                checked={radioValue === radio.value}
                                                onChange={e => setRadioValue(e.currentTarget.value)}
                                            >
                                                {radio.name}
                                            </ToggleButton>

                                        </Col>

                                    ))}
                                </Row>
                            </Container>
                        </ButtonGroup>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                    <Button variant='primary' onClick={handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
            <div className='mainForm'>
                <TabnList
                    buttonhandler={buttonHandler}
                    room1={rm1} room2={rm2}
                    room3={rm3} room4={rm4}
                    room5={rm5} room6={rm6}
                    room7={rm7} room8={rm8}
                    room9={rm9} room10={rm10}
                    room11={rm11} room12={rm12}
                    room13={rm13} room14={rm14}
                    room15={rm15} room16={rm16}
                    room17={rm17} room18={rm18}
                    room19={rm19} room20={rm20}
                    room21={rm21} room22={rm22}
                    room23={rm23} room24={rm24}
                    room25={rm25} room26={rm26}
                    room27={rm27} room28={rm28}
                    room29={rm29} room30={rm30}
                    room31={rm31} room32={rm32}
                    urgenttrays={urgent} />
            </div>
            <FloatingAddButton clickhandle={handleShow} />
        </>
    );
}
export default RoomCreator;