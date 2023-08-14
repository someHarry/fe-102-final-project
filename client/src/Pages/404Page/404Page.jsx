import React from 'react'
import {Link} from "react-router-dom"
import "./404Page.scss"
import PropTypes from 'prop-types'
import Button from '../../Components/Button/Button'

export default function NotFoundPage(props) {
    const {text}= props
      return (
        <section className='section-404page container'>
            <p className='section-404page__title'>Oops!</p>
            <p className='section-404page__desc'>{text}</p>
            <img className='section-404page__img' src='./pics/notFound/404-img.svg' alt='' />

            <Link to='/' className='section-404page__link'>
                <Button btnStyles="section-404page__btn" text='Back to home'> </Button>
            </Link>

    </section>
    )
}

NotFoundPage.propTypes = {
    text: PropTypes.string
};


NotFoundPage.defaultProps = {
    text: "Page not found"
};