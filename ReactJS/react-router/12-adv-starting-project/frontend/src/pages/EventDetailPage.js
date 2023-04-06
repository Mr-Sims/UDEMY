import { json, useLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <EventItem event={data.event}/>
        // <p>PUDES</p>
        );
};

export default EventDetailPage;

export async function loader({ request, params }) {
    const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);

    if (!response.ok) {
        throw json({message: 'Could not fetch event details'}, {status: 500})
    } else {
        return response;

    }
}