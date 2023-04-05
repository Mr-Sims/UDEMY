import { useParams, Link } from 'react-router-dom';

const EventDetailPage = () => {
    const params = useParams();


    return (
        <>
            <h1>This is the event details page of {params.eventId}!</h1>
            <p><Link to='edit'>Edit</Link></p>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    );
};

export default EventDetailPage;