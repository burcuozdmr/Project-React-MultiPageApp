import React from 'react'
import { useRouteLoaderData,json,redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';
import EventItem from '../components/EventItem';

const EventDetailPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
    <EventItem event={data.event}></EventItem>
    <Link to={'..'}>Back</Link>
    </>
  )
}

export default EventDetailPage;

export async function loader ({request, params}) {
  const id = params.eventId
 const response = await  fetch('http://localhost:8080/events/' +id) ;
 

 if(!response.ok){
  throw json({message : 'Could not fetch details for selected item.'}, {status :500})
 }else {
    return response;
 }
}

export async function action ({params}) {
  const eventId = params.eventId
  const response = await  fetch('http://localhost:8080/events/' + eventId ,{
    method :'DELETE'
  }) ;

  if(!response.ok){
    throw json({message : 'Could not delete item.'}, {status :500})
   }
   return redirect('/events')
}
