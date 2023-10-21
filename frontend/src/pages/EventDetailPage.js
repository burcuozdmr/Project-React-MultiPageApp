import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const EventDetailPage = () => {

  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      <p>{params.eventId}</p>
      <Link to={'..'}>Back</Link>

    </>
  )
}

export default EventDetailPage
