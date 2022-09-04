import 'bootstrap/dist/css/bootstrap.min.css';
import ViewTable from './ViewTable';

function Viewer() {


    return (
        <>
            <div className='mainForm'>
                <ViewTable key={0} caseNum={'Urgent'} />
                <ViewTable key={1} caseNum={1} />
                <ViewTable key={2} caseNum={2} />
                <ViewTable key={3} caseNum={3} />
                <ViewTable key={4} caseNum={4} />
                <ViewTable key={5} caseNum={5} />
                <ViewTable key={6} caseNum={6} />
            </div>
        </>
    );
}
export default Viewer;
