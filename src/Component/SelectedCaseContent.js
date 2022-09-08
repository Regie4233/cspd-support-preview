import React, { useEffect, useState } from 'react';
import { Container, Col, Row, ButtonGroup, ToggleButton, Form, InputGroup, Modal, Button, ListGroup, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './RoomCard';
import Axios from 'axios';
import SelectedCaseTabs from './SelectedCaseTabs';
import Placeholder from 'react-bootstrap/Placeholder';
import { RiContactsBookLine, RiDeleteBin6Fill } from 'react-icons/ri';



function SelectedCaseContent(props) {

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
    const [showCaseSelector, setCaseSelector] = useState(false);
    const [modalbodysteps, setmodalbodysteps] = useState(1);
    const [caseNum, setcaseNum] = useState(1);

    const [newtraycaseNum, setnewtraycaseNum] = useState(1);

    const [counter, setCounter] = useState(0);

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);

    const [listTray, setListTray] = useState([]);
    const [trayname, setTrayname] = useState('');

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState(0);

    const [caseCart, setCaseCart] = useState('');

    //force rerender
    const [lastadded, setlastadded] = useState(false);

    //array of rooms
    const arr_room_states = [rm1, rm2, rm3, rm4, rm5, rm6, rm7, rm8, rm9, rm10,
        rm11, rm12, rm13, rm14, rm15, rm16, rm17, rm18, rm19, rm20,
        rm21, rm22, rm23, rm24, rm25, rm26, rm27, rm28, rm29, rm30,
        rm31, rm32];
    const arr_setters = [setRm1, setRm2, setRm3, setRm4, setRm5, setRm6, setRm7, setRm8, setRm9, setRm10,
        setRm11, setRm12, setRm13, setRm14, setRm15, setRm16, setRm17, setRm18, setRm19, setRm20,
        setRm21, setRm22, setRm23, setRm24, setRm25, setRm26, setRm27, setRm28, setRm29, setRm30,
        setRm31, setRm32, setUrgent];

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

    const casenumber_radio = [
        { name: 'First Case', value: '1' },
        { name: 'Second Case', value: '2' },
        { name: 'Third Case', value: '3' },
        { name: 'Fourth Case', value: '4' },
        { name: 'Fifth Case', value: '5' },
        { name: 'Sixth Case', value: '6' }
    ]

    const handleClose = () => {
        setShow(false);
        setmodalbodysteps(1);
        setListTray([]);
        setTrayname('');
        setRadioValue(0);
        setChecked(false);
        setCaseCart('');

    }

    const changeCase = (val) => {
        setcaseNum(val);
    }

    const buttonHandler = {
        deleteAll: (selectedRoom, isUrgent) => {
            if (!isUrgent) {
                const room = arr_room_states[selectedRoom - 1];
                room.forEach(element => {
                    Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${element.id}${caseNum}`).then(() => {
                        room.splice(element.indexOf, 1);
                        setlastadded((prevState) => !prevState);
                    });

                });
            } else {
                urgent.forEach(element => {
                    Axios.delete(`https://mlmdb.herokuapp.com/api/delete/urgent/${element.id}`).then(() => {
                        urgent.splice(element.indexOf, 1);
                        setlastadded((prevState) => !prevState);
                    });

                });
            }

        },
        deleteHandler: (tname, selectedRoom, isUrgent) => {
            console.log("urg " + isUrgent);
            if (isUrgent) {

                Axios.delete(`https://mlmdb.herokuapp.com/api/delete/urgent/${tname}`).then(() => {

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
                Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${tname}${caseNum}`).then(() => {
                    const room = arr_room_states[selectedRoom - 1];
                    let ccc = room.find(x => x.id === tname);
                    if (ccc) {
                        const aaa = room.indexOf(ccc.id)
                        room.splice(aaa, 1);
                        setlastadded((prevState) => !prevState);
                    } else {
                        console.log('Tray not found');
                    }
                });
            }


        },
        UpdateLocation: (newLocation, entryId, isUrgent) => {
            if (!isUrgent) {
                Axios.put('https://mlmdb.herokuapp.com/api/update/location', {
                    fid: entryId,
                    fcurrentLocation: newLocation,
                    fcasenum: caseNum,
                    fisUrgent: false
                });
            } else {
                Axios.put('https://mlmdb.herokuapp.com/api/update/location', {
                    fid: entryId,
                    fcurrentLocation: newLocation,
                    fcasenum: caseNum,
                    fisUrgent: true
                });
            }
            setlastadded((prevState) => !prevState);
        },
        UpdateCaseCart: (newCaseCart, entryId, isUrgent) => {
            if (!isUrgent) {
                Axios.put('https://mlmdb.herokuapp.com/api/update/casecart', {
                    fid: entryId,
                    fcasecart: newCaseCart,
                    fcasenum: caseNum,
                    fisUrgent: false
                });
            } else {
                Axios.put('https://mlmdb.herokuapp.com/api/update/casecart', {
                    fid: entryId,
                    fcasecart: newCaseCart,
                    fcasenum: caseNum,
                    fisUrgent: true
                });
            }
            setlastadded((prevState) => !prevState);
        },
        UpdateNotes: (newNotes, entryId, isUrgent) => {
            if (!isUrgent) {
                Axios.put('https://mlmdb.herokuapp.com/api/update/notes', {
                    fid: entryId,
                    fnotes: newNotes,
                    fcasenum: caseNum,
                    fisUrgent: false
                });
            } else {
                Axios.put('https://mlmdb.herokuapp.com/api/update/notes', {
                    fid: entryId,
                    fnotes: newNotes,
                    fcasenum: 'Urgent',
                    fisUrgent: true
                });
            }
            setlastadded((prevState) => !prevState);
        }

    }
    const postData = (e) => {
        e.preventDefault();
        const dt = new Date();
        const timeStamp = `${dt.getHours() > 12 ? dt.getHours() - 12 : dt.getHours()}:${dt.getMinutes()} ${dt.getHours() > 12 ? 'pm' : 'am'}`;
        const date = new Date();
        listTray.forEach(element => {
            Axios.post('https://mlmdb.herokuapp.com/api/insert', {
                ftrayname: element,
                fcurrentlocation: '- -',
                fnotes: '',
                fradioVal: radioValue,
                fisUrgent: checked,
                ftime: timeStamp,
                fcasecart: caseCart,
                fcasenum: newtraycaseNum,
                fdate: date

            })
        });
        listTray.forEach(element => {
            createPlaceHolder(radioValue, element, newtraycaseNum, checked);
        });
        changeCase(newtraycaseNum);
        
        handleClose();
        setlastadded((prevState) => !prevState);
    }
    const handleNextModal = () => {
        if (listTray.length === 0) { return; }
        setmodalbodysteps(modalbodysteps + 1);
        setTrayname('');
    }
    const handlePrevModal = () => {
        setmodalbodysteps(modalbodysteps - 1);
        setTrayname('');
    }
    const addTraytoList = () => {

        setListTray([...listTray, trayname]);
        setTrayname('');
    }

    function createPlaceHolder(newRoomnum, newTrayname, isChecked) {
        if (isChecked !== 1) {
            const selectedSetter = arr_setters[newRoomnum - 1];
            selectedSetter([...arr_room_states[newRoomnum - 1], { trayname: newTrayname, currentLocation: <PlaceHolderAnimation />, notes: <PlaceHolderAnimation /> }]);
        } else {
            setUrgent([...urgent, { trayname: newTrayname, currentLocation: <PlaceHolderAnimation />, notes: <PlaceHolderAnimation /> }]);
        }
    }

    function deleteFromModularList(index){
        listTray.splice(index,1);
        setlastadded((prevState) => !prevState);
    }

    const roomComp1 = <RoomCard key={rm1.id} roomNum={'OR 1'} trayList={rm1} buttonhandler={buttonHandler} />;
    const roomComp2 = <RoomCard key={rm2.id} roomNum={'OR 2'} trayList={rm2} buttonhandler={buttonHandler} />;
    const roomComp3 = <RoomCard key={rm3.id} roomNum={'OR 3'} trayList={rm3} buttonhandler={buttonHandler} />;
    const roomComp4 = <RoomCard key={rm4.id} roomNum={'OR 4'} trayList={rm4} buttonhandler={buttonHandler} />;
    const roomComp5 = <RoomCard key={rm5.id} roomNum={'OR 5'} trayList={rm5} buttonhandler={buttonHandler} />;
    const roomComp6 = <RoomCard key={rm6.id} roomNum={'OR 6'} trayList={rm6} buttonhandler={buttonHandler} />;
    const roomComp7 = <RoomCard key={rm7.id} roomNum={'OR 7'} trayList={rm7} buttonhandler={buttonHandler} />;
    const roomComp8 = <RoomCard key={rm8.id} roomNum={'OR 8'} trayList={rm8} buttonhandler={buttonHandler} />;
    const roomComp9 = <RoomCard key={rm9.id} roomNum={'OR 9'} trayList={rm9} buttonhandler={buttonHandler} />;
    const roomComp10 = <RoomCard key={rm10.id} roomNum={'OR 10'} trayList={rm10} buttonhandler={buttonHandler} />;

    const roomComp11 = <RoomCard key={rm11.id} roomNum={'OR 11'} trayList={rm11} buttonhandler={buttonHandler} />;
    const roomComp12 = <RoomCard key={rm12.id} roomNum={'OR 12'} trayList={rm12} buttonhandler={buttonHandler} />;
    const roomComp13 = <RoomCard key={rm13.id} roomNum={'OR 13'} trayList={rm13} buttonhandler={buttonHandler} />;
    const roomComp14 = <RoomCard key={rm14.id} roomNum={'OR 14'} trayList={rm14} buttonhandler={buttonHandler} />;
    const roomComp15 = <RoomCard key={rm15.id} roomNum={'OR 15'} trayList={rm15} buttonhandler={buttonHandler} />;
    const roomComp16 = <RoomCard key={rm16.id} roomNum={'OR 16'} trayList={rm16} buttonhandler={buttonHandler} />;
    const roomComp17 = <RoomCard key={rm17.id} roomNum={'OR 17'} trayList={rm17} buttonhandler={buttonHandler} />;
    const roomComp18 = <RoomCard key={rm18.id} roomNum={'OR 18'} trayList={rm18} buttonhandler={buttonHandler} />;
    const roomComp19 = <RoomCard key={rm19.id} roomNum={'OR 19'} trayList={rm19} buttonhandler={buttonHandler} />;
    const roomComp20 = <RoomCard key={rm20.id} roomNum={'OR 20'} trayList={rm20} buttonhandler={buttonHandler} />;

    const roomComp21 = <RoomCard key={rm21.id} roomNum={'OR 21'} trayList={rm21} buttonhandler={buttonHandler} />;
    const roomComp22 = <RoomCard key={rm22.id} roomNum={'OR 22'} trayList={rm22} buttonhandler={buttonHandler} />;
    const roomComp23 = <RoomCard key={rm23.id} roomNum={'OR 23'} trayList={rm23} buttonhandler={buttonHandler} />;
    const roomComp24 = <RoomCard key={rm24.id} roomNum={'OR 24'} trayList={rm24} buttonhandler={buttonHandler} />;
    const roomComp25 = <RoomCard key={rm25.id} roomNum={'OR 25'} trayList={rm25} buttonhandler={buttonHandler} />;
    const roomComp26 = <RoomCard key={rm26.id} roomNum={'OR 26'} trayList={rm26} buttonhandler={buttonHandler} />;
    const roomComp27 = <RoomCard key={rm27.id} roomNum={'OR 27'} trayList={rm27} buttonhandler={buttonHandler} />;
    const roomComp28 = <RoomCard key={rm28.id} roomNum={'OR 28'} trayList={rm28} buttonhandler={buttonHandler} />;
    const roomComp29 = <RoomCard key={rm29.id} roomNum={'OR 29'} trayList={rm29} buttonhandler={buttonHandler} />;
    const roomComp30 = <RoomCard key={rm30.id} roomNum={'OR 30'} trayList={rm30} buttonhandler={buttonHandler} />;

    const roomComp31 = <RoomCard key={rm31.id} roomNum={'OR 31'} trayList={rm31} buttonhandler={buttonHandler} />;
    const roomComp32 = <RoomCard key={rm32.id} roomNum={'OR 32'} trayList={rm32} buttonhandler={buttonHandler} />;
    const urgentRooms = <RoomCard key={rm32.id} roomNum={'Urgent Trays'} trayList={urgent} buttonhandler={buttonHandler} />;

    // useEffect(() => {

    //     // function dateFormatter() {
    //     //     const date = new Date();
    //     //     let month = date.getMonth() + 1;
    //     //     let day = date.getDate();
    //     //     if(month.toString().length === 1){
    //     //         month = '0'+ month;
    //     //     }
    //     //     return `${month}-${day}`;
    //     // }
    //     // console.log(dateFormatter());
    // }, [newtraycaseNum]);

    useEffect(() => {
        const fetchData = async () => {
            if (caseNum === null || caseNum === undefined || caseNum === 0) { console.log('no valid'); return; }
            const respurgent = await Axios.get('https://mlmdb.herokuapp.com/api/get/urgentTrays');
            const response = await Axios.get(`https://mlmdb.herokuapp.com/api/get/traydata/${caseNum}`);
            setRm1(response.data.or1);
            setRm2(response.data.or2);
            setRm3(response.data.or3);
            setRm4(response.data.or4);
            setRm5(response.data.or5);
            setRm6(response.data.or6);
            setRm7(response.data.or7);
            setRm8(response.data.or8);
            setRm9(response.data.or9);
            setRm10(response.data.or10);
            setRm11(response.data.or11);
            setRm12(response.data.or12);
            setRm13(response.data.or13);
            setRm14(response.data.or14);
            setRm15(response.data.or15);
            setRm16(response.data.or16);
            setRm17(response.data.or17);
            setRm18(response.data.or18);
            setRm19(response.data.or19);
            setRm20(response.data.or20);
            setRm21(response.data.or21);
            setRm22(response.data.or22);
            setRm23(response.data.or23);
            setRm24(response.data.or24);
            setRm25(response.data.or25);
            setRm26(response.data.or26);
            setRm27(response.data.or27);
            setRm28(response.data.or28);
            setRm29(response.data.or29);
            setRm30(response.data.or30);
            setRm31(response.data.or31);
            setRm32(response.data.or32);
            setUrgent(respurgent.data);
        }
        fetchData();
        const interval = setInterval(() => {  
            fetchData(); 
        }, 8000);
        
        return () => clearInterval(interval);
    }, [caseNum]);


    const arr_rooms = [{ roomnumber: urgentRooms, data: urgent }, { roomnumber: roomComp1, data: rm1 }, { roomnumber: roomComp2, data: rm2 }, { roomnumber: roomComp3, data: rm3 },
    { roomnumber: roomComp4, data: rm4 }, { roomnumber: roomComp5, data: rm5 }, { roomnumber: roomComp6, data: rm6 },
    { roomnumber: roomComp7, data: rm7 },
    { roomnumber: roomComp8, data: rm8 }, { roomnumber: roomComp9, data: rm9 }, { roomnumber: roomComp10, data: rm10 },
    { roomnumber: roomComp11, data: rm11 }, { roomnumber: roomComp12, data: rm12 }, { roomnumber: roomComp13, data: rm13 },
    { roomnumber: roomComp14, data: rm14 }, { roomnumber: roomComp15, data: rm15 }, { roomnumber: roomComp16, data: rm16 },
    { roomnumber: roomComp17, data: rm17 }, { roomnumber: roomComp18, data: rm18 }, { roomnumber: roomComp19, data: rm19 },
    { roomnumber: roomComp20, data: rm20 },
    { roomnumber: roomComp21, data: rm21 }, { roomnumber: roomComp22, data: rm22 }, { roomnumber: roomComp23, data: rm23 },
    { roomnumber: roomComp24, data: rm24 }, { roomnumber: roomComp25, data: rm25 }, { roomnumber: roomComp26, data: rm26 },
    { roomnumber: roomComp27, data: rm27 }, { roomnumber: roomComp28, data: rm28 }, { roomnumber: roomComp29, data: rm29 },
    { roomnumber: roomComp30, data: rm30 }, { roomnumber: roomComp31, data: rm31 }, { roomnumber: roomComp32, data: rm32 }];




    return (
        <>
            <style>{'body {background-color: whitesmoke;}'}</style>
            <SelectedCaseTabs arr_rooms={arr_rooms} caseNum={caseNum} changeCase={changeCase} showModal={handleShow} />

            <Modal show={show} onHide={handleClose} >

                <Modal.Header closeButton>
                    <Modal.Title>OR#{radioValue}</Modal.Title>
                </Modal.Header>

                <Modal.Dialog hidden={modalbodysteps !== 1 ? true : false} scrollable size='xl'>
                    <Modal.Body style={{ height: '50vh' }}>
                        <InputGroup className="mb-3" >
                            <InputGroup.Text id="basic-addon1">Tray Name</InputGroup.Text>
                            <Form.Control
                                autoFocus
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                onChange={event => setTrayname(event.target.value)}
                                value={trayname}
                            />
                            <Button disabled={trayname.length > 0 ? false : true} onClick={addTraytoList}> Add </Button>
                        </InputGroup>
                        <InputGroup size='sm' style={{ width: '200px' }}>
                            <InputGroup.Text id="basic-addon1">Case Cart #</InputGroup.Text>
                            <Form.Control
                                aria-describedby="basic-addon1"
                                onChange={event => setCaseCart(event.target.value)}
                            />
                        </InputGroup>
                        <ListGroup>
                            <Card>
                                <Card.Header>
                                    Trays to be added:
                                </Card.Header>
                                <Card.Body>
                                    {listTray.map((x, idx) => <ListGroup.Item>{x}<RiDeleteBin6Fill className='moveRight' onClick={() => deleteFromModularList(idx)}/></ListGroup.Item>)}
                                </Card.Body>
                            </Card>
                        </ListGroup>
                    </Modal.Body>
                </Modal.Dialog>

                <Modal.Dialog hidden={modalbodysteps !== 2 ? true : false}>
                    <Modal.Body style={{ height: '50vh' }}>
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
                </Modal.Dialog>

                <Modal.Dialog hidden={modalbodysteps !== 3 ? true : false}>
                    <Modal.Body style={{ height: '50vh' }}>
                        <div>
                            <ButtonGroup>
                                <Container>
                                    <Row>
                                        {casenumber_radio.map((radio, y) => (
                                            <Col className='mb-4'>
                                                <ToggleButton
                                                    key={y}
                                                    id={`case-${y}`}
                                                    type="radio"
                                                    variant='outline-danger'
                                                    name="Case"
                                                    value={radio.value}
                                                    checked={newtraycaseNum === radio.value}
                                                    onChange={e => setnewtraycaseNum(e.currentTarget.value)}
                                                >
                                                    {radio.name}
                                                </ToggleButton>
                                            </Col>

                                        ))}
                                    </Row>
                                </Container>
                            </ButtonGroup>
                        </div>
                        <div>

                            <Button className='moveRight' size='lg' onClick={postData}>Submit</Button>
                        </div>
                    </Modal.Body>
                </Modal.Dialog>


                <Modal.Footer>
                    <Button variant='success' disabled={modalbodysteps === 1 ? true : false} onClick={handlePrevModal}>Prev</Button>
                    <Button variant='success' disabled={modalbodysteps === 3 ? true : false} onClick={handleNextModal}>Next</Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}
function PlaceHolderAnimation() {
    return (
        <>
            <Placeholder as='p' animation='glow'>
                <Placeholder xs={6} />
            </Placeholder>
        </>
    );

}

export default SelectedCaseContent;