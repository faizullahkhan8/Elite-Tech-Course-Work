import styles from "./App.module.css";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import Hero from "./components/Hero/Hero";
import Message from "./components/Message/Message";
import Projects from "./components/Projects/Projects";
import Technology from "./components/Technologies/Technology";

function App() {
    return (
        <div className={styles.container}>
            <Hero />
            <Technology />
            <Projects />
            <Message />
            <GetInTouch />
        </div>
    );
}

export default App;
