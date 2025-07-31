import styles from "./Hero.module.css";
import MyPassportSizePic from "../../assets/Passport Size Faiz Ullah.png";

const Hero = () => {
    return (
        <div className={styles.heroSection}>
            <div className={styles.heroNavbar}>
                <div>
                    <p>faizullahofficial0@gmail.com</p>
                    <button className={styles.button}>Copy</button>
                    <button className={styles.button}>CV</button>
                </div>
                <div>
                    <a>LinkedIn</a>/<a>Facebook</a>/<a>Instagram</a>
                </div>
            </div>
            <div className={styles.infoSection}>
                <img src={MyPassportSizePic} alt="" />
                <h1>Faiz Ullah Khan</h1>
                <h2>Junior Full Stack Web Developer</h2>
                <button
                    className={styles.button}
                    style={{
                        width: "10rem",
                        height: "3rem",
                        background: "black",
                        color: "white",
                    }}
                >
                    Hire Me
                </button>
            </div>
        </div>
    );
};

export default Hero;
