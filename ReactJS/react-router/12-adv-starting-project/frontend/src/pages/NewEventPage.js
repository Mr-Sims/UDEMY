import EventForm from "../components/EventForm";

const NewEventPage = () => {

    return(
        <EventForm method='post'/>
    );
};

export default NewEventPage;


// export async function action({request, params}) {

//     const data = await request.formData();

//     const eventData = {
//         title: data.get('title'),
//         image: data.get('image'),
//         date: data.get('date'),
//         description: data.get('description'),
//     }

//     // console.log(eventData)


//     const response = await fetch('http://localhost:8080/events', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(eventData)
//     });
//     console.log(response.status)
    
//     if (response.status === 422) {
//         return response;
//     }

//     if (!response.ok) {
//         throw json({message: 'Could not post event!'}, {status: 500})
//     } 

//     return redirect('/events')

// }