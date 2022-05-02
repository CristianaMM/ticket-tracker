import React, { useState } from "react";
import styles from "./Counter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counter = () => {
  const [ticketCount, setTicketCount] = useState(0);

  const setValue = (isAdd) => {
    const result = isAdd ? ticketCount + 1 : ticketCount - 1;

    setTicketCount(result < 0 ? 0 : result);
  };

  return (
    <div className={styles.counter}>
      <h2>Tickets</h2>
      <div className={styles.manageValue}>
        <div className={styles.icon} onClick={() => setValue(false)}>
          <FontAwesomeIcon icon="fa-solid fa-circle-minus" />
        </div>
        <p>{ticketCount}</p>
        <div className={styles.icon} onClick={() => setValue(true)}>
          <FontAwesomeIcon icon="fa-solid fa-circle-plus" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
