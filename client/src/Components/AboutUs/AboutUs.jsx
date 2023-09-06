/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import './AboutUs.scss'

function AboutUs() {
  const [activeTab, setActiveTab] = useState('About Us')

  const handleTabClick = (content) => {
    setActiveTab(content)
  }

  const tabsData = [
    {
      id: 'About Us',
      imgSrc: './pics/aboutUs_images/aboutUs_img.jpg',
      text: 'Good Wine is an chain of stores. We import alcoholism and gastronomy from our world. The goods in our stores are certified. Therefore, you can be invited to his place. Our assortment includes more than 5,000 items. The products are presented both in the online store  and in offline stores.Our high speed is expanded so that we can create unique alcohol, hot drinks, confectionery products and other products.',
    },
    {
      id: 'About products',
      imgSrc: './pics/aboutUs_images/about-ptoduct_img.jpg',
      text: 'The basis of our products is direct supply from different countries of the world. The goods imported by us are produced in such countries as France, Spain, Georgia, Portugal, USA, Greece, Chile, Scotland, Japan, Ireland, Italy. We have concluded 1000+ exclusive contracts with the best companies. Products are carefully selected. For this purpose, our employees visit productions of various scales, wineries and distilleries. Special attention is paid to the availability of certification. The product presented by us has passed quality control. All official Wine of the World stores from our network operate under a sales license. Expiry dates are monitored by sellers. ',
    },
    {
      id: 'Advantages of our company',
      imgSrc: './pics/aboutUs_images/whychooseUs_img.jpg',
      text: 'Quality products and a democratic price. By supplying alcohol directly from producers, we keep affordable prices More than 5000 positions,Availability of certification, license. Products are carefully selected, their shelf life is controlled service We value every customer and do our best to make your purchase a joy. We employ competent salespeople who regularly improve their qualifications,Availability of a convenient site. Products are clearly structured, each item is equipped with a photo and description. There are filters, a search button, a chat for contacting a consultant.',
    },
  ]
  return (
    <section className="aboutUs">
      <h3 className="aboutUs-title">About Us</h3>
      <div className="aboutUs-block">
        <ul className="aboutUs-list">
          {tabsData.map((tab) => (
            <li
              key={tab.id}
              className={`aboutUs-list__items ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
              style={{ listStyleType: 'none' }}
            >
              {tab.id}
            </li>
          ))}
        </ul>
        <div className="aboutUs-content">
          {tabsData.map((tab) => (
            <img
              key={tab.id}
              src={tab.imgSrc}
              alt=""
              className={`aboutUs-content-img ${activeTab === tab.id ? 'section-active' : 'section-hide'}`}
            />
          ))}
          {tabsData.map((tab) => (
            <p
              key={tab.id}
              className={`aboutUs-content-text ${
                activeTab === tab.id ? 'aboutUs-content-text__active' : 'aboutUs-content-text__hide'
              }`}
            >
              {tab.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutUs
