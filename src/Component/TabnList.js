import React from 'react';
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './RoomCard';



class TabnList extends React.Component {
  state = { key: 'home' };



  render() {
    const urgentTrays = <RoomCard key={this.props.urgenttrays.id} roomNum={'Urgent Trays'} trayList={this.props.urgenttrays} buttonhandler={this.props.buttonhandler} />;
    const room1 = <RoomCard key={this.props.room1.id} roomNum={'OR 1'} trayList={this.props.room1} buttonhandler={this.props.buttonhandler} />;
    const room2 = <RoomCard key={this.props.room2.id} roomNum={'OR 2'} trayList={this.props.room2} buttonhandler={this.props.buttonhandler} />;
    const room3 = <RoomCard key={this.props.room3.id} roomNum={'OR 3'} trayList={this.props.room3} buttonhandler={this.props.buttonhandler} />;
    const room4 = <RoomCard key={this.props.room4.id} roomNum={'OR 4'} trayList={this.props.room4} buttonhandler={this.props.buttonhandler} />;
    const room5 = <RoomCard key={this.props.room5.id} roomNum={'OR 5'} trayList={this.props.room5} buttonhandler={this.props.buttonhandler} />;
    const room6 = <RoomCard key={this.props.room6.id} roomNum={'OR 6'} trayList={this.props.room6} buttonhandler={this.props.buttonhandler} />;
    const room7 = <RoomCard key={this.props.room7.id} roomNum={'OR 7'} trayList={this.props.room7} buttonhandler={this.props.buttonhandler} />;
    const room8 = <RoomCard key={this.props.room8.id} roomNum={'OR 8'} trayList={this.props.room8} buttonhandler={this.props.buttonhandler} />;
    const room9 = <RoomCard key={this.props.room9.id} roomNum={'OR 9'} trayList={this.props.room9} buttonhandler={this.props.buttonhandler} />;
    const room10 = <RoomCard key={this.props.room10.id} roomNum={'OR 10'} trayList={this.props.room10} buttonhandler={this.props.buttonhandler} />;

    const room11 = <RoomCard key={this.props.room11.id} roomNum={'OR 11'} trayList={this.props.room11} buttonhandler={this.props.buttonhandler} />;
    const room12 = <RoomCard key={this.props.room12.id} roomNum={'OR 12'} trayList={this.props.room12} buttonhandler={this.props.buttonhandler} />;
    const room13 = <RoomCard key={this.props.room13.id} roomNum={'OR 13'} trayList={this.props.room13} buttonhandler={this.props.buttonhandler} />;
    const room14 = <RoomCard key={this.props.room14.id} roomNum={'OR 14'} trayList={this.props.room14} buttonhandler={this.props.buttonhandler} />;
    const room15 = <RoomCard key={this.props.room15.id} roomNum={'OR 15'} trayList={this.props.room15} buttonhandler={this.props.buttonhandler} />;
    const room16 = <RoomCard key={this.props.room16.id} roomNum={'OR 16'} trayList={this.props.room16} buttonhandler={this.props.buttonhandler} />;
    const room17 = <RoomCard key={this.props.room17.id} roomNum={'OR 17'} trayList={this.props.room17} buttonhandler={this.props.buttonhandler} />;
    const room18 = <RoomCard key={this.props.room18.id} roomNum={'OR 18'} trayList={this.props.room18} buttonhandler={this.props.buttonhandler} />;
    const room19 = <RoomCard key={this.props.room19.id} roomNum={'OR 19'} trayList={this.props.room19} buttonhandler={this.props.buttonhandler} />;
    const room20 = <RoomCard key={this.props.room20.id} roomNum={'OR 20'} trayList={this.props.room20} buttonhandler={this.props.buttonhandler} />;

    const room21 = <RoomCard key={this.props.room21.id} roomNum={'OR 21'} trayList={this.props.room21} buttonhandler={this.props.buttonhandler} />;
    const room22 = <RoomCard key={this.props.room22.id} roomNum={'OR 22'} trayList={this.props.room22} buttonhandler={this.props.buttonhandler} />;
    const room23 = <RoomCard key={this.props.room23.id} roomNum={'OR 23'} trayList={this.props.room23} buttonhandler={this.props.buttonhandler} />;
    const room24 = <RoomCard key={this.props.room24.id} roomNum={'OR 24'} trayList={this.props.room24} buttonhandler={this.props.buttonhandler} />;
    const room25 = <RoomCard key={this.props.room25.id} roomNum={'OR 25'} trayList={this.props.room25} buttonhandler={this.props.buttonhandler} />;
    const room26 = <RoomCard key={this.props.room26.id} roomNum={'OR 26'} trayList={this.props.room26} buttonhandler={this.props.buttonhandler} />;
    const room27 = <RoomCard key={this.props.room27.id} roomNum={'OR 27'} trayList={this.props.room27} buttonhandler={this.props.buttonhandler} />;
    const room28 = <RoomCard key={this.props.room28.id} roomNum={'OR 28'} trayList={this.props.room28} buttonhandler={this.props.buttonhandler} />;
    const room29 = <RoomCard key={this.props.room29.id} roomNum={'OR 29'} trayList={this.props.room29} buttonhandler={this.props.buttonhandler} />;
    const room30 = <RoomCard key={this.props.room30.id} roomNum={'OR 30'} trayList={this.props.room30} buttonhandler={this.props.buttonhandler} />;

    const room31 = <RoomCard key={this.props.room31.id} roomNum={'OR 31'} trayList={this.props.room31} buttonhandler={this.props.buttonhandler} />;
    const room32 = <RoomCard key={this.props.room32.id} roomNum={'OR 32'} trayList={this.props.room32} buttonhandler={this.props.buttonhandler} />;


    return (

      <Tabs
        activeKey={this.state.key}
        onSelect={(k) => this.setState({ key: k })}
        className="mb-3 tabs"
      >
        <Tab eventKey="first" title="First Cases">
          {
            <>
              <Container>
                <Row>
                  {/* {this.props.urgenttrays.length > 0 ? <Col md='6'> {urgentTrays}</Col> : null}
                  {this.props.room1.length > 0 ? <Col md='6'> {room1}</Col> : null}
                  {this.props.room2.length > 0 ? <Col md='6'> {room2}</Col> : null}
                  {this.props.room3.length > 0 ? <Col md='6'> {room3}</Col> : null}
                  {this.props.room4.length > 0 ? <Col md='6'> {room4}</Col> : null}
                  {this.props.room5.length > 0 ? <Col md='6'> {room5}</Col> : null}
                  {this.props.room6.length > 0 ? <Col md='6'> {room6}</Col> : null}
                  {this.props.room7.length > 0 ? <Col md='6'> {room7}</Col> : null}
                  {this.props.room8.length > 0 ? <Col md='6'> {room8}</Col> : null}
                  {this.props.room9.length > 0 ? <Col md='6'> {room9}</Col> : null}
                  {this.props.room10.length > 0 ? <Col md='6'> {room10}</Col> : null}

                  {this.props.room11.length > 0 ? <Col md='6'> {room11}</Col> : null}
                  {this.props.room12.length > 0 ? <Col md='6'> {room12}</Col> : null}
                  {this.props.room13.length > 0 ? <Col md='6'> {room13}</Col> : null}
                  {this.props.room14.length > 0 ? <Col md='6'> {room14}</Col> : null}
                  {this.props.room15.length > 0 ? <Col md='6'> {room15}</Col> : null}
                  {this.props.room16.length > 0 ? <Col md='6'> {room16}</Col> : null}
                  {this.props.room17.length > 0 ? <Col md='6'> {room17}</Col> : null}
                  {this.props.room18.length > 0 ? <Col md='6'> {room18}</Col> : null}
                  {this.props.room19.length > 0 ? <Col md='6'> {room19}</Col> : null}
                  {this.props.room20.length > 0 ? <Col md='6'> {room20}</Col> : null}

                  {this.props.room21.length > 0 ? <Col md='6'> {room21}</Col> : null}
                  {this.props.room22.length > 0 ? <Col md='6'> {room22}</Col> : null}
                  {this.props.room23.length > 0 ? <Col md='6'> {room23}</Col> : null}
                  {this.props.room24.length > 0 ? <Col md='6'> {room24}</Col> : null}
                  {this.props.room25.length > 0 ? <Col md='6'> {room25}</Col> : null}
                  {this.props.room26.length > 0 ? <Col md='6'> {room26}</Col> : null}
                  {this.props.room27.length > 0 ? <Col md='6'> {room27}</Col> : null}
                  {this.props.room28.length > 0 ? <Col md='6'> {room28}</Col> : null}
                  {this.props.room29.length > 0 ? <Col md='6'> {room29}</Col> : null}
                  {this.props.room30.length > 0 ? <Col md='6'> {room30}</Col> : null}

                  {this.props.room31.length > 0 ? <Col md='6'> {room31}</Col> : null}
                  {this.props.room32.length > 0 ? <Col md='6'> {room32}</Col> : null} */}
                  <RoomTableItems rooms={[room1, room2, room3, room4, room5, room6, room7, room8, room9, room10,
                    room11, room12, room13, room14, room15, room16, room17, room18, room19, room20,
                    room21, room22, room23, room24, room25, room26, room27, room28, room29, room30, room31, room32, urgentTrays]} 
                    roomsdata={[this.props.room1, this.props.room2, this.props.room3, this.props.room4, this.props.room5, 
                      this.props.room6, this.props.room7, this.props.room8, this.props.room9, this.props.room10,
                      this.props.room11, this.props.room12, this.props.room13, this.props.room14, this.props.room15, 
                      this.props.room16, this.props.room17, this.props.room18, this.props.room19, this.props.room20,
                      this.props.room21,this.props.room22, this.props.room23, this.props.this.props.room24, room25, 
                      this.props.room26, this.props.room27, this.props.room28, this.props.room29, this.props.room30, 
                      this.props.room31, this.props.room32, this.props.urgenttrays]} />
                </Row>

              </Container>

            </>


          }
        </Tab>
        <Tab eventKey="second" title="Second Cases">
          <h2 className='trayLocation'>This feature is coming soon..</h2>
        </Tab>
        <Tab eventKey="third" title="Third Cases">
          <h2 className='trayLocation'>This feature is coming soon..</h2>
        </Tab>
        <Tab eventKey="fourth" title="Fourth++ Cases">
          <h2 className='trayLocation'>This feature is coming soon..</h2>
        </Tab>
      </Tabs>
    );

  }

}

function RoomTableItems(props) {

  return (
    <>
      {props.roomsdata[34].length > 0 ? <Col md='6'> {props.rooms[34]}</Col> : null}
      {props.roomsdata[0].length > 0 ? <Col md='6'> {props.rooms[0]}</Col> : null}
      {props.roomsdata[1].length > 0 ? <Col md='6'> {props.rooms[1]}</Col> : null}
      {props.roomsdata[2].length > 0 ? <Col md='6'> {props.rooms[2]}</Col> : null}
      {props.roomsdata[3].length > 0 ? <Col md='6'> {props.rooms[3]}</Col> : null}
      {props.roomsdata[4].length > 0 ? <Col md='6'> {props.rooms[4]}</Col> : null}
      {props.roomsdata[7].length > 0 ? <Col md='6'> {props.rooms[7]}</Col> : null}
      {props.roomsdata[8].length > 0 ? <Col md='6'> {props.rooms[8]}</Col> : null}
      {props.roomsdata[9].length > 0 ? <Col md='6'> {props.rooms[9]}</Col> : null}
      {props.roomsdata[10].length > 0 ? <Col md='6'> {props.rooms[10]}</Col> : null}
      {props.roomsdata[11].length > 0 ? <Col md='6'> {props.rooms[11]}</Col> : null}

      {props.roomsdata[12].length > 0 ? <Col md='6'> {props.rooms[12]}</Col> : null}
      {props.roomsdata[13].length > 0 ? <Col md='6'> {props.rooms[13]}</Col> : null}
      {props.roomsdata[14].length > 0 ? <Col md='6'> {props.rooms[14]}</Col> : null}
      {props.roomsdata[15].length > 0 ? <Col md='6'> {props.rooms[15]}</Col> : null}
      {props.roomsdata[16].length > 0 ? <Col md='6'> {props.rooms[16]}</Col> : null}
      {props.roomsdata[17].length > 0 ? <Col md='6'> {props.rooms[17]}</Col> : null}
      {props.roomsdata[18].length > 0 ? <Col md='6'> {props.rooms[18]}</Col> : null}
      {props.roomsdata[19].length > 0 ? <Col md='6'> {props.rooms[19]}</Col> : null}
      {props.roomsdata[20].length > 0 ? <Col md='6'> {props.rooms[20]}</Col> : null}
      {props.roomsdata[21].length > 0 ? <Col md='6'> {props.rooms[21]}</Col> : null}

      {props.roomsdata[22].length > 0 ? <Col md='6'> {props.rooms[22]}</Col> : null}
      {props.roomsdata[23].length > 0 ? <Col md='6'> {props.rooms[23]}</Col> : null}
      {props.roomsdata[24].length > 0 ? <Col md='6'> {props.rooms[24]}</Col> : null}
      {props.roomsdata[25].length > 0 ? <Col md='6'> {props.rooms[25]}</Col> : null}
      {props.roomsdata[26].length > 0 ? <Col md='6'> {props.rooms[26]}</Col> : null}
      {props.roomsdata[27].length > 0 ? <Col md='6'> {props.rooms[27]}</Col> : null}
      {props.roomsdata[28].length > 0 ? <Col md='6'> {props.rooms[28]}</Col> : null}
      {props.roomsdata[29].length > 0 ? <Col md='6'> {props.rooms[29]}</Col> : null}
      {props.roomsdata[30].length > 0 ? <Col md='6'> {props.rooms[30]}</Col> : null}
      {props.roomsdata[31].length > 0 ? <Col md='6'> {props.rooms[31]}</Col> : null}

      {props.roomsdata[32].length > 0 ? <Col md='6'> {props.rooms[32]}</Col> : null}
      {props.roomsdata[33].length > 0 ? <Col md='6'> {props.rooms[33]}</Col> : null}
    </>
  );
}

export default TabnList;