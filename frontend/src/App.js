import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventDetailPage, {
  loader as eventDetailLoader,action as deleteEventAction
} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage, {action as newEventAction} from "./pages/NewEventPage";
import EventsPage, { loader as eventsLoader } from "./pages/EventsPage";
import Root from "./pages/Root";
import EventRoot from "./pages/EventRoot";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action : deleteEventAction
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action :newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
