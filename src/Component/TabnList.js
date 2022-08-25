import React from 'react';
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './RoomCard';



class TabnList extends React.Component {
  state = {
    key: '1', room1: [], room2: [], room3: [], room4: [], room5: [], room6: [], room7: [], room8: [], room9: [], room10: [],
    room11: [], room12: [], room13: [], room14: [], room15: [], room16: [], room17: [], room18: [], room19: [], room20: [],
    room21: [], room22: [], room23: [], room24: [], room25: [], room26: [], room27: [], room28: [], room29: [], room30: [],
    room31: [], room32: [], urgenttrays: []
  };

  

  render() {
    const urgentTrays = <RoomCard key={this.state.urgenttrays.id} roomNum={'Urgent Trays'} trayList={this.state.urgenttrays} buttonhandler={this.state.buttonhandler} />;
    const room1 = <RoomCard key={this.state.room1.id} roomNum={'OR 1'} trayList={this.state.room1} buttonhandler={this.state.buttonhandler} />;
    const room2 = <RoomCard key={this.state.room2.id} roomNum={'OR 2'} trayList={this.state.room2} buttonhandler={this.state.buttonhandler} />;
    const room3 = <RoomCard key={this.state.room3.id} roomNum={'OR 3'} trayList={this.state.room3} buttonhandler={this.state.buttonhandler} />;
    const room4 = <RoomCard key={this.state.room4.id} roomNum={'OR 4'} trayList={this.state.room4} buttonhandler={this.state.buttonhandler} />;
    const room5 = <RoomCard key={this.state.room5.id} roomNum={'OR 5'} trayList={this.state.room5} buttonhandler={this.state.buttonhandler} />;
    const room6 = <RoomCard key={this.state.room6.id} roomNum={'OR 6'} trayList={this.state.room6} buttonhandler={this.state.buttonhandler} />;
    const room7 = <RoomCard key={this.state.room7.id} roomNum={'OR 7'} trayList={this.state.room7} buttonhandler={this.state.buttonhandler} />;
    const room8 = <RoomCard key={this.state.room8.id} roomNum={'OR 8'} trayList={this.state.room8} buttonhandler={this.state.buttonhandler} />;
    const room9 = <RoomCard key={this.state.room9.id} roomNum={'OR 9'} trayList={this.state.room9} buttonhandler={this.state.buttonhandler} />;
    const room10 = <RoomCard key={this.state.room10.id} roomNum={'OR 10'} trayList={this.state.room10} buttonhandler={this.state.buttonhandler} />;

    const room11 = <RoomCard key={this.state.room11.id} roomNum={'OR 11'} trayList={this.state.room11} buttonhandler={this.state.buttonhandler} />;
    const room12 = <RoomCard key={this.state.room12.id} roomNum={'OR 12'} trayList={this.state.room12} buttonhandler={this.state.buttonhandler} />;
    const room13 = <RoomCard key={this.state.room13.id} roomNum={'OR 13'} trayList={this.state.room13} buttonhandler={this.state.buttonhandler} />;
    const room14 = <RoomCard key={this.state.room14.id} roomNum={'OR 14'} trayList={this.state.room14} buttonhandler={this.state.buttonhandler} />;
    const room15 = <RoomCard key={this.state.room15.id} roomNum={'OR 15'} trayList={this.state.room15} buttonhandler={this.state.buttonhandler} />;
    const room16 = <RoomCard key={this.state.room16.id} roomNum={'OR 16'} trayList={this.state.room16} buttonhandler={this.state.buttonhandler} />;
    const room17 = <RoomCard key={this.state.room17.id} roomNum={'OR 17'} trayList={this.state.room17} buttonhandler={this.state.buttonhandler} />;
    const room18 = <RoomCard key={this.state.room18.id} roomNum={'OR 18'} trayList={this.state.room18} buttonhandler={this.state.buttonhandler} />;
    const room19 = <RoomCard key={this.state.room19.id} roomNum={'OR 19'} trayList={this.state.room19} buttonhandler={this.state.buttonhandler} />;
    const room20 = <RoomCard key={this.state.room20.id} roomNum={'OR 20'} trayList={this.state.room20} buttonhandler={this.state.buttonhandler} />;

    const room21 = <RoomCard key={this.state.room21.id} roomNum={'OR 21'} trayList={this.state.room21} buttonhandler={this.state.buttonhandler} />;
    const room22 = <RoomCard key={this.state.room22.id} roomNum={'OR 22'} trayList={this.state.room22} buttonhandler={this.state.buttonhandler} />;
    const room23 = <RoomCard key={this.state.room23.id} roomNum={'OR 23'} trayList={this.state.room23} buttonhandler={this.state.buttonhandler} />;
    const room24 = <RoomCard key={this.state.room24.id} roomNum={'OR 24'} trayList={this.state.room24} buttonhandler={this.state.buttonhandler} />;
    const room25 = <RoomCard key={this.state.room25.id} roomNum={'OR 25'} trayList={this.state.room25} buttonhandler={this.state.buttonhandler} />;
    const room26 = <RoomCard key={this.state.room26.id} roomNum={'OR 26'} trayList={this.state.room26} buttonhandler={this.state.buttonhandler} />;
    const room27 = <RoomCard key={this.state.room27.id} roomNum={'OR 27'} trayList={this.state.room27} buttonhandler={this.state.buttonhandler} />;
    const room28 = <RoomCard key={this.state.room28.id} roomNum={'OR 28'} trayList={this.state.room28} buttonhandler={this.state.buttonhandler} />;
    const room29 = <RoomCard key={this.state.room29.id} roomNum={'OR 29'} trayList={this.state.room29} buttonhandler={this.state.buttonhandler} />;
    const room30 = <RoomCard key={this.state.room30.id} roomNum={'OR 30'} trayList={this.state.room30} buttonhandler={this.state.buttonhandler} />;

    const room31 = <RoomCard key={this.state.room31.id} roomNum={'OR 31'} trayList={this.state.room31} buttonhandler={this.state.buttonhandler} />;
    const room32 = <RoomCard key={this.state.room32.id} roomNum={'OR 32'} trayList={this.state.room32} buttonhandler={this.state.buttonhandler} />;

    async function fetchData() {
      const response = await Axios.get('https://mlmdb.herokuapp.com/api/get/traydata', { fcasenum: caseNum });
      this.setState({room1: response.data.or1, room2: response.data.or2, room3: response.data.or3, room4: response.data.or4, room5: response.data.or5,
        room6: response.data.or6, room7: response.data.or7, room8: response.data.or8, room9: response.data.or9, room10: response.data.or10, 
        room11: response.data.or11, room12: response.data.or12, room13: response.data.or13, room14: response.data.or14, room15: response.data.or15,
        room16: response.data.or16, room17: response.data.or17, room18: response.data.or18, room19: response.data.or19, room20: response.data.or20,
        room21: response.data.or21, room22: response.data.or22, room23: response.data.or23, room24: response.data.or24, room25: response.data.or25,
        room26: response.data.or26, room27: response.data.or27, room28: response.data.or28, room29: response.data.or29, room30: response.data.or30,
        room31: response.data.or31, room32: response.data.or32});
      console.log("fetch");
    }
  
    const arr_rooms = [{ roomnumber: room1, data: this.state.room1 }, { roomnumber: room2, data: this.state.room2 }, { roomnumber: room3, data: this.state.room3 },
    { roomnumber: room4, data: this.state.room4 }, { roomnumber: room5, data: this.state.room5 }, { roomnumber: room6, data: this.state.room6 },
    { roomnumber: room7, data: this.state.room7 },
    { roomnumber: room8, data: this.state.room8 }, { roomnumber: room9, data: this.state.room9 }, { roomnumber: room10, data: this.state.room10 },
    { roomnumber: room11, data: this.state.room11 }, { roomnumber: room12, data: this.state.room12 }, { roomnumber: room13, data: this.state.room13 },
    { roomnumber: room14, data: this.state.room14 }, { roomnumber: room15, data: this.state.room15 }, { roomnumber: room16, data: this.state.room16 },
    { roomnumber: room17, data: this.state.room17 }, { roomnumber: room18, data: this.state.room18 }, { roomnumber: room19, data: this.state.room19 },
    { roomnumber: room20, data: this.state.room20 },
    { roomnumber: room21, data: this.state.room21 }, { roomnumber: room22, data: this.state.room22 }, { roomnumber: room23, data: this.state.room23 },
    { roomnumber: room24, data: this.state.room24 }, { roomnumber: room25, data: this.state.room25 }, { roomnumber: room26, data: this.state.room26 },
    { roomnumber: room27, data: this.state.room27 }, { roomnumber: room28, data: this.state.room28 }, { roomnumber: room29, data: this.state.room29 },
    { roomnumber: room30, data: this.state.room30 }, { roomnumber: room31, data: this.state.room31 }, { roomnumber: room32, data: this.state.room32 }];

    fetchData();

    return (

      <Tabs
        activeKey={this.state.key}
        //onSelect={((k) =>console.log(k))}
        //defaultActiveKey='first'
        onSelect={(k) => this.setState({ key: k }, this.state.changecasenumber(k))}
        className="mb-3 tabs"
      >
        <Tab eventKey='1' title="First Cases">
          {
            <>
              <Container>
                <Row>
                  {
                    arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)

                  }



                  {/* {this.state.urgenttrays.length > 0 ? <Col md='6'> {urgentTrays}</Col> : null}
                  {this.state.room1.length > 0 ? <Col md='6'> {room1}</Col> : null}
                  {this.state.room2.length > 0 ? <Col md='6'> {room2}</Col> : null}
                  {this.state.room3.length > 0 ? <Col md='6'> {room3}</Col> : null}
                  {this.state.room4.length > 0 ? <Col md='6'> {room4}</Col> : null}
                  {this.state.room5.length > 0 ? <Col md='6'> {room5}</Col> : null}
                  {this.state.room6.length > 0 ? <Col md='6'> {room6}</Col> : null}
                  {this.state.room7.length > 0 ? <Col md='6'> {room7}</Col> : null}
                  {this.state.room8.length > 0 ? <Col md='6'> {room8}</Col> : null}
                  {this.state.room9.length > 0 ? <Col md='6'> {room9}</Col> : null}
                  {this.state.room10.length > 0 ? <Col md='6'> {room10}</Col> : null}

                  {this.state.room11.length > 0 ? <Col md='6'> {room11}</Col> : null}
                  {this.state.room12.length > 0 ? <Col md='6'> {room12}</Col> : null}
                  {this.state.room13.length > 0 ? <Col md='6'> {room13}</Col> : null}
                  {this.state.room14.length > 0 ? <Col md='6'> {room14}</Col> : null}
                  {this.state.room15.length > 0 ? <Col md='6'> {room15}</Col> : null}
                  {this.state.room16.length > 0 ? <Col md='6'> {room16}</Col> : null}
                  {this.state.room17.length > 0 ? <Col md='6'> {room17}</Col> : null}
                  {this.state.room18.length > 0 ? <Col md='6'> {room18}</Col> : null}
                  {this.state.room19.length > 0 ? <Col md='6'> {room19}</Col> : null}
                  {this.state.room20.length > 0 ? <Col md='6'> {room20}</Col> : null}

                  {this.state.room21.length > 0 ? <Col md='6'> {room21}</Col> : null}
                  {this.state.room22.length > 0 ? <Col md='6'> {room22}</Col> : null}
                  {this.state.room23.length > 0 ? <Col md='6'> {room23}</Col> : null}
                  {this.state.room24.length > 0 ? <Col md='6'> {room24}</Col> : null}
                  {this.state.room25.length > 0 ? <Col md='6'> {room25}</Col> : null}
                  {this.state.room26.length > 0 ? <Col md='6'> {room26}</Col> : null}
                  {this.state.room27.length > 0 ? <Col md='6'> {room27}</Col> : null}
                  {this.state.room28.length > 0 ? <Col md='6'> {room28}</Col> : null}
                  {this.state.room29.length > 0 ? <Col md='6'> {room29}</Col> : null}
                  {this.state.room30.length > 0 ? <Col md='6'> {room30}</Col> : null}

                  {this.state.room31.length > 0 ? <Col md='6'> {room31}</Col> : null}
                  {this.state.room32.length > 0 ? <Col md='6'> {room32}</Col> : null} */}

                </Row>

              </Container>

            </>


          }
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
    );

  }

}



export default TabnList;