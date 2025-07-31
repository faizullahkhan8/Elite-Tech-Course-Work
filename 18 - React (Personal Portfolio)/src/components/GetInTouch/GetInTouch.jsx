import styles from "./GetInTouch.module.css";
import getInTouchImg from "../../assets/get-in-touch-img.png";

const GetInTouch = () => {
    return (
        <div className={styles.GetInTouchContainer}>
            <h1>Get in Touch👋</h1>
            <div className={styles.formSection}>
                <img src={getInTouchImg} alt="" />
                <div className={styles.GetInTouchForm}>
                    <input type="text" placeholder="Full name..." />
                    <input type="text" placeholder="Email..." />
                    <input type="text" placeholder="Message..." />
                    <button style={{ width: "8rem" }}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;
