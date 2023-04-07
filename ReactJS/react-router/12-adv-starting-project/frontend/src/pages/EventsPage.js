import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

const EventsPage = (props) => {

    const data = useLoaderData();

    const events = data.events;

    return (
        <>
            {<EventsList events={events} />}
        </>
    )
}

export default EventsPage;

export async function loader() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return {
        //     isError: true,
        //     message: 'Could not fetch data!'
        // }
        // throw new Response(JSON.stringify({message: 'Could not fetch events!'}), {status: 500});
        throw json({message: 'Could not fetch events!'}, {status: 500});

    } else {
        // const resData = await response.json();
        // return resData.events;
        return response;
    }
};