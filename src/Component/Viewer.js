import 'bootstrap/dist/css/bootstrap.min.css';
import ViewTable from './ViewTable';

function Viewer() {

    
    return (
        <>
            <div className='mainForm'>
                    <ViewTable key={1} caseNum={1}/>
                    <ViewTable key={2} caseNum={2}/>
                    <ViewTable key={3} caseNum={3}/>
                    <ViewTable key={4} caseNum={4}/>
            </div>
        </>
    );
}
export default Viewer;
