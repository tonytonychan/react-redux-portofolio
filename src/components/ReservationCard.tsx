import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservations } from '../features/reservationSlice';
interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div
      className="reservation-card-container"
      onClick={() => {
        dispatch(removeReservations(index));
      }}
    >
      {name}
    </div>
  );
};

export default ReservationCard;
