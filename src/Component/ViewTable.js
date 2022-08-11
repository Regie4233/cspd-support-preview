import Table from 'react-bootstrap/Table';
import ViewEntry from './ViewEntry';
import react from 'react';

class ViewTable extends react.Component {

  render() {


    return (
      <>
        {this.props.urgenttrays.length > 0 ?
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
              {this.props.urgenttrays.map((info) => <ViewEntry room={info} isUrgent={true} canvascontroller={this.props.canvascontroller}/>)}
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
            {this.props.room1.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room2.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room3.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room4.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room5.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room6.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room7.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room8.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room9.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room10.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room11.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room12.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room13.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room14.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room15.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room16.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room17.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room18.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room19.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room20.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room21.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room22.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room23.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room24.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room25.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room26.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room27.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room28.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room29.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room30.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room31.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
            {this.props.room32.map((info) => <ViewEntry room={info} isUrgent={false} canvascontroller={this.props.canvascontroller}/>)}
          </tbody>
        </Table>

      </>
    );
  }
}

export default ViewTable;