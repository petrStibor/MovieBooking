import { useState } from "react";

const Ticket = () => {
  const [hasTicket, setHasTicket] = useState(false);

  const ticketNumber = Math.floor(100000 + Math.random() * 900000);

  return (
    <>
      <button onClick={() => setHasTicket(!hasTicket)}>Set ticket</button>
      {hasTicket ? (
        <div>Your ticket number is: {ticketNumber}</div>
      ) : (
        <div>You must choose a movie first.</div>
      )}
    </>
  );
};

export { Ticket };
