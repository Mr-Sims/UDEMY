import { useParams, Link } from 'react-router-dom';

const EditEventPage = () => {

    const params = useParams();

    return (
        <>
            <h1>Edit page of {params.eventId}</h1>
            <p><Link to='..' relative='path'>Back</Link></p>
        </>
    );
};

export default EditEventPage;

