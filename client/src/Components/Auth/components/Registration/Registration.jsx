import React, {useState} from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Input from "../../../Input/Input";
import Button from "../../../Button";
import AuthRequest from "../../../../helpers/authRequest"


const validationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    login: Yup.string()
        .required('Login is required'),
    email: Yup.string()
        .required('E-mail is required'),
    password: Yup.string()
        .required('Password is required'),
})

function Registration({setIsRegisterWindowOpen}) {
    const [errorMessage, setErrorMessage] = useState(false);

    const initialValues = {
        firstName: '',
        lastName: '',
        login: '',
        email: '',
        password: '',
    }

    const throwMySetter = () => {
        setIsRegisterWindowOpen(false);
    }
    const onSubmit = async (values, {resetForm}) => {
        const response = await AuthRequest.register(values.firstName, values.lastName, values.login, values.email, values.password)
        setTimeout(()=>{console.log(response)}, 1500)
        if (!response?.message) {
            throwMySetter()
        } else {
            setErrorMessage(`Error: ${JSON.stringify(response.message)}`)
        }
        resetForm();
    }

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    })

    return (
        <>
            <h3>Registration</h3>
            <form className="auth--form">
                <Input
                    type="text"
                    placeholder="First name"
                    className="form-input"
                    error={formik.touched.firstName && formik.errors.firstName}
                    errorMessage={formik.errors.firstName}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    name="firstName"
                />
                <Input
                    type="text"
                    placeholder="Last name"
                    className="form-input"
                    error={formik.touched.lastName && formik.errors.lastName}
                    errorMessage={formik.errors.lastName}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    name="lastName"
                />
                <Input
                    type="text"
                    placeholder="Login"
                    className="form-input"
                    error={formik.touched.login && formik.errors.login}
                    errorMessage={formik.errors.login}
                    onBlur={formik.handleBlur}
                    value={formik.values.login}
                    onChange={formik.handleChange}
                    name="login"
                />
                <Input
                    type="text"
                    placeholder="E-mail"
                    className="form-input"
                    error={formik.touched.email && formik.errors.email}
                    errorMessage={formik.errors.email}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    name="email"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    className="form-input"
                    // onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.touched.password && formik.errors.password}
                    errorMessage={formik.errors.password}
                    onChange={formik.handleChange}
                    name="password"
                />
                {errorMessage && <p className="auth--error-message">{errorMessage}</p>}
                <Button
                    btnStyles="auth--button"
                    text="Registration"
                    disabled={formik.isSubmitting}
                    btnClick={formik.handleSubmit}
                />
                <p className="auth--switcher">Already registered?
                    <Button
                        btnStyles="switcher--button"
                        text="Switch to login!"
                        disabled={formik.isSubmitting}
                        btnClick={()=>{setIsRegisterWindowOpen(false)}}
                    />
                </p>
            </form>
        </>
    )
}


Registration.propTypes = {
    setIsRegisterWindowOpen: PropTypes.func.isRequired,
}


export default Registration;