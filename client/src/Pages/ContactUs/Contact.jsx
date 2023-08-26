import React from 'react'
import './Contact.scss'

export default function Contact() {
  return (
        <section className='contactUs container'>
            <h1 className='contactUs__title'>CONTACT US</h1>
            <hr  className='contactUs__line'/>
            <p className='contactUs__desc'>We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.</p>
            <div className='block'>
                <div className='block-info'>
                    <div className='block-info-item'>
                        <img src="./pics/contactUs/address.svg" className='item__img' alt="" />
                        <p className='item__title'>ADDRESS</p>
                        <a className='item__desc' href="https://www.google.com/maps/place/Silver+Breeze/@50.4272584,30.5955212,17.15z/data=!4m6!3m5!1s0x40d4c57dd85632a3:0x60a23243bc1fbf89!8m2!3d50.4286997!4d30.5933804!16s%2Fg%2F11bychb6v9?hl=en&entry=ttu" 
                          target="_blank" rel="noopener noreferrer">Pavla Tychyna Avenue, 1B, Kyiv
                        </a>
                    </div>

                    <div className='block-info-item'>
                        <img src="./pics/contactUs/mail.svg" className='item__img' alt="" />
                        <p className='item__title'>EMAIL</p>
                        <a href="mailto: goodwine.kyiv@gmail.com" className='item__desc'>goodwine.kyiv@gmail.com</a>
                    </div>

                    <div className='block-info-item'>
                        <img src="./pics/contactUs/call.svg" className='item__img' alt="" />
                        <p className='item__title'>CALL US</p>
                        <a href="tel: +380632784555" className='item__desc'>+38 (063) 278-45-55</a>
                    </div>

                    <div className='block-info-item'>
                        <p className='item__title'>Contact us</p>
                        <p className='item__desc'>Contact us for a quote. Help or to join the team.</p>

                        <div className="item__icon">
                          <a href="https://www.linkedin.com/company/dan-it-education/" target="_blank" rel="noopener noreferrer"><img src="/pics/contactUs/linkedin.svg" className='item__icon-linkedin' alt="" /></a>
                          <a href="https://web.telegram.org/a/#-1169079839" target="_blank" rel="noopener noreferrer"><img src="/pics/contactUs/telegram.svg" className='item__icon-telegram' alt="" /></a>
                          <a href="https://www.instagram.com/daniteducation/" target="_blank" rel="noopener noreferrer"><img src="/pics/contactUs/instagram.svg" className='item__icon-instagram' alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className='block-location'>
                    <iframe
                        className='block-location__map'
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2285.183454990317!2d30.595521199221427!3d50.42725840608596!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57dd85632a3%3A0x60a23243bc1fbf89!2sSilver%20Breeze!5e0!3m2!1sen!2sua!4v1693050612847!5m2!1sen!2sua" 
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    )
}
