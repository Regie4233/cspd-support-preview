import Table from 'react-bootstrap/Table';
import ViewEntry from './ViewEntry';
import Axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
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
  const [urgent, setUrgent] = useState([]);
  const arr_room = [or1, or2, or3, or4, or5, or6, or7, or8, or9, or10,
    or11, or12, or13, or14, or15, or16, or17, or18, or19, or20,
    or21, or22, or23, or24, or25, or26, or27, or28, or29, or30, or31, or32];

  //off canvas
  const [openCanvas, setCanvas] = useState(false);
  const [targetEntry, setTargetEntry] = useState([]);

  //force rerender
  const [lastadded, setlastadded] = useState(false);

  //hide if no entries
  const [hideTable, setHideTable] = useState(false);
  const totalTraysCount = useRef();



  useEffect(() => {
    const interval = setInterval(() => {

      async function fetchData() {
        if (props.caseNum !== 'Urgent') {
          const response = await Axios.get(`https://mlmdb.herokuapp.com/api/get/traydata/${props.caseNum}`);
          totalTraysCount.current = 0;
          Object.entries(response.data).forEach(element => {
            totalTraysCount.current += element[1].length;
          });
          setOr1(response.data.or1);
          setOr2(response.data.or2);
          setOr3(response.data.or3);
          setOr4(response.data.or4);
          setOr5(response.data.or5);
          setOr6(response.data.or6);
          setOr7(response.data.or7);
          setOr8(response.data.or8);
          setOr9(response.data.or9);
          setOr10(response.data.or10);
          setOr11(response.data.or11);
          setOr12(response.data.or12);
          setOr13(response.data.or13);
          setOr14(response.data.or14);
          setOr15(response.data.or15);
          setOr16(response.data.or16);
          setOr17(response.data.or17);
          setOr18(response.data.or18);
          setOr19(response.data.or19);
          setOr20(response.data.or20);
          setOr21(response.data.or21);
          setOr22(response.data.or22);
          setOr23(response.data.or23);
          setOr24(response.data.or24);
          setOr25(response.data.or25);
          setOr26(response.data.or26);
          setOr27(response.data.or27);
          setOr28(response.data.or28);
          setOr29(response.data.or29);
          setOr30(response.data.or30);
          setOr31(response.data.or31);
          setOr32(response.data.or32);
        } else {
          const respurgent = await Axios.get('https://mlmdb.herokuapp.com/api/get/urgentTrays');
          setUrgent(respurgent.data);
        }
        if (totalTraysCount.current > 0) {
          setHideTable(false);
        } else {
          setHideTable(true);
        }
      }
      fetchData();
      setCounter((prevCounter) => prevCounter + 1);
    }, 8000);

    return () => clearInterval(interval);
  }, [props.caseNum]);
  useEffect(() => {
    async function fetchData() {
      if (props.caseNum !== 'Urgent') {
        const response = await Axios.get(`https://mlmdb.herokuapp.com/api/get/traydata/${props.caseNum}`);
        totalTraysCount.current = 0;
        Object.entries(response.data).forEach(element => {
          totalTraysCount.current += element[1].length;
        });
        setOr1(response.data.or1);
        setOr2(response.data.or2);
        setOr3(response.data.or3);
        setOr4(response.data.or4);
        setOr5(response.data.or5);
        setOr6(response.data.or6);
        setOr7(response.data.or7);
        setOr8(response.data.or8);
        setOr9(response.data.or9);
        setOr10(response.data.or10);
        setOr11(response.data.or11);
        setOr12(response.data.or12);
        setOr13(response.data.or13);
        setOr14(response.data.or14);
        setOr15(response.data.or15);
        setOr16(response.data.or16);
        setOr17(response.data.or17);
        setOr18(response.data.or18);
        setOr19(response.data.or19);
        setOr20(response.data.or20);
        setOr21(response.data.or21);
        setOr22(response.data.or22);
        setOr23(response.data.or23);
        setOr24(response.data.or24);
        setOr25(response.data.or25);
        setOr26(response.data.or26);
        setOr27(response.data.or27);
        setOr28(response.data.or28);
        setOr29(response.data.or29);
        setOr30(response.data.or30);
        setOr31(response.data.or31);
        setOr32(response.data.or32);
      } else {
        const respurgent = await Axios.get('https://mlmdb.herokuapp.com/api/get/urgentTrays');
        setUrgent(respurgent.data);
      }
      if (totalTraysCount.current > 0) {
        setHideTable(false);
      } else {
        setHideTable(true);
      }
    }
    fetchData();
  }, [props.caseNum]);



  const ClickHandlers = {
    OffCanvasShow: (roomnum, newId, isUrgent) => {

      if (!isUrgent) {
        const room = arr_room[roomnum - 1];
        const entry = room.find(x => x.id === newId);
        setTargetEntry(entry); //for getting data and deleting
      } else {
        const entry = urgent.find(x => x.id === newId);
        setTargetEntry(entry); //for getting data and deleting
      }
      setCanvas(true);
    },
    OffCanvasClose: () => {
      setCanvas(false);
    },
    DeleteHandler: (newId, selectedRoom, isUrgent) => {
      if (!isUrgent) {
        Axios.delete(`https://mlmdb.herokuapp.com/api/delete/${newId}${props.caseNum}`).then(() => {
          const room = arr_room[selectedRoom - 1];
          let ccc = room.find(x => x.id === newId);
          if (ccc) {
            const aaa = room.indexOf(ccc.id)
            room.splice(aaa, 1);
            setlastadded((prevState) => !prevState);
          } else {
            console.log('Tray not found');
          }
        });
      } else {
        Axios.delete(`https://mlmdb.herokuapp.com/api/delete/urgent/${newId}`).then(() => {
          let ccc = urgent.find(x => x.id === newId);
          if (ccc) {
            const aaa = urgent.indexOf(ccc.id)
            urgent.splice(aaa, 1);
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
          fcasenum: props.caseNum,
          fisUrgent: false
        });
      } else {
        Axios.put('https://mlmdb.herokuapp.com/api/update/location', {
          fid: entryId,
          fcurrentLocation: newLocation,
          fcasenum: props.caseNum,
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
          fcasenum: props.caseNum,
          fisUrgent: false
        });
      } else {
        Axios.put('https://mlmdb.herokuapp.com/api/update/casecart', {
          fid: entryId,
          fcasecart: newCaseCart,
          fcasenum: props.caseNum,
          fisUrgent: true
        });
      }
      setlastadded((prevState) => !prevState);
    },
    UpdateTrayName: (newname, entryId) => {
      Axios.put('https://mlmdb.herokuapp.com/api/update/trayname', {
        fid: entryId,
        fname: newname
      });
      setlastadded((prevState) => !prevState);
    },
    UpdateNotes: (newNotes, entryId, isUrgent) => {
      if (!isUrgent) {
        Axios.put('https://mlmdb.herokuapp.com/api/update/notes', {
            fid: entryId,
            fnotes: newNotes,
            fcasenum: props.caseNum,
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

  return (
    <>
      <ViewerOffCanvas toshow={openCanvas} handlers={ClickHandlers} entrydata={targetEntry} />

      {urgent.length > 0 ?
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
            {urgent.map((info) => <ViewEntry key={info.id} room={info} isUrgent={true} canvascontroller={ClickHandlers} caseNum={props.caseNum} />)}
            {/* {urgenttrays.map((info) => <ViewEntry room={info} isUrgent={true} canvascontroller={this.props.canvascontroller} />)} */}
          </tbody>
        </Table>
        :
        null
      }

      {hideTable === true ? null :
        <Table bordered hover size="sm">
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
            {arr_room.map((info) => <ViewSectionRooms key={info.id} room={info} isUrgent={false} canvascontroller={ClickHandlers} caseNum={props.caseNum} />)}

          </tbody>
        </Table>
      }

    </>
  );

}

function ViewSectionRooms(props) {
  const [sectionColor, setsectionColor] = useState('');
  const [trays, setTrays] = useState([]);

  const randoColor = () => {
    const color = ['linen', 'peru', 'lemonchiffon', 'lightcyan', 'lightsteelblue', 'cornflowerblue', 'darkseagreen', 'darkseasalmon', 'lightgreen', 'lightslategray', 'paleturquoise',
      'plum', 'rosybrown', 'thistle', 'silver'];
    const val = Math.floor(Math.random() * (color.length));
    return color[val];
  };
  useEffect(() => {
    if (sectionColor === '') {
      setsectionColor(randoColor());
    }
  }, [sectionColor, props.selectedColor]);
  useEffect(() => {
    setTrays(props.room);
  }, [props.room]);

  return (
    <>
      {trays.map((info) => <ViewEntry key={info.id} room={info} isUrgent={false} canvascontroller={props.canvascontroller} caseNum={props.caseNum} selectedColor={sectionColor} />)}
    </>
  );

}

export default ViewTable;