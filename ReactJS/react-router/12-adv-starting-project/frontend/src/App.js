import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import RootLayout from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import EventsRootLayout from './pages/EventsRoot';


const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage /> },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ]
      },
    ]
  },
])


function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;




// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage v
//    - EventsPage v
//    - EventDetailPage v
//    - NewEventPage v
//    - EditEventPage v
// 2. Add routing & route definitions for these five pages
//    - / => HomePage v
//    - /events => EventsPage v
//    - /events/<some-id> => EventDetailPage v
//    - /events/new => NewEventPage v
//    - /events/<some-id>/edit => EditEventPage v

// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components