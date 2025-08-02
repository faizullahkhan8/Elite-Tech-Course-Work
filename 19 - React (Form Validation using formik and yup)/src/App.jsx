import { useFormik } from "formik";
import "./App.css";
import * as Yup from "yup";
import image from "./assets/get-in-touch-img.png";

function App() {
    const initialvalues = {
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };
    const formValidationSchema = Yup.object().shape({
        fullName: Yup.string().required("Full Name is required!"),
        email: Yup.string()
            .email("In-valid Email")
            .required("Email is required!"),
        password: Yup.string()
            .required("Password is required!")
            .min(6, "Password must be at least 6 characters"),
        confirmPassword: Yup.string()
            .required("Confirm password is required!")
            .oneOf([Yup.ref("password")], "Confirm password must match!"),
    });

    const { handleSubmit, handleBlur, handleChange, values, errors, touched } =
        useFormik({
            initialValues: initialvalues,
            validationSchema: formValidationSchema,
            onSubmit: (data) => {
                console.log(data);
            },
        });

    return (
        <div className="container">
            <div>
                <h1>Registeration Form</h1>
            </div>
            <div className="subContainer">
                <div className="img">
                    <img src={image} alt="" />
                </div>
                <div className="formConatainer">
                    <form onSubmit={handleSubmit}>
                        <div className="inputDiv">
                            <label htmlFor="fullName">
                                Enter Your Full name
                            </label>
                            <input
                                name="fullName"
                                id="fullName"
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.fullName}
                            />
                            {errors.fullName && touched.fullName && (
                                <div className="Error">{errors.fullName}</div>
                            )}
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="email">Enter Your email</label>
                            <input
                                name="email"
                                id="email"
                                type="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && (
                                <div className="Error">{errors.email}</div>
                            )}
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="password">Enter you password</label>
                            <input
                                name="password"
                                id="password"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && (
                                <div className="Error">{errors.password}</div>
                            )}
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="confirmPassword">
                                Confirm the password
                            </label>
                            <input
                                name="confirmPassword"
                                id="confirmPassword"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                            />
                            {errors.confirmPassword &&
                                touched.confirmPassword && (
                                    <div className="Error">
                                        {errors.confirmPassword}
                                    </div>
                                )}
                        </div>
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
