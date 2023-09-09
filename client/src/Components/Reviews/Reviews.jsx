/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Scrollbar, Navigation } from 'swiper/modules'
import './Reviews.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

function Reviews() {

  const reviewsData = [
    {
      imgSrc: './pics/reviews/review1.jpg',
      text: "Good Wine  is an absolute delight for the senses! Its vibrant fruity aroma draws you in, and with the first sip, youre greeted by a burst of flavors that dance on your palate. The balance between the subtle sweetness and the hint of oak is .",
    },
    {
      imgSrc: './pics/reviews/review2.jpg',
      text: 'I recently tried Good Wine  and was pleasantly surprised by its uniqueness. The name says it all – its like a journey through a vineyard. The initial notes of citrus and green apple transform into a medley of tropical fruits, leaving a crisp .',
    },
    {
      imgSrc: './pics/reviews/review3.jpg',
      text: 'Good Wine embodies a lively spirit thats hard to resist. Its effervescence tickles your taste buds, and the subtle floral undertones create a delightful bouquet. While I enjoyed the playful experience, I would have preferred a slightly drier .',
    },
    {
      imgSrc: './pics/reviews/review4.jpg',
      text: 'Good Wine comes across as an experiment that didnt quite hit the mark for me. The combination of flavors felt a bit chaotic, with no particular note standing out. It might be an acquired taste, but Ill stick to more traditional wines.',
    },
     {
       imgSrc: './pics/reviews/review5.jpg',
       text: 'If youre tired of the same old wines, Good Wine is a refreshing departure. Its fusion of red and black berries with a touch of spice gives it a distinctive character. The smoothness belies its affordable price point, making it an excellent choice for .',
    },
         {
           imgSrc: './pics/reviews/review6.jpg',
           text: 'As a wine enthusiast, I appreciate Good Wine attempt to blend different grape varieties. The result is a harmonious composition of flavors that evolves as you enjoy it. However, I felt that the aroma could be more pronounced ',
    },
          {
           imgSrc: './pics/reviews/review7.jpg',
           text: 'Good Wine embodies the essence of celebration. Its lively bubbles and semi-sweet profile make it a crowd-pleaser. Its perfect for toasting to lifes small victories or sharing laughter with friends on a sunny afternoon.',
    },
           {
           imgSrc: './pics/reviews/review8.jpg',
           text: 'Good Wine missed the mark for me. The label promised an exciting adventure, but the taste fell flat. The flavors seemed muddled and lacked the clarity I expected. Perhaps its just not my preferred style of wine.',
    }, {
           imgSrc: './pics/reviews/review9.jpg',
           text: 'Good Wine is a delightful surprise that showcases the winemakers creativity. The blend of fruitiness and a touch of earthiness creates a well-rounded profile. Its a versatile wine that pairs beautifully with an array of dishes.',
    }, {
           imgSrc: './pics/reviews/review10.jpg',
           text: 'Good Wine brings a touch of playfulness to the world of wine. Its light effervescence and notes of summer fruits make it a charming choice for casual gatherings. While it might not become my go-to wine.',
    }, 
  ]
  return (
    <section className="slider__wrapper">
       <h3 className="aboutUs-title">Reviews</h3>
    <Swiper
        spaceBetween={50}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        scrollbar={{
          hide: true,
        }}
        modules={[Autoplay, Scrollbar, Navigation]}
        className="sales_swiper"
      >
      {reviewsData.map((review, index) => (
        <SwiperSlide key={index}>
          <article className="reviews-container">
            {review.imgSrc && (
              <img
                className="reviews-img"
                alt=""
                src={review.imgSrc}
              />
            )}
            <div className="reviews__item">
              <p className="reviews__item--text">{review.text}</p>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
}

export default Reviews
