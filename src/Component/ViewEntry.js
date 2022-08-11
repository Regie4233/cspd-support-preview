import react from 'react';

class ViewEntry extends react.Component {




    render() {

        return (
            <>
                {this.props.isUrgent === true ?
                    <tr className='urgentAlert' onClick={() => this.props.canvascontroller.OffCanvasShow(this.props.room.roomnum, this.props.room.id, this.props.isUrgent)}>
                        <td>OR {this.props.room.roomnum} URGENT TRAY</td>
                        <td>{this.props.room.trayname}</td>
                        <td>{this.props.room.currentLocation}</td>
                        <td>{this.props.room.casecartnum}</td>
                        <td>- -</td>
                    </tr>



                    :
                    <tr onClick={() =>this.props.canvascontroller.OffCanvasShow(this.props.room.roomnum, this.props.room.id, this.props.isUrgent)}>
                        <td>OR {this.props.room.roomnum}</td>
                        <td>{this.props.room.trayname}</td>
                        <td>{this.props.room.currentLocation}</td>
                        <td>{this.props.room.casecartnum}</td>
                        <td>- -</td>
                    </tr>


                }
                
            </>
        );
    }
}

export default ViewEntry;