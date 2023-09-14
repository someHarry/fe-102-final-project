import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './DeliveryPage.scss'
import { PatternFormat } from 'react-number-format'
import { useNavigate } from 'react-router-dom'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import { actionAddUser } from '../../redux/user/actionUser'

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .matches(/^[a-zA-Z]+$/, 'Name must be in English'),
  lastName: Yup.string()
    .required('Last name is required') 
    .matches(/^[a-zA-Z]+$/, 'Last name must be in English'),
  city: Yup.string()
    .required('City is required')
    .matches(/^[a-zA-Z]+$/, 'City must be in English'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  street: Yup.string()
    .required('Street is required')
    .matches(/^(?=.*[a-zA-Z]) || (?=.*[0-9])/, 'Street is required'),

})

export default function DeliveryForm() {
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    street: '',
  }
  const subtotal = useSelector((state) => state.cart.subtotal)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onSubmit = (values, { resetForm }) => {
    console.log(values)
    dispatch(actionAddUser(values))
    navigate('/payment')
    resetForm()
  }
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })


  return (
          <section className="container delivery-page">
            <div className="routes">
              <p className="routes-title">1. MY BAG</p>
              <hr className="route-line" />
              <p className="routes-title">2. DELIVERY</p>
              <hr className="route-line" />
              <p className="routes-title">3. REVIEW & PAYMENT</p>
            </div>
            <form className="delivery-form" onSubmit={formik.handleSubmit}>
              <div className="delivery-form-address">
                <h2 className="delivery-form-address__title">Shipping Address</h2>

                <Input
                  type="text"
                  className="form-input"
                  name="name"
                  placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  error={formik.touched.name && formik.errors.name}
                  errorMessage={formik.errors.name}
                />

                <Input
                  type="text"
                  className="form-input"
                  name="lastName"
                  placeholder="Last name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  error={formik.touched.lastName && formik.errors.lastName}
                  errorMessage={formik.errors.lastName}
                />

                <Input
                  type="text"
                  className="form-input"
                  name="city"
                  placeholder="City"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  error={formik.touched.city && formik.errors.city}
                  errorMessage={formik.errors.city}
                />

                <Input
                  type="text"
                  className="form-input"
                  name="street"
                  placeholder="Street"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                  error={formik.touched.street && formik.errors.street}
                  errorMessage={formik.errors.street}
                />
              </div>

              <div className="delivery-form-contact">
                <h2 className="delivery-form-contact__title">Contact information</h2>

                <Input
                  type="email"
                  className="form-input"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  error={formik.touched.email && formik.errors.email}
                  errorMessage={formik.errors.email}
                />

                <PatternFormat
                  format="+38 (###) ###-##-##"
                  className="form-input input"
                  mask="_"
                  customInput={Input}
                  type="tel"
                  name="phone"
                  placeholder="+38 (___) ____-___"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && formik.errors.phone}
                  errorMessage={formik.errors.phone}
                />
              </div>
              <div className="delivery-form-order">
                <div className="delivery-form-order__summery">
                    <h2 className="delivery-form-order__title">Order summery: </h2>
                    <p className="delivery-form-order__label">
                      Subtotal: <span className="delivery-form-order__span">${subtotal}</span>{' '}
                    </p>
                    <p className="delivery-form-order__label">
                      Delivery: <span className="delivery-form-order__span">$15</span>
                    </p>
                    <hr className="line" />
                    <p className="delivery-form-order__label">
                      Total : <span className="section-order__span">${(parseFloat(subtotal)+15).toFixed(2)}</span>
                    </p>

                    <p className="delivery-form-order__info">Estimated shipping time: 2 days</p>
                </div>
                
                <Button
                  btnStyles="delivery-form__button"
                  text="GO TO PAYMENT"
                  disabled={formik.isSubmitting}
                  btnClick={formik.handleSubmit}
                />
              </div>
            </form>
          </section>    
  )
}
