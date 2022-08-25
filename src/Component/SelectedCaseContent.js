import React, {useEffect, useState} from 'react';
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './RoomCard';
import Axios from 'axios';


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
    const [traydata, settraydata] = useState([]);

    const [caseNum, setcaseNum] = useState('');

    const [counter, setCounter] = useState(0);

    const urgentTrays = <RoomCard key={urgent.id} roomNum={'Urgent Trays'} trayList={this.state.urgenttrays} buttonhandler={this.state.buttonhandler} />;
    const roomComp1 = <RoomCard key={rm1.id} roomNum={'OR 1'} trayList={rm1} buttonhandler={this.state.buttonhandler} />;
    const roomComp2 = <RoomCard key={rm2.id} roomNum={'OR 2'} trayList={rm2} buttonhandler={this.state.buttonhandler} />;
    const roomComp3 = <RoomCard key={rm3.id} roomNum={'OR 3'} trayList={rm3} buttonhandler={this.state.buttonhandler} />;
    const roomComp4 = <RoomCard key={rm4.id} roomNum={'OR 4'} trayList={rm4} buttonhandler={this.state.buttonhandler} />;
    const roomComp5 = <RoomCard key={rm5.id} roomNum={'OR 5'} trayList={rm5} buttonhandler={this.state.buttonhandler} />;
    const roomComp6 = <RoomCard key={rm6.id} roomNum={'OR 6'} trayList={rm6} buttonhandler={this.state.buttonhandler} />;
    const roomComp7 = <RoomCard key={rm7.id} roomNum={'OR 7'} trayList={rm7} buttonhandler={this.state.buttonhandler} />;
    const roomComp8 = <RoomCard key={rm8.id} roomNum={'OR 8'} trayList={rm8} buttonhandler={this.state.buttonhandler} />;
    const roomComp9 = <RoomCard key={rm9.id} roomNum={'OR 9'} trayList={rm9} buttonhandler={this.state.buttonhandler} />;
    const roomComp10 = <RoomCard key={rm10.id} roomNum={'OR 10'} trayList={rm10} buttonhandler={this.state.buttonhandler} />;

    const roomComp11 = <RoomCard key={rm11.id} roomNum={'OR 11'} trayList={rm11} buttonhandler={this.state.buttonhandler} />;
    const roomComp12 = <RoomCard key={rm12.id} roomNum={'OR 12'} trayList={rm12} buttonhandler={this.state.buttonhandler} />;
    const roomComp13 = <RoomCard key={rm13.id} roomNum={'OR 13'} trayList={rm13} buttonhandler={this.state.buttonhandler} />;
    const roomComp14 = <RoomCard key={rm14.id} roomNum={'OR 14'} trayList={rm14} buttonhandler={this.state.buttonhandler} />;
    const roomComp15 = <RoomCard key={rm15.id} roomNum={'OR 15'} trayList={rm15} buttonhandler={this.state.buttonhandler} />;
    const roomComp16 = <RoomCard key={rm16.id} roomNum={'OR 16'} trayList={rm16} buttonhandler={this.state.buttonhandler} />;
    const roomComp17 = <RoomCard key={rm17.id} roomNum={'OR 17'} trayList={rm17} buttonhandler={this.state.buttonhandler} />;
    const roomComp18 = <RoomCard key={rm18.id} roomNum={'OR 18'} trayList={rm18} buttonhandler={this.state.buttonhandler} />;
    const roomComp19 = <RoomCard key={rm19.id} roomNum={'OR 19'} trayList={rm19} buttonhandler={this.state.buttonhandler} />;
    const roomComp20 = <RoomCard key={rm20.id} roomNum={'OR 20'} trayList={rm20} buttonhandler={this.state.buttonhandler} />;

    const roomComp21 = <RoomCard key={rm21.id} roomNum={'OR 21'} trayList={rm21} buttonhandler={this.state.buttonhandler} />;
    const roomComp22 = <RoomCard key={rm22.id} roomNum={'OR 22'} trayList={rm22} buttonhandler={this.state.buttonhandler} />;
    const roomComp23 = <RoomCard key={rm23.id} roomNum={'OR 23'} trayList={rm23} buttonhandler={this.state.buttonhandler} />;
    const roomComp24 = <RoomCard key={rm24.id} roomNum={'OR 24'} trayList={rm24} buttonhandler={this.state.buttonhandler} />;
    const roomComp25 = <RoomCard key={rm25.id} roomNum={'OR 25'} trayList={rm25} buttonhandler={this.state.buttonhandler} />;
    const roomComp26 = <RoomCard key={rm26.id} roomNum={'OR 26'} trayList={rm26} buttonhandler={this.state.buttonhandler} />;
    const roomComp27 = <RoomCard key={rm27.id} roomNum={'OR 27'} trayList={rm27} buttonhandler={this.state.buttonhandler} />;
    const roomComp28 = <RoomCard key={rm28.id} roomNum={'OR 28'} trayList={rm28} buttonhandler={this.state.buttonhandler} />;
    const roomComp29 = <RoomCard key={rm29.id} roomNum={'OR 29'} trayList={rm29} buttonhandler={this.state.buttonhandler} />;
    const roomComp30 = <RoomCard key={rm30.id} roomNum={'OR 30'} trayList={rm30} buttonhandler={this.state.buttonhandler} />;

    const roomComp31 = <RoomCard key={rm31.id} roomNum={'OR 31'} trayList={rm31} buttonhandler={this.state.buttonhandler} />;
    const roomComp32 = <RoomCard key={rm32.id} roomNum={'OR 32'} trayList={rm32} buttonhandler={this.state.buttonhandler} />;

    async function fetchData() {
        const response = await Axios.get('https://mlmdb.herokuapp.com/api/get/traydata', {fcasenum: caseNum});
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
  
  
    const arr_rooms = [{ roomnumber: roomComp1, data: rm1 }, { roomnumber: roomComp2, data: rm2 }, { roomnumber: roomComp3, data: rm3 },
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
        <Tabs
        activeKey={this.state.key}
        //onSelect={((k) =>console.log(k))}
        //defaultActiveKey='first'
        onSelect={(k) => this.setState({ key: k }, this.state.changecasenumber(k))}
        className="mb-3 tabs"
      >
        <Tab eventKey='1' title="First Cases">
              <Container>
                <Row>
                  {
                    arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)
                  }
                </Row>
              </Container>
        </Tab>
        <Tab eventKey='2' title="Second Cases">
          <h2 className='trayLocation'>This feature is coming soon..2</h2>
        </Tab>
        <Tab eventKey='3' title="Third Cases">
          <h2 className='trayLocation'>This feature is coming soon..3</h2>
        </Tab>
        <Tab eventKey='4' title="Fourth++ Cases">
          <h2 className='trayLocation'>This feature is coming soon..4</h2>
        </Tab>
      </Tabs>
        </>
    );
}
export default SelectedCaseContent;