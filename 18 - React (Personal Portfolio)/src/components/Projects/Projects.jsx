import styles from "./Projects.module.css";
import LibraryMS from "../../assets/LibraryManagementSystem.jpeg";
import EMedicine from "../../assets/EMedicine.jpg";
import LMS from "../../assets/custom-lms-cover-pic.svg";
import WebsiteBlog from "../../assets/website-blog.jpg";

const Projects = () => {
    return (
        <div className={styles.projectsContainer}>
            <h1 style={{ textAlign: "center" }}>
                My Projects that make's me <br />
                different from others
            </h1>
            <div className={styles.projectList}>
                <div className={styles.project}>
                    <img src={LibraryMS} alt="" />
                    <div>
                        <h4>Libarary Management System</h4>
                        <div>
                            <p>Live Demo</p>
                            <p>Github</p>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={EMedicine} alt="" />
                    <div>
                        <h4>E-Medicine</h4>
                        <div>
                            <p>Live Demo</p>
                            <p>Github</p>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={LMS} alt="" />
                    <div>
                        <h4>Leaning Management System</h4>
                        <div>
                            <p>Live Demo</p>
                            <p>Github</p>
                        </div>
                    </div>
                </div>
                <div className={styles.project}>
                    <img src={WebsiteBlog} alt="" />
                    <div>
                        <h4>Libarary Management System</h4>
                        <div>
                            <p>Live Demo</p>
                            <p>Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
