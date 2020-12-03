import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiChevronLeft } from "react-icons/fi";

// import styles
import styles from "./Details.module.css";

// import components
import TradingView from "../../components/TradingView/TradingView";
import LineChart from "../../components/LineChart/LineChart";

const Details = () => {
  const state = useSelector((state) => state);

  const {
    stockSymbol: { name },
  } = state;

  return (
    <>
      <TradingView />
      <header>
        <Link to="/" className={styles.link}>
          <FiChevronLeft size={18} />
          Voltar
        </Link>

        <h1 className={styles.title}>Mais detailhes sobre {name}</h1>
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
      <div className={styles.chart}>
        <LineChart />
      </div>
    </>
  );
};

export default Details;
