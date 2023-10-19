import React, {useState} from "react";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import Input from "../../../Input/Input";
import Button from "../../../Button";
import AuthRequest from "../../../../helpers/authRequest"

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('E-mail is required'),
    password: Yup.string()
        .required('Password is required'),
})

function Login({setIsAuthWindowVisible, setIsRegisterWindowOpen, setIsLogin}) {
    const [errorMessage, setErrorMessage] = useState(false);

    const initialValues = {
        email: '',
        password: '',
    }

    const throwMySetter = () => {
        setIsAuthWindowVisible(false);
        setIsLogin(true);
        localStorage.setItem("isLogin", "true")
    }
    const onSubmit = async (values, {resetForm}) => {
        const response = await AuthRequest.login(values.email, values.password)
        if (response.success) {
            throwMySetter()
        } else {
            setErrorMessage(JSON.stringify(response))
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
            <h3>Log In</h3>
            <form className="auth--form">
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
                    text="Log in"
                    disabled={formik.isSubmitting}
                    btnClick={formik.handleSubmit}
                />
                <p className="auth--switcher">Not registered yet?
                    <Button
                        btnStyles="switcher--button"
                        text="Register now!"
                        disabled={formik.isSubmitting}
                        btnClick={()=>{setIsRegisterWindowOpen(true)}}
                    />
                </p>
            </form>
        </>
    )
}


Login.propTypes = {
    setIsAuthWindowVisible: PropTypes.func.isRequired,
    setIsRegisterWindowOpen: PropTypes.func.isRequired,
    setIsLogin: PropTypes.func.isRequired,
}


export default Login;