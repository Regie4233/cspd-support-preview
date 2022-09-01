import Table from 'react-bootstrap/Table';
import ViewEntry from './ViewEntry';
import react from 'react';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ViewerOffCanvas from './ViewerOffCanvas';

function ViewTable(props) {

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
  const [counter, setCounter] = useState(0);
  const [urgenttrays, setUrgent] = useState([]);
  const arr_room = [or1, or2, or3, or4, or5, or6, or7, or8, or9, or10,
    or11, or12, or13, or14, or15, or16, or17, or18, or19, or20,
    or21, or22, or23, or24, or25, or26, or27, or28, or29, or30, or31, or32];

  const [isEmpty, setisEmpty] = useState(true);
  //off canvas
  const [openCanvas, setCanvas] = useState(false);
  const [targetEntry, setTargetEntry] = useState([]);

  //force rerender
  const [lastadded, setlastadded] = useState(false);

  // async function fetchData() {
  //   const respond = await Axios.get(`https://mlmdb.herokuapp.com/api/get/traydata/${props.caseNum}`);
  //   setOr1(respond.data.or1);
  //   setOr2(respond.data.or2);
  //   setOr3(respond.data.or3);
  //   setOr4(respond.data.or4);
  //   setOr5(respond.data.or5);
  //   setOr6(respond.data.or6);
  //   setOr7(respond.data.or7);
  //   setOr8(respond.data.or8);
  //   setOr9(respond.data.or9);
  //   setOr10(respond.data.or10);
  //   setOr11(respond.data.or11);
  //   setOr12(respond.data.or12);
  //   setOr13(respond.data.or13);
  //   setOr14(respond.data.or14);
  //   setOr15(respond.data.or15);
  //   setOr16(respond.data.or16);
  //   setOr17(respond.data.or17);
  //   setOr18(respond.data.or18);
  //   setOr19(respond.data.or19);
  //   setOr20(respond.data.or20);
  //   setOr21(respond.data.or21);
  //   setOr22(respond.data.or22);
  //   setOr23(respond.data.or23);
  //   setOr24(respond.data.or24);
  //   setOr25(respond.data.or25);
  //   setOr26(respond.data.or26);
  //   setOr27(respond.data.or27);
  //   setOr28(respond.data.or28);
  //   setOr29(respond.data.or29);
  //   setOr30(respond.data.or30);
  //   setOr31(respond.data.or31);
  //   setOr32(respond.data.or32);
  // }
  useEffect(() => {
    const interval = setInterval(() => {
      async function fetchData() {
        const respond = await Axios.get(`https://mlmdb.herokuapp.com/api/get/traydata/${props.caseNum}`);
        setOr1(respond.data.or1);
        setOr2(respond.data.or2);
        setOr3(respond.data.or3);
        setOr4(respond.data.or4);
        setOr5(respond.data.or5);
        setOr6(respond.data.or6);
        setOr7(respond.data.or7);
        setOr8(respond.data.or8);
        setOr9(respond.data.or9);
        setOr10(respond.data.or10);
        setOr11(respond.data.or11);
        setOr12(respond.data.or12);
        setOr13(respond.data.or13);
        setOr14(respond.data.or14);
        setOr15(respond.data.or15);
        setOr16(respond.data.or16);
        setOr17(respond.data.or17);
        setOr18(respond.data.or18);
        setOr19(respond.data.or19);
        setOr20(respond.data.or20);
        setOr21(respond.data.or21);
        setOr22(respond.data.or22);
        setOr23(respond.data.or23);
        setOr24(respond.data.or24);
        setOr25(respond.data.or25);
        setOr26(respond.data.or26);
        setOr27(respond.data.or27);
        setOr28(respond.data.or28);
        setOr29(respond.data.or29);
        setOr30(respond.data.or30);
        setOr31(respond.data.or31);
        setOr32(respond.data.or32);
      }
      
      fetchData();
      setCounter((prevCounter) => prevCounter + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [props.caseNum]);
  useEffect(() => {
    async function fetchData() {
      const respond = await Axios.get(`https://mlmdb.herokuapp.com/api/get/traydata/${props.caseNum}`);
      setOr1(respond.data.or1);
      setOr2(respond.data.or2);
      setOr3(respond.data.or3);
      setOr4(respond.data.or4);
      setOr5(respond.data.or5);
      setOr6(respond.data.or6);
      setOr7(respond.data.or7);
      setOr8(respond.data.or8);
      setOr9(respond.data.or9);
      setOr10(respond.data.or10);
      setOr11(respond.data.or11);
      setOr12(respond.data.or12);
      setOr13(respond.data.or13);
      setOr14(respond.data.or14);
      setOr15(respond.data.or15);
      setOr16(respond.data.or16);
      setOr17(respond.data.or17);
      setOr18(respond.data.or18);
      setOr19(respond.data.or19);
      setOr20(respond.data.or20);
      setOr21(respond.data.or21);
      setOr22(respond.data.or22);
      setOr23(respond.data.or23);
      setOr24(respond.data.or24);
      setOr25(respond.data.or25);
      setOr26(respond.data.or26);
      setOr27(respond.data.or27);
      setOr28(respond.data.or28);
      setOr29(respond.data.or29);
      setOr30(respond.data.or30);
      setOr31(respond.data.or31);
      setOr32(respond.data.or32);
    }
    fetchData();
  }, [props.caseNum])

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
      Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${newId}${props.caseNum}`).then(() => {
        const room = arr_room[selectedRoom - 1];
        let ccc = room.find(x => x.id === newId);
        if (ccc) {
          const aaa = room.indexOf(ccc.id)
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
        fid: entryId,
        fcurrentLocation: newLocation,
        fcasenum: props.caseNum
      });
      setlastadded((prevState) => !prevState);
    },
    UpdateCaseCart: (newCaseCart, entryId) => {
      Axios.put('https://mlmdb.herokuapp.com/api/update/casecart', {
        fid: entryId,
        fcasecart: newCaseCart,
        fcasenum: props.caseNum
      });
      setlastadded((prevState) => !prevState);
    },
    UpdateTrayName: (newname, entryId) => {
      Axios.put('https://mlmdb.herokuapp.com/api/update/trayname', {
        fid: entryId,
        fname: newname
      });
      setlastadded((prevState) => !prevState);
    }
  }

  return (
    <>
      <div className='d-flex justify-content-start tableHead'>
        <h6>{`Case # ${props.caseNum}`}</h6>
      </div>

      <ViewerOffCanvas toshow={openCanvas} handlers={ClickHandlers} entrydata={targetEntry} />
      {urgenttrays.length > 0 ?
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Urgent Tray</th>
              <th>Tray Name</th>
              <th>Location</th>
              <th>Case Cart #</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {urgenttrays.map((info) => <ViewEntry room={info} isUrgent={true} canvascontroller={this.props.canvascontroller} />)}
          </tbody>
        </Table>
        :
        null
      }

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Room #</th>
            <th>Tray Name</th>
            <th>Location</th>
            <th>Case Cart #</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {arr_room.map((element) => element.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={ClickHandlers} />))}
        </tbody>
      </Table>


    </>
  );

}

export default ViewTable;