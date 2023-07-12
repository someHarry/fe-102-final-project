import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { validationSchema } from "./validationShema";
import Input from "../../Input/Input";

import Button from "../../Button/Button";

function Form() {
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
            classNames="input"
            name="email"
            placeholder=""
            label="email"
            error={formikForm.errors.email && formikForm.touched.email}
            errorMessage={formikForm.errors.email}
          />

          <Input
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...formikForm.getFieldProps("password")}
            type="password"
            classNames="input"
            name="lastName"
            placeholder="lastName"
            label="password"
            error={formikForm.errors.password && formikForm.touched.password}
            errorMessage={formikForm.errors.password}
          />

       <Button
            text="Checkout"
            type="submit"
            backgroundColor="#ffff"
            className="btn"
          />
          </fieldset>
        </form>
      </div>

    )
}
export default Form
