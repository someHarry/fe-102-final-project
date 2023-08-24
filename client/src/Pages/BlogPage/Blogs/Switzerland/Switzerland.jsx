import React from 'react'

function Switzerland() {
  return (
    <div className="container blog">
      <h1 className="blog__title">Switzerland</h1>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/switzerland-1.jpeg`}
          alt="switzerland"
          width="848"
          height="502"
        />
      </div>
      <p className="blog__text">
        Switzerland is a small but incredibly beautiful and culturally rich country located in Central Europe. It is
        known for its mountains, lakes, watchmaking, chocolate, and, of course, winemaking.
      </p>
      <p className="blog__text">
        Switzerland is one of the few countries where vineyards thrive in alpine conditions. While it may not be as
        renowned for its wines as countries like France or Italy, it has its unique traditions and wine-producing
        regions.
      </p>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/switzerland-2.jpeg`}
          alt="switzerland"
          width="555"
          height="370"
        />
      </div>
      <h3 className="blog__subtitle">Key wine regions in Switzerland include:</h3>
      <ul className="blog__list">
        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Valais:</span>This region, along the Rhône River, is known for its white
            wines, including Fendant and Petite Arvine. However, wine production in this region is relatively small.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Vaud:</span>The Vaud region in western Switzerland specializes in
            producing both red and white wines, including Pinot Noir and Gamay.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Ticino:</span>Located in the south of Switzerland and surrounded by
            Italy, Ticino is known for its Italian influences. Red, white, and rosé wines are produced here, including
            Merlot, Merlotto, and Malvasia.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Graubünden:</span> This region in the eastern part of the country also
            has small vineyards producing white and red wines such as Pinot Gris and Rondo.
          </p>
        </li>
      </ul>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/switzerland-3.webp`}
          alt="switzerland"
          width="700"
          height="467"
        />
      </div>
      <p className="blog__text">
        The structure of winemaking in Switzerland differs from many other countries. Most winemakers are small
        family-owned operations that often produce small batches of high-quality wine. This uniqueness makes Swiss wines
        distinctive and often hard to come by outside the country.
      </p>
      <p className="blog__text">
        It&apos;s important to note that due to the alpine climate and limited vineyard areas, Switzerland is not a
        major player on the global winemaking stage. However, its wines have their own charm and appeal to those seeking
        to explore unique local wine traditions.
      </p>
    </div>
  )
}

export default Switzerland
