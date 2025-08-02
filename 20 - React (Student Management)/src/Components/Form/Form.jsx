import styles from "./Form.module.css";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as yup from "yup";

const StudentForm = ({
    updatingStudentIndex,
    setStudents,
    students,
    setUpdatingStudentIndex,
}) => {
    const initialStates =
        updatingStudentIndex !== undefined
            ? students[updatingStudentIndex]
            : {
                  fullName: "",
                  cnic: "",
                  fatherName: "",
                  class: "",
                  department: "",
                  dob: "",
                  contact: "",
              };

    const studentValidationSchema = yup.object().shape({
        fullName: yup.string().required(),
        cnic: yup.string().required(),
        fatherName: yup.string().required(),
        class: yup.number().oneOf([1, 2, 3, 4, 5, 6, 7, 8]).required(),
        department: yup.string().required(),
        dob: yup.string().required(),
        contact: yup.string().required(),
    });
    return (
        <div className={styles.container}>
            <h1>Register Student</h1>
            <Formik
                initialValues={initialStates}
                validationSchema={studentValidationSchema}
                enableReinitialize
                onSubmit={(data, actions) => {
                    if (updatingStudentIndex === undefined) {
                        setStudents([...students, data]);
                        setUpdatingStudentIndex(undefined);
                    } else {
                        const tempStundents = students;
                        tempStundents[updatingStudentIndex].fullName =
                            data.fullName;
                        tempStundents[updatingStudentIndex].cnic = data.cnic;
                        tempStundents[updatingStudentIndex].fatherName =
                            data.fatherName;
                        tempStundents[updatingStudentIndex].class = data.class;
                        tempStundents[updatingStudentIndex].department =
                            data.department;
                        tempStundents[updatingStudentIndex].dob = data.dob;
                        tempStundents[updatingStudentIndex].contact =
                            data.contact;
                        setStudents(tempStundents);
                        setUpdatingStudentIndex(undefined);
                    }
                    actions.resetForm();
                }}
            >
                <Form className={styles.form}>
                    <div className={styles.inputDiv}>
                        <label>Name:</label>
                        <Field
                            type="text"
                            name="fullName"
                            className={styles.input}
                            placeholder="Enter your name..."
                        />
                        <ErrorMessage
                            component="div"
                            className={styles.error}
                            name="fullName"
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label>CNIC:</label>
                        <Field
                            className={styles.input}
                            type="text"
                            name="cnic"
                            placeholder="Enter your CNIC..."
                        />
                        <ErrorMessage
                            component="div"
                            className={styles.error}
                            name="cnic"
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label>Father name:</label>
                        <Field
                            className={styles.input}
                            type="text"
                            name="fatherName"
                            placeholder="Enter your Father name..."
                        />
                        <ErrorMessage
                            component="div"
                            className={styles.error}
                            name="fatherName"
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label>Class:</label>
                        <Field
                            className={styles.input}
                            type="number"
                            name="class"
                            placeholder="Enter your Semester..."
                        />
                        <ErrorMessage
                            component="div"
                            className={styles.error}
                            name="class"
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label>Department:</label>
                        <Field
                            className={styles.input}
                            type="text"
                            name="department"
                            placeholder="Enter your department..."
                        />
                        <ErrorMessage
                            component="div"
                            className={styles.error}
                            name="department"
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label>Date of Birth:</label>
                        <Field
                            className={styles.input}
                            type="text"
                            placeholder="Enter your DOB"
                            name="dob"
                        />
                        <ErrorMessage
                            component="div"
                            className={styles.error}
                            name="dob"
                        />
                    </div>
                    <div className={styles.inputDiv}>
                        <label>Contact:</label>
                        <Field
                            className={styles.input}
                            type="text"
                            placeholder="Enter you "
                            name="contact"
                        />
                        <ErrorMessage
                            component="div"
                            className={styles.error}
                            name="contact"
                        />
                    </div>
                    <div>
                        <button
                            style={{ background: "green", color: "white" }}
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default StudentForm;
