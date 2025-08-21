import styles from "./App.module.css";
import { Suspense, lazy } from "react";

const GetInTouch = lazy(() => import("./components/GetInTouch/GetInTouch"));
const Hero = lazy(() => import("./components/Hero/Hero"));
const Message = lazy(() => import("./components/Message/Message"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Technology = lazy(() => import("./components/Technologies/Technology"));
const LoadingScreen = lazy(() => import("./components/Loader/Loader"));

function App() {
    return (
        <div className={styles.container}>
            <Suspense fallback={<LoadingScreen />}>
                <Hero />
                <Technology />
                <Projects />
                <Message />
                <GetInTouch />
            </Suspense>
        </div>
    );
}

export default App;
