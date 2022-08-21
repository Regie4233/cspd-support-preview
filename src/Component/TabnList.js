import React from 'react';
import { Container, Col, Row, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomCard from './RoomCard';



class TabnList extends React.Component {
 state = { key: 'first' };



  render() {
    //console.log(this.state.key);
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

    
    const arr_rooms = [{roomnumber: room1, data: this.props.room1}, {roomnumber: room2, data: this.props.room2}, {roomnumber: room3, data: this.props.room3},
      {roomnumber: room4, data: this.props.room4}, {roomnumber: room5, data: this.props.room5}, {roomnumber: room6, data: this.props.room6} ,
      {roomnumber: room7, data: this.props.room7}, 
      {roomnumber: room8, data: this.props.room8}, {roomnumber: room9, data: this.props.room9}, {roomnumber: room10, data: this.props.room10},
      {roomnumber: room11, data: this.props.room11}, {roomnumber: room12, data: this.props.room12}, {roomnumber: room13, data: this.props.room13}, 
      {roomnumber: room14, data: this.props.room14}, {roomnumber: room15, data: this.props.room15}, {roomnumber: room16, data: this.props.room16},
       {roomnumber: room17, data: this.props.room17}, {roomnumber: room18, data: this.props.room18}, {roomnumber: room19, data: this.props.room19}, 
       {roomnumber: room20, data: this.props.room20},
      {roomnumber: room21, data: this.props.room21}, {roomnumber: room22, data: this.props.room22}, {roomnumber: room23, data: this.props.room23}, 
      {roomnumber: room24, data: this.props.room24}, {roomnumber: room25, data: this.props.room25}, {roomnumber: room26, data: this.props.room26}, 
      {roomnumber: room27, data: this.props.room27}, {roomnumber: room28, data: this.props.room28}, {roomnumber: room29, data: this.props.room29}, 
      {roomnumber: room30, data: this.props.room30}, {roomnumber: room31, data: this.props.room31}, {roomnumber: room32, data: this.props.room32}];



    return (

      <Tabs
        activeKey={this.state.key}
        //onSelect={((k) =>console.log(k))}
        //defaultActiveKey='first'
        onSelect={(k) => this.setState({ key: k }, this.props.changecasenumber(this.state.key))}
        className="mb-3 tabs"
      >
        <Tab eventKey='first' title="First Cases">
          {
            <>
              <Container>
                <Row>
                  {
                    arr_rooms.map((value) => value.data.length > 0 ? <Col md='6'> {value.roomnumber}</Col> : null)

                  }



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

                </Row>

              </Container>

            </>


          }
        </Tab>
        <Tab eventKey='second' title="Second Cases">
          <h2 className='trayLocation'>This feature is coming soon..</h2>
        </Tab>
        <Tab eventKey='third' title="Third Cases">
          <h2 className='trayLocation'>This feature is coming soon..</h2>
        </Tab>
        <Tab eventKey='fourth' title="Fourth++ Cases">
          <h2 className='trayLocation'>This feature is coming soon..</h2>
        </Tab>
      </Tabs>
    );

  }

}



export default TabnList;