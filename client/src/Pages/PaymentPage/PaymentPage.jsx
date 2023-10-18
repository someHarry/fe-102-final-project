/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable object-shorthand */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { ReactComponent as Visa } from './icons/visaFormIcon.svg'
import { ReactComponent as MasterCard } from './icons/mastercardFormIcon.svg'
import './PaymentPage.scss'
import Button from '../../Components/Button/Button'
import Form from '../../Components/Form/Form'
import '../../Components/Form/Form.scss'
import Input from '../../Components/Input/Input'
import '../../Components/Input/Input.scss'
import { actionAddBankCard } from '../../redux/bankCard/actionBankCard'
import { actionUptadeUserData } from '../../redux/user/actionUser'

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
    .max(19, 'max 19')
    .matches(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, 'Invalid card number format'),
  expirationDate: yup
    .string()
    .required('Expired date is required')
    .matches(/^\d{2}\/\d{2}$/, 'Invalid expiration date')
    .test('expirationDate', 'Invalid expiration date format (MM/YY)', isValidExpirationDate),
  cvc: yup
    .string()
    .required('CVC is required')
    .matches(/^\d{3}$/, 'Invalid CVC format (3 digits)'),
})

function PaymentPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user.dataUser)
  const subtotal = useSelector((state) => state.cart.subtotal)

  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState({
    city: user.city,
    street: user.street,
    name: user.name,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  })
  const [cardNumber, setCardNumber] = useState('')
  const [expiredData, setExpiredData] = useState('')
  const [isHidden] = useState(false)

  const initialValues = {
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  }
  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleSaveClick = () => {
    setIsEditing(false)
    dispatch(actionUptadeUserData(editedData))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedData({ ...editedData, [name]: value })
  }

  const onSubmit = (values, { resetForm }) => {
    dispatch(actionAddBankCard(values))
    navigate('/payment_confirm')
    resetForm()
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
const handleExpiredData = (e) => {
  const inputValue = e.target.value.replace(/\s/g, ''); 
  const formattedValue = inputValue
    .replace(/\D/g, '') 
    .replace(/^(\d{2})(\d{0,2})/, '$1/$2') 
    .trim()
    .slice(0, 5);  
  setExpiredData(formattedValue); 
  formik.setFieldValue('expirationDate', formattedValue); 
}
  const handleCardNumber = (e) => {
    const inputValue = e.target.value.replace(/\s/g, ''); 
    const formattedValue = inputValue
      .replace(/\D/g, '') 
      .replace(/(\d{4})/g, '$1 ')
      .trim()
      .slice(0, 19); 

    setCardNumber(formattedValue); 
    formik.setFieldValue('cardNumber', formattedValue);
  }

  return (
    <section className="payment-page">
      <div className="routes">
        <p className="routes-titl">1. MY BAG</p>
        <hr className="routes-line" />
        <p className="routes-titl">2. DELIVERY</p>
        <hr className="routes-line" />
        <p className="routes-titl">3. REVIEW & PAYMENT</p>
      </div>
      <div className="payment">
        <div className="payment-adaptive">
          <div className="payment-info">
            <h4 className="payment-title">Delivery Details</h4>
            {isEditing ? (
              <div>
                <div className="payment-address ">
                  <h4 className="payment-address__title">Shipping address</h4>
                  <textarea
                    name="city"
                    value={editedData.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="payment-address__text  textarea"
                  />
                  <textarea
                    name="street"
                    value={editedData.street}
                    onChange={handleInputChange}
                    placeholder="Street"
                    className="payment-address__text textarea"
                  />
                </div>
                <div className="payment-address">
                  <h4 className="payment-address__title">Recipient data</h4>
                  <textarea
                    name="name"
                    value={editedData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="payment-address__text textarea"
                  />
                  <textarea
                    name="lastName"
                    value={editedData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="payment-address__text textarea"
                  />
                </div>
                <div className="payment-address">
                  <h4 className="payment-address__title">Contact information</h4>
                  <textarea
                    name="email"
                    value={editedData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="payment-address__text textarea-email"
                  />
                  <textarea
                    name="phone"
                    value={editedData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="payment-address__text textarea"
                  />
                </div>
                <Button btnStyles="payment-info__btn " text="SAVE" btnClick={handleSaveClick} />
              </div>
            ) : (
              <div>
                <div className="payment-address">
                  <h4 className="payment-address__title">Shipping address</h4>
                  <p className="payment-address__text">{`${editedData.city}, ${editedData.street}`}</p>
                </div>
                <div className="payment-address">
                  <h4 className="payment-address__title">Recipient data</h4>
                  <p className="payment-address__text">{`${editedData.name} ${editedData.lastName}`}</p>
                </div>
                <div className="payment-address">
                  <h4 className="payment-address__title">Contact information</h4>
                  <p className="payment-address__text"> {editedData.email}</p>
                  <p className="payment-address__text"> {editedData.phone}</p>
                </div>
                <Button btnStyles="payment-info__btn" text="EDIT DETAILS" btnClick={handleEditClick}/>
              </div>
            )}
          </div>
          <div className="payment-type">
            <h4 className="payment-title">Payment type</h4>

            <div className="form__pay">
              <Form onSubmit={formik.handleSubmit}>
                <fieldset className="form-block">
                  <div className="pay-form-title-container">
                    <p className="pay-form-title">Credit or Debit card</p>
                    <div className="payment-form-title__icon">
                      <Visa /> <MasterCard />
                    </div>
                  </div>

                  <Input
                    {...formik.getFieldProps('cardNumber')}
                    type="text"
                    className="pay-input pay-input1"
                    name="cardNumber"
                    placeholder="xxxx  xxxx  xxxx  xxxx"
                    label="Card number"
                    error={formik.errors.cardNumber && formik.touched.cardNumber}
                    errorMessage={formik.errors.cardNumber}
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    onKeyUp={handleCardNumber}
                    data-testid='cardNumber'
                  />
                  {isHidden && <div>Hidden content for len === 16</div>}
                  <div className="flex">
                    <Input
                      {...formik.getFieldProps('expirationDate')}
                      type="text"
                      className="pay-input pay-input2"
                      name="expirationDate"
                      placeholder="xx/xx"
                      label="Expired date"
                      error={formik.errors.expirationDate && formik.touched.expirationDate}
                      errorMessage={formik.errors.expirationDate}
                      value={expiredData}
                      onChange={(e) => setExpiredData(e.target.value)}
                      onKeyUp={handleExpiredData}
                      data-testid='expirationDate'
                    />
                    <Input
                      {...formik.getFieldProps('cvc')}
                      type="text"
                      className="pay-input pay-input2"
                      name="cvc"
                      label="CVC"
                      error={formik.errors.cvc && formik.touched.cvc}
                      errorMessage={formik.errors.cvc}
                      data-testid='cvc'
                    />
                  </div>
                </fieldset>
              </Form>
            </div>
          </div>
        </div>
        <div className="payment-summery">
          <div className="payment-summery__order-container">
            <h4 className="payment-title">Order summery</h4>
            <div className="payment-summery__order">
              <p className="payment-summery__order-position">Subtotal</p>
              <span className="payment-summery__order-price">${subtotal}</span>
            </div>
            <div className="payment-summery__order">
              <p className="payment-summery__order-position">Delivery</p>
              <span className="payment-summery__order-price">$15</span>
            </div>
            <hr className="payment-summery-line" />
            <div className="payment-summery__order">
              <p className="payment-summery__order-total">Total</p>
              <span className="payment-summery__order-price-total">${subtotal}</span>
            </div>
            <p className="payment-summery__order-info">Estimated shipping time: 2 days</p>
          </div>
          <Link to="/payment_confirm">
            <Button text="Pay" btnStyles="payment-summery__order-btn" btnClick={formik.handleSubmit} type="button" />
          </Link>
        </div>
      </div>
    </section>
  )
}

PaymentPage.defaultProps = {
  street: 'street',
  city: 'city',
  email: 'email',
}

PaymentPage.propTypes = {
  street: PropTypes.string,
  city: PropTypes.string,
  email: PropTypes.string,
}

export default PaymentPage
