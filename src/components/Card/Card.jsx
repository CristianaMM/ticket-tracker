import React from "react";
import styles from "./Card.module.scss";
import Counter from "../Counter";

const Card = (props) => {
  const { name, role } = props;

  return (
    <div className={styles.card}>
      <div>
        <h3>{name}</h3>
        <h4>{role}</h4>
      </div>
      <div className={styles.counter}>
        <Counter />
      </div>
    </div>
  );
};

export default Card;
