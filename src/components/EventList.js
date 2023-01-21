import React from 'react'

function EventList({events, handleClick}) {
  return (
      <div>
          
          {
            events.map((events, index) => (
          <div key={events.id}>
            <h2>
              {index + 1}-{events.title}
            </h2>
            <button onClick={() => handleClick()}>Delete Event</button>
          </div>
        ))
        }
    </div>
  )
}

export default EventList