import { useState } from "react";

const Seats = () => {
  const [seat, setSeat] = useState(0);
  const [price, setPrice] = useState(0);
  const [seatNumber, setSeatNumber] = useState([1, 2, 3, 4, 5]);

  function totalPriceAndSeats() {
    setSeat(() => seat + 1);
    setPrice(130 * seat);
    const total = price * seat;
    return total;
  }

  function resetTotalPriceAndSeats() {
    setPrice(0);
    setSeat(0);
    setSeatNumber[null];
  }

  return (
    <>
      <div>Movie: </div>
      <div>Seat numbers: {seatNumber}</div>
      <div>Seats total: {seat}</div>
      <div>Total price: {price} CZK</div>
      <button onClick={resetTotalPriceAndSeats}>Reset seats</button>

      <div className="seatsContainer">
        <ul onClick={totalPriceAndSeats}>
          {seatNumber.map((number) => {
            return <li>{number}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export { Seats };
