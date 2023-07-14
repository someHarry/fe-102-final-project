/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { validationSchema } from "./validationShema";
import "./SignInForm.scss"
import Input from "../../Input/Input";
import '../../Input/Input.scss'
// import Button from "../../Button/Button";

function SignInForm() {
    const navigate = useNavigate()

    const formikForm = useFormik({
        initialValues: {email: '',password: '' },
        // eslint-disable-next-line object-shorthand
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
        navigate('/')
        resetForm()
        },
    })
    return (
         <div className="form">
      <form onSubmit={formikForm.handleSubmit}>
        <fieldset className="form-block">
          <Input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...formikForm.getFieldProps("email")}
            type="email"
            className="signIn-input"
            name="email"
            placeholder="email adress"
            label=""
            error={formikForm.errors.email && formikForm.touched.email}
              errorMessage={formikForm.errors.email}
              hasEmailIcon={true}
          />

          <Input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...formikForm.getFieldProps("password")}
            type="password"
            className="signIn-input"
            name="lastName"
            placeholder="password"
            label=""
            error={formikForm.errors.password && formikForm.touched.password}
              errorMessage={formikForm.errors.password}
              hasPassIcon={true}
          />

       {/* <Button
            text="Checkout"
            type="submit"
            backgroundColor="#ffff"
            className="btn"
          /> */}
          </fieldset>
        </form>
      </div>

    )
}
export default SignInForm
