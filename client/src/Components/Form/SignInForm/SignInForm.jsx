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
            className="pay-input"
            name="email"
            placeholder="xxxxxxxxx"
            label="Card number"
            error={formikForm.errors.email && formikForm.touched.email}
              errorMessage={formikForm.errors.email}
            
          />

          <Input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...formikForm.getFieldProps("password")}
            type="password"
            className="pay-input"
            name="password"
            placeholder="xxx xxx"
            label="ddddd"
            error={formikForm.errors.password && formikForm.touched.password}
              errorMessage={formikForm.errors.password}
             
            />
               <Input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...formikForm.getFieldProps("password")}
            type="password"
            className="pay-input"
            name="password"
            placeholder="xxx"
            label="CVV"
            error={formikForm.errors.password && formikForm.touched.password}
              errorMessage={formikForm.errors.password}
             
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
