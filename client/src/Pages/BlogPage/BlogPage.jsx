import './BlogPage.scss'

function BlogPage() {
  return (
    <div className="container wine-blog">
      <h1 className="wine-blog__title">Wine Blog</h1>
      <div className="wine-blog__wrapper">
        <ul className="wine-blog__list">
          <li className="wine-blog__item">
            <img
              className="wine-blog__img"
              src={`${process.env.PUBLIC_URL}/pics/blog_page/jura.webp`}
              alt="jira"
              width="500"
              height="400"
            />
            <div className="wine-blog__info">
              <h3 className="wine-blog__subtitle">Jura</h3>
              <p className="wine-blog__text">
                Jura is one of the most renowned regions in France, celebrated for its winemaking and production of
                high-quality wines. Situated in the eastern part of France, in the department of Jura, this region
                boasts a rich{' '}
                <a href="/blog/jura" className="wine-blog__accent">
                  history...
                </a>
              </p>
            </div>
          </li>
          <li className="wine-blog__item">
            <img
              className="wine-blog__img"
              src={`${process.env.PUBLIC_URL}/pics/blog_page/porto.jpeg`}
              alt="porto"
              width="500"
              height="400"
            />
            <div className="wine-blog__info">
              <h3 className="wine-blog__subtitle">Porto</h3>
              <p className="wine-blog__text">
                Porto is a major city located in the northwest of Portugal, situated on the banks of the Douro River.
                This city is renowned for its rich history, cultural heritage, and, of course, its winemaking tradition.
                One of Porto&apos;s distinctive features in the realm of winemaking is the{' '}
                <a href="/blog/porto" className="wine-blog__accent">
                  production...
                </a>
              </p>
            </div>
          </li>
          <li className="wine-blog__item">
            <img
              className="wine-blog__img"
              src={`${process.env.PUBLIC_URL}/pics/blog_page/priorat.jpeg`}
              alt="priorat"
              width="500"
              height="400"
            />
            <div className="wine-blog__info">
              <h3 className="wine-blog__subtitle">Priorat</h3>
              <p className="wine-blog__text">
                The Priorat region is a renowned wine-producing area in Spain, located in the province of Tarragona
                within the autonomous community of Catalonia. This region is famous for its high-quality wines, as well
                as its unique geology and climate, which significantly{' '}
                <a href="/blog/priorat" className="wine-blog__accent">
                  influence...
                </a>
              </p>
            </div>
          </li>
          <li className="wine-blog__item">
            <img
              className="wine-blog__img"
              src={`${process.env.PUBLIC_URL}/pics/blog_page/sicilia.webp`}
              alt="sicily"
              width="500"
              height="400"
            />
            <div className="wine-blog__info">
              <h3 className="wine-blog__subtitle">Sicily</h3>
              <p className="wine-blog__text">
                Sicily is the largest island in the Mediterranean Sea, located to the south of Italy. This region is
                rich in history, culture, and, of course, winemaking. Sicilian wines have a long history and are known
                for their diversity and quality. Sicily is considered one of the oldest wine-producing{' '}
                <a href="/blog/sicily" className="wine-blog__accent">
                  regions...
                </a>
              </p>
            </div>
          </li>
          <li className="wine-blog__item">
            <img
              className="wine-blog__img"
              src={`${process.env.PUBLIC_URL}/pics/blog_page/switzerland.jpeg`}
              alt="switzerland"
              width="500"
              height="400"
            />
            <div className="wine-blog__info">
              <h3 className="wine-blog__subtitle">Switzerland</h3>
              <p className="wine-blog__text">
                Switzerland is a small but incredibly beautiful and culturally rich country located in Central Europe.
                It is known for its mountains, lakes, watchmaking, chocolate, and, of course, winemaking. Switzerland is
                one of the few countries{' '}
                <a href="/blog/switzerland" className="wine-blog__accent">
                  where...
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BlogPage
