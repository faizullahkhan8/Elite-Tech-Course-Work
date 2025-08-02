import { useState } from "react";
import DisplayStudent from "./Components/Display/Display.jsx";
import StudentForm from "./Components/Form/Form.jsx";
import styles from "./App.module.css";

const Navbar = () => (
    <nav className={styles.navbar}>
        <span className={styles.logo}>Student Management System</span>
    </nav>
);

const Footer = () => (
    <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Elite Tech Solution</span>
    </footer>
);

const App = () => {
    const [updatingStudentIndex, setUpdatingStudentIndex] = useState(undefined);
    const [students, setStudents] = useState([]);

    const handleDelete = (idx) => {
        let tempStudents = [...students];
        tempStudents.splice(idx, 1);

        setStudents(tempStudents);
    };

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.container}>
                <StudentForm
                    updatingStudentIndex={updatingStudentIndex}
                    setUpdatingStudentIndex={setUpdatingStudentIndex}
                    setStudents={setStudents}
                    students={students}
                />
                <DisplayStudent
                    students={students}
                    setUpdatingStudentIndex={setUpdatingStudentIndex}
                    handleDelete={handleDelete}
                />
            </div>
            <Footer />
        </div>
    );
};

export default App;
