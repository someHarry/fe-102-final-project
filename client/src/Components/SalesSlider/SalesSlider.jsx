/* eslint-disable react/jsx-boolean-value */
/* eslint-disable import/no-unresolved */
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Scrollbar, Navigation } from 'swiper/modules'
import Button from '../Button'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import './SalesSlider.scss'

function SalesSlider() {
  return (
    <section className="slider__wrapper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: {
            spaceBetween: 20
          },
          480: {
            spaceBetween: 30
          },
          640: {
            spaceBetween: 40
          }
        }}
        navigation={true}
        scrollbar={{
          hide: true,
        }}
        modules={[Autoplay, Scrollbar, Navigation]}
        className="sales_swiper"
      >
        <SwiperSlide>
          <article className="salesList__container sale1 intro-pic-red-wine">
            <img
              className="salesList__container--pic sales__pic slider__pic"
              alt="white wine for sale"
              src="./pics/sales/red wine table.jpg"
            />
            <div className="salesList__container--item sales__item">
              <h3 className="sales__item--title">Every day is unique, just like our wine</h3>
              <p className="sales__item--text">
                Introducing our new crafted wine, a timeless elixir born from meticulous attention to detail and a
                passion for excellence. Each bottle tells a captivating story, blending the richness of nature&apos;s
                bounty with the skillful artistry of winemaking. From carefully nurtured grapes to the perfect balance
                of flavors, every sip invites you to indulge in a sensory experience that transcends boundaries and
                ignites the senses.
              </p>
              <Link to="/shop">
                <Button btnStyles="buttonDark" text="Check our Wine" />
              </Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="salesList__banner banner1">
            <div className="salesList__banner--item banner__item">
              <h3 className="banner__item--title">Hot Summer Sale!</h3>
              <p className="banner__item--text">
                Don&apos;t miss this extraordinary opportunity to enrich your wine collection or surprise someone
                special with the gift of indulgence. Head over to our website or visit our store to explore our
                unparalleled selection of wine bottles.
              </p>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="sale2 adapt-pic-glass">
            <div className="salesList__container--item  salesList__banner--item sales__item-glass">
              <h3 className="sales__item-glass--title">Special Offers for Wine Enthusiasts!</h3>
              <p className="sales__item-glass--text sales__item-glass--time-limited">Limited-Time Offer!</p>
              <p className="sales__item-glass--text">
                Don&apos;t let this incredible opportunity pass you by! Upgrade your wine-drinking experience or
                surprise a loved one with the gift of elegance. Head over to our website or visit our store to explore
                our stunning collection of wine glasses.
              </p>
            </div>
            <img className="sales__item--pic slider__pic" alt="white wine for sale" src="./pics/sales/redWineGlass.jpg" />
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="salesList__banner banner2">
            <div className="salesList__banner--item banner__item">
              <h3 className="banner__item--title">Fast Delivery, Guaranteed Satisfaction</h3>
              <p className="banner__item--text">
                Your wine journey begins from the moment you place your order. We offer swift and reliable delivery,
                ensuring your wine bottles arrive in pristine condition, ready to be savored. With our commitment to
                quality, we guarantee your satisfaction with every purchase.
              </p>
            </div>
          </article>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default SalesSlider
