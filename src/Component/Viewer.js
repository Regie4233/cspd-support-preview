import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import ViewTable from './ViewTable';
import ViewerOffCanvas from './ViewerOffCanvas';

function Viewer() {

    const [or1, setOr1] = useState([]);
    const [or2, setOr2] = useState([]);
    const [or3, setOr3] = useState([]);
    const [or4, setOr4] = useState([]);
    const [or5, setOr5] = useState([]);
    const [or6, setOr6] = useState([]);
    const [or7, setOr7] = useState([]);
    const [or8, setOr8] = useState([]);
    const [or9, setOr9] = useState([]);
    const [or10, setOr10] = useState([]);

    const [or11, setOr11] = useState([]);
    const [or12, setOr12] = useState([]);
    const [or13, setOr13] = useState([]);
    const [or14, setOr14] = useState([]);
    const [or15, setOr15] = useState([]);
    const [or16, setOr16] = useState([]);
    const [or17, setOr17] = useState([]);
    const [or18, setOr18] = useState([]);
    const [or19, setOr19] = useState([]);
    const [or20, setOr20] = useState([]);

    const [or21, setOr21] = useState([]);
    const [or22, setOr22] = useState([]);
    const [or23, setOr23] = useState([]);
    const [or24, setOr24] = useState([]);
    const [or25, setOr25] = useState([]);
    const [or26, setOr26] = useState([]);
    const [or27, setOr27] = useState([]);
    const [or28, setOr28] = useState([]);
    const [or29, setOr29] = useState([]);
    const [or30, setOr30] = useState([]);

    const [or31, setOr31] = useState([]);
    const [or32, setOr32] = useState([]);

    const [urgenttrays, setUrgent] = useState([]);
    const arr_room = [or1, or2, or3, or4, or5, or6, or7, or8, or9, or10,
        or11, or12, or13, or14, or15, or16, or17, or18, or19, or20,
        or21, or22, or23, or24, or25, or26, or27, or28, or29, or30, or31, or32];


    //off canvas
    const [openCanvas, setCanvas] = useState(false);
    const [targetEntry, setTargetEntry] = useState([]);

    //force rerender
    const [lastadded, setlastadded] = useState(false);

    const [counter, setCounter] = useState(0);
    async function fetchData() {

        for (let i = 1; i <= 32; i++) {
            try {
                const room = eval(`or${i}`);

                const addTray = (add) => {
                    switch (room) {
                        case or1:
                            setOr1(add);
                            break;
                        case or2:
                            setOr2(add);
                            break;
                        case or3:
                            setOr3(add);
                            break;
                        case or4:
                            setOr4(add);
                            break;
                        case or5:
                            setOr5(add);
                            break;
                        case or6:
                            setOr6(add);
                            break;
                        case or7:
                            setOr7(add);
                            break;
                        case or8:
                            setOr8(add);
                            break;
                        case or9:
                            setOr9(add);
                            break;
                        case or10:
                            setOr10(add);
                            break;
                        case or11:
                            setOr11(add);
                            break;
                        case or12:
                            setOr12(add);
                            break;
                        case or13:
                            setOr13(add);
                            break;
                        case or14:
                            setOr14(add);
                            break;
                        case or15:
                            setOr15(add);
                            break;
                        case or16:
                            setOr16(add);
                            break;
                        case or17:
                            setOr17(add);
                            break;
                        case or18:
                            setOr18(add);
                            break;
                        case or19:
                            setOr19(add);
                            break;
                        case or20:
                            setOr20(add);
                            break;
                        case or21:
                            setOr21(add);
                            break;
                        case or22:
                            setOr22(add);
                            break;
                        case or2:
                            setOr23(add);
                            break;
                        case or24:
                            setOr24(add);
                            break;
                        case or25:
                            setOr25(add);
                            break;
                        case or26:
                            setOr26(add);
                            break;
                        case or27:
                            setOr27(add);
                            break;
                        case or28:
                            setOr28(add);
                            break;
                        case or29:
                            setOr29(add);
                            break;
                        case or30:
                            setOr30(add);
                            break;
                        case or31:
                            setOr31(add);
                            break;
                        case or32:
                            setOr32(add);
                            break;
                        default:
                            break;
                    }
                }


                const resp = await Axios.get(`https://mlmdb.herokuapp.com/api/get/or${i}`);
                addTray(resp.data);

                const urg = await Axios.get(`https://mlmdb.herokuapp.com/api/get/urgentTrays`);
                setUrgent(urg.data);


            } catch (e) {
                console.log(e);
            }

            console.log('running');

        }
    }
    //canvas control fucntion show/hide to be sent to the children for clicke event
    const ClickHandlers = {
        OffCanvasShow: (roomnum, newId, isUrgent) => {
            setCanvas(true);
            if (!isUrgent) {
                const room = arr_room[roomnum - 1];
                const entry = room.find(x => x.id === newId);
                //console.log(entry);
                setTargetEntry(entry); //for getting data and deleting
            } else {

                const entry = urgenttrays.find(x => x.id === newId);
                console.log(entry);
                setTargetEntry(entry); //for getting data and deleting
            }

        },
        OffCanvasClose: () => {
            setCanvas(false);
        },
        DeleteHandler: (newId, selectedRoom, isurgent) => {


            Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${newId}`).then(() => {
                //Axios.delete(`http://localhost:3001/api/delete/${newId}`).then(() => {
                console.log('Deleting ' + newId + ' ' + selectedRoom);

                const room = arr_room[selectedRoom - 1];
                const entry = room.find(x => x.id === newId);
                if (entry) {
                    const aaa = room.indexOf(entry.id)
                    room.splice(aaa, 1);
                    console.log('deleting from ' + room + ' tray name ' + newId);
                    setlastadded((prevState) => !prevState);
                } else {
                    console.log('Tray not found');

                }
            });



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
               // Axios.put('http://localhost:3001/api/update/casecart', {
                fid: entryId,
                fcasecart: newCaseCart
            });
            setlastadded((prevState) => !prevState);
        },
        UpdateTrayName: (newname, entryId) => {
            Axios.put('https://mlmdb.herokuapp.com/api/update/trayname', {
                //Axios.put('http://localhost:3001/api/update/trayname', {
                fid: entryId,
                fname: newname
            });
            setlastadded((prevState) => !prevState);
        }
    }


    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
            setCounter((prevCounter) => prevCounter + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        fetchData();
    }, [lastadded])


    return (
        <>
            <div className='mainForm'>
                <ViewTable room1={or1} room2={or2} room3={or3} room4={or4} room5={or5}
                    room6={or6} room7={or7} room8={or8} room9={or9} room10={or10}
                    room11={or11} room12={or12} room13={or13} room14={or14} room15={or15}
                    room16={or16} room17={or17} room18={or18} room19={or19} room20={or20}
                    room21={or21} room22={or22} room23={or23} room24={or24} room25={or25}
                    room26={or26} room27={or27} room28={or28} room29={or29} room30={or30}
                    room31={or31} room32={or32}
                    urgenttrays={urgenttrays} canvascontroller={ClickHandlers} />
                <ViewerOffCanvas toshow={openCanvas} handlers={ClickHandlers} entrydata={targetEntry} />
                {/* send canvas show/hide function to children for click event */}
            </div>
        </>
    );
}
export default Viewer;
