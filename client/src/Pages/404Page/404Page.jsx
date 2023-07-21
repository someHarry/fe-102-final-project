import React from 'react'
import {Link} from "react-router-dom"
import "./404Page.scss"
import Button from '../../Components/Button/Button'

export default function NotFoundPage() {
  return (
        <section className='section container'>
            <p className='section__title'>Oops!</p>
            <p className='section__desc'>Page not found</p>
            <img className='section__img' src='./pics/notFound/404-img.svg' alt='' />
            
            <Link to='/' className='section__link'>
                <Button btnStyles="section__btn">
                   <img className='section__btn-arrow' src='./pics/notFound/arrow.svg' alt='' />
                   Back to home
                </Button>
            </Link>
        </section>
    )
}
