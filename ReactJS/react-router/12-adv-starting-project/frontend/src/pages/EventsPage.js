import { Link } from 'react-router-dom';
const DUMMY_EVENTS = [
    { id: 'event1', title: 'event 1' },
    { id: 'event2', title: 'event 2' },
    { id: 'event3', title: 'event 3' },
    { id: 'event4', title: 'event 4' },
]

const EventsPage = () => {

    return (
        <>
            <h1>EVENTS PAGE</h1>
            {DUMMY_EVENTS.map(e => <li key={e.id}><Link to={e.id}>{e.title}</Link></li>)}
        </>
    );
};

export default EventsPage;

