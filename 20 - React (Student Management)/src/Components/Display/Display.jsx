import styles from "./Display.module.css";

const Display = ({ students, setUpdatingStudentIndex, handleDelete }) => {
    return (
        <div className={styles.container}>
            {students.map((stu, idx) => (
                <div key={idx} className={styles.student}>
                    <div className={styles.actions}>
                        <div>
                            <h2>Student no:{idx + 1}</h2>
                        </div>
                        <div>
                            <button
                                style={{ background: "orange" }}
                                onClick={() => setUpdatingStudentIndex(idx)}
                            >
                                Edit
                            </button>
                            <button
                                style={{ background: "red", color: "white" }}
                                onClick={() => handleDelete(idx)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name: </td>
                                <td>{stu.fullName}</td>
                            </tr>
                            <tr>
                                <td>CNIC: </td>
                                <td>{stu.cnic}</td>
                            </tr>
                            <tr>
                                <td>Father name: </td>
                                <td>{stu.fatherName}</td>
                            </tr>
                            <tr>
                                <td>Class: </td>
                                <td>{stu.class}</td>
                            </tr>
                            <tr>
                                <td>Department: </td>
                                <td>{stu.department}</td>
                            </tr>
                            <tr>
                                <td>Contact: </td>
                                <td>{stu.contact}</td>
                            </tr>
                            <tr>
                                <td>DOB: </td>
                                <td>{stu.dob}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Display;
