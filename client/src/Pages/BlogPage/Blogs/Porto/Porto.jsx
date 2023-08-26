import React from 'react'

function Porto() {
  return (
    <div className="container blog">
      <h1 className="blog__title">Porto</h1>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/porto-1.jpeg`}
          alt="porto"
          width="1000"
          height="625"
        />
      </div>
      <p className="blog__text">
        Porto is a major city located in the northwest of Portugal, situated on the banks of the Douro River. This city
        is renowned for its rich history, cultural heritage, and, of course, its winemaking tradition. One of
        Porto&apos;s distinctive features in the realm of winemaking is the production of port wine.
      </p>
      <p className="blog__text">
        Port wine is a fortified wine with a high alcohol content that is produced in the Douro region and its
        surrounding areas. This type of wine got its name from the Portuguese city of Porto. It&apos;s important to note
        that the term &apos;port wine&apos; can only be used for wines produced in this region; wines of similar styles
        produced elsewhere are typically referred to as &apos;fortified wine.&apos;
      </p>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/porto-2.jpeg`}
          alt="porto"
          width="1000"
          height="650"
        />
      </div>
      <h3 className="blog__subtitle">The production of port wine has its own characteristics:</h3>

      <ul className="blog__list">
        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Grape Varieties: </span> Various grape varieties such as Touriga
            Nacional, Touriga Franca, Tinta Roriz, Tinta Cao, and others are used in port wine production. Grape
            selection and blending play a crucial role in shaping the wine&apos;s character.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Fermentation Process:</span> The fermentation of grapes occurs with the
            addition of spirits, which leaves residual sugars in the wine and creates a sweeter and stronger beverage.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Aging in Barrels:</span> After fermentation, port wine is aged in oak
            barrels of different sizes and ages. This aging process imparts depth of flavor and aroma to the wine.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Blending:</span> One of the unique aspects of port wine is its blending
            from different batches of wines of different years and grape varieties. This helps achieve consistency in
            taste and style over time.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Types of Port Wine:</span> There are several styles of port wine,
            including Ruby Port, Tawny Port, Rosé Port, White Port, and others. Each style has its own characteristics
            related to age, color, taste, and aroma.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Storage and Consumption:</span> Port wine, especially the aged styles,
            can be stored for many years, gaining new flavor nuances over time. It pairs well with cheeses, chocolates,
            and is often enjoyed as a digestif after dinner.
          </p>
        </li>
      </ul>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/porto-3.jpeg`}
          alt="porto"
          width="800"
          height="550"
        />
      </div>
      <p className="blog__text">
        The city of Porto and its surroundings also offer numerous winery tours where visitors can learn more about the
        port wine production process, visit wine cellars and tasting rooms, and enjoy the beautiful landscapes of the
        Douro region. Thus, port wine stands as one of the prides of the Porto region and continues to capture the
        attention of wine enthusiasts from around the world.
      </p>
    </div>
  )
}

export default Porto
