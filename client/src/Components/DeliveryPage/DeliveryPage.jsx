import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './DeliveryPage.scss';
import { PatternFormat } from 'react-number-format';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  lastName: Yup.string().required('Last name is required'),
  city: Yup.string().required('City is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone is required'),  
  street: Yup.string().required('Street is required'),
});

export default function MyForm() {
  const initialValues = {
    name: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    street: '',
  };

  const handleSubmit = (values, {resetForm, setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
    resetForm();

  };

  return (
        <main className='main'>
          <div className="routes">
              <p className='routes-title'>1. MY BAG</p>
              <hr className='routes-line'/>
              <p className='routes-title'>2. DELIVERY</p>
              <hr className='routes-line'/>
              <p className='routes-title'>3. REVIEW & PAYMENT</p>
          </div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
       >
      {({ errors, touched, isSubmitting }) => (
        <Form className='form'>
            <div className='main-address'>
            <h2 className='main-address__title'>Shipping Address</h2>
          <div className={`form-field ${errors.name && touched.name ? 'error' : ''}`}>

            <Field type="text" name="name" className='form-input' placeholder="Name"/>
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>
          <div className={`form-field ${errors.lastName && touched.lastName ? 'error' : ''}`}>

            <Field type="text" name="lastName" className='form-input' placeholder="Last Name"/>
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>
          <div className={`form-field ${errors.city && touched.city ? 'error' : ''}`}>

            <Field type="text" name="city" className='form-input' placeholder="City"/>
            <ErrorMessage name="city" component="div" className="error-message" />
          </div>
          <div className={`form-field ${errors.street && touched.street ? 'error' : ''}`}>

            <Field type="text" name="street" className='form-input' placeholder="Street"/>
            <ErrorMessage name="street" component="div" className="error-message" />
          </div>
      </div>
      
      <div className='main-contact'>
            <h2 className='main-contact__title'>Contact information</h2>
            <div className={`form-field ${errors.email && touched.email ? 'error' : ''}`}>
            <Field type="email" name="email" className='form-input' placeholder="Email"/>
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className={`form-field ${errors.phone && touched.phone ? 'error' : ''}`}>
            <Field name="phone" >
                  {({ field }) => (
                    <PatternFormat
                    className='form-input'
                      name={field.name}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      format="+38 (###) ###-##-##"
                      mask="_"
                      placeholder="+38 (___) ____-___"
                    />
                  )}
            </Field>        
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>
        </div>
         <div className='main-order'>
            <h2 className='main-order__title'>Order summery</h2>
            <p className='form-label'>Subtotal: <span className='main-order__span'>{}</span> </p>
            <p className='form-label'>Delivery: <span className='main-order__span'>{}</span></p>
            <hr className='line'/>
            <p className='form-label'>Total : <span className='main-order__span'>{}</span></p>
          
            
        <button type="submit" disabled={isSubmitting || Object.keys(errors).length > 0} className='form-button'>
            GO TO PAYMENT
          </button>
        </div>
        </Form>
      )}
    </Formik>
    </main>
    
    
  );
}