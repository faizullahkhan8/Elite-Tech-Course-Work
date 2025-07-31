import styles from "./Technology.module.css";
import express from "../../assets/expressjs.png";
import mongodb from "../../assets/mongoDb.png";
import nextjs from "../../assets/nextjs.png";
import nodejs from "../../assets/nodejs.png";
import reactjs from "../../assets/reactjs.png";

const Technology = () => {
    return (
        <div className={styles.technology}>
            <img src={express} alt="" />
            <img src={mongodb} alt="" />
            <img src={nextjs} alt="" />
            <img src={nodejs} alt="" />
            <img src={reactjs} alt="" />
        </div>
    );
};

export default Technology;
