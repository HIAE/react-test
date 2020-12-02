import React from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

// import styles
import styles from "./Details.module.css";

// import components
import TradingView from "../../components/TradingView/TradingView";

const Details = () => {
  return (
    <>
      <TradingView />
      <header>
        <Link to="/" className={styles.link}>
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </header>

      <div className={styles.filters}>
        <div className={styles.input_group}>
          <label htmlFor="from">De</label>
          <input type="text" id="from" />
        </div>

        <div className={styles.input_group}>
          <label htmlFor="to">Até</label>
          <input type="text" id="to" />
        </div>
      </div>
      <div className={styles.chart}></div>
    </>
  );
};

export default Details;
