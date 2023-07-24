/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-shorthand */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom';
import * as yup from 'yup'
import { ReactComponent as Visa } from './icons/visaFormIcon.svg'
import { ReactComponent as MasterCard } from './icons/mastercardFormIcon.svg'
import './PaymentPage.scss'
import Button from '../../Components/Button/Button'
import Form from '../../Components/Form/Form'
import '../../Components/Form/Form.scss'
import Input from '../../Components/Input/Input'
import '../../Components/Input/Input.scss'


function isValidExpirationDate(value) {
  if (!value) return false
  const [month, year] = value.split('/')
  const parsedMonth = parseInt(month, 10)
  const parsedYear = parseInt(year, 10)
  if (Number.isNaN(parsedMonth) || Number.isNaN(parsedYear)) return false
  return parsedMonth >= 1 && parsedMonth <= 12 && parsedYear > new Date().getFullYear() % 100
}
const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .required('Card number is required')
    .min(16, 'min 16')
    .max(19, 'max 16')
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Invalid card number format'),
  expirationDate: yup
    .string()
    .required('Expired date is required')
    .matches(/^\d{2}\/\d{2}$/, 'Invalid expiration date format (MM/YY)')
    .test('expirationDate', 'Invalid expiration date', isValidExpirationDate),
  cvc: yup
    .string()
    .required('cvc is required')
    .matches(/^\d{3}$/, 'Invalid CVC format (3 digits)'),
})

function PaymentPage() {
  const initialValues = {
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  }
  const formikForm = useFormik({
    initialValues: { ...initialValues },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      // navigate("/");
      resetForm()
    },
  })

  return (
    <section className='payment-page'>
      <div className="routes">
        <p className="routes-title">1. MY BAG</p>
        <hr className="routes-line" />
        <p className="routes-title">2. DELIVERY</p>
        <hr className="routes-line" />
        <p className="routes-title">3. REVIEW & PAYMENT</p>
      </div>
      <div className="payment">
        <div className='payment-adaptive'>
          <div className="payment-info">
            <h4 className="payment-title">Delivery Details</h4>
            <div className="payment-address">
              <h4 className="payment-address__title">Shipping address</h4>
              <p className="payment-address__text">
                3 Falahi St , Falahi Ave, Pasdaran Blvd, Fars Province , Shiraz 71856-95159 Iran
              </p>
            </div>
            <div className="payment-address">
              <h4 className="payment-address__title">Billing addresss</h4>
              <p className="payment-address__text">Same as shipping address</p>
            </div>
            <div className="payment-address">
              <h4 className="payment-address__title">Contact information</h4>
              <p className="payment-address__text">amoopur@gmail.com</p>
            </div>
            <Button btnStyles="payment-info__btn" text="EDIT DETAILES" />
          </div>
          <div className="payment-type">
            <h4 className="payment-title">Payment type</h4>
            <div className="payment-type__btn">
              <Button btnStyles="payment-type__btn--visa" text="" />
            </div>
            <div className="form__pay">
              <Form onSubmit={formikForm.handleSubmit}>
                <fieldset className="form-block">
                  <div className="pay-form-title-container">
                    <p className="pay-form-title">Credit or Debit card</p>
                    <div className="payment-form-title__icon">
                      <Visa /> <MasterCard />
                    </div>
                  </div>

                  <Input
                    {...formikForm.getFieldProps('cardNumber')}
                    type="text"
                    className="pay-input pay-input1"
                    name="cardNumber"
                    placeholder="xxxx       xxxx       xxxx       xxxx"
                    label="Card number"
                    error={formikForm.errors.cardNumber && formikForm.touched.cardNumber}
                    errorMessage={formikForm.errors.cardNumber}
                  />
                  <div className="flex">
                    <Input
                      {...formikForm.getFieldProps('expirationDate')}
                      type="text"
                      className="pay-input pay-input2"
                      name="expirationDate"
                      placeholder="xx/xx"
                      label="Expired date"
                      error={formikForm.errors.expirationDate && formikForm.touched.expirationDate}
                      errorMessage={formikForm.errors.expirationDate}
                    />
                    <Input
                      {...formikForm.getFieldProps('cvc')}
                      type="text"
                      className="pay-input pay-input2"
                      name="cvc"
                      label="CVC"
                      error={formikForm.errors.cvc && formikForm.touched.cvc}
                      errorMessage={formikForm.errors.cvc}
                    />
                  </div>
                </fieldset>
              </Form>
              <Button text="Advanced payment" btnStyles="payment-type__btn__form" onClick={formikForm.handleSubmit} />
            </div>
          </div>
        </div>
        <div className="payment-summery">
          <div className="payment-summery__order-container">
            <h4 className="payment-title">Order summery</h4>
            <div className="payment-summery__order">
              <p className="payment-summery__order-position">Subtotal</p>
              <span className="payment-summery__order-price">€3.90</span>
            </div>
            <div className="payment-summery__order">
              <p className="payment-summery__order-position">Delivery</p>
              <span className="payment-summery__order-price">€3.95</span>
            </div>
            <hr className="payment-summery-line" />
            <div className="payment-summery__order">
              <p className="payment-summery__order-total">Total</p>
              <span className="payment-summery__order-price-total">€7.85</span>
            </div>
            <p className="payment-summery__order-info">Estimated shipping time: 2 days</p>
          </div>
          <Link to="/Confirmation_of_payment_Page">
            <Button text="Pay" btnStyles="payment-summery__order-btn" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PaymentPage
