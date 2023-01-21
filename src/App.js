import { useState } from "react";
import "./App.css";
import EventList from "./components/EventList";
import Modal from "./components/Modal";
import Title from "./components/Title";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "Browser's Live Stream", id: 2 },
    { title: "Race on moo moo farm", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };
  const handleClose = () => {
    setShowModal(false);
  };
  // const handleShowModal = () => {
  //   setShowModal(true);
  // };

  return (
    <div className="App">
      <Title title="Events in your Area" subtitle="This is a Subtitle" />
      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      {showModal && (
        <Modal handleClose={handleClose}>
          <h2>10% Off Coupon Code!!</h2>
          <p>Use the code NINJA10 at the checkout</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
