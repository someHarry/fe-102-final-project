import React from 'react'

function Priorat() {
  return (
    <div className="container blog">
      <h1 className="blog__title">Priorat</h1>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/priorat-1.jpeg`}
          alt="priorat"
          width="1000"
          height="625"
        />
      </div>
      <p className="blog__text">
        The Priorat region is a renowned wine-producing area in Spain, located in the province of Tarragona within the
        autonomous community of Catalonia. This region is famous for its high-quality wines, as well as its unique
        geology and climate, which significantly influence the character of the wines.
      </p>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/priorat-2.jpeg`}
          alt="priorat"
          width="1000"
          height="650"
        />
      </div>
      <h3 className="blog__subtitle">Key features of the Priorat region and its wines:</h3>

      <ul className="blog__list">
        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Geology:</span>
            The mountainous terrain of Priorat consists of complex slate soils, which impart a distinctive minerality
            and complexity to the wines. These soils also limit the vineyard yields, contributing to the concentration
            of flavors and aromas in the wines.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Climate:</span> Priorat experiences a subtropical Mediterranean climate
            with hot and dry summers and mild winters. This climate allows grapes to ripen well, concentrating sugars
            and flavors.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Grape Varieties:</span>Grapes grown in Priorat include both traditional
            Spanish varieties (such as Garnacha, known as Grenache) and international varieties (like Carinyena, also
            known as Carignan, and Syrah). This grape mix adds diversity and depth to the wines.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Old Vineyards:</span> Many vineyards in Priorat are quite old, some even
            exceeding 100 years. Old vines can yield more concentrated and complex wines.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Winemaking Techniques:</span> Traditional winemaking methods, such as
            hand-harvesting and extended maceration, are often employed in Priorat. These methods help extract rich
            aromas and tannins from the grapes.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Classification:</span> Wines from Priorat are typically classified into
            two categories: DOCa (Denominación de Origen Calificada) and DO (Denominación de Origen). DOCa signifies the
            highest quality and control status, and it includes stricter production rules.
          </p>
        </li>
      </ul>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/priorat-3.jpeg`}
          alt="priorat"
          width="800"
          height="550"
        />
      </div>
      <p className="blog__text">
        The cumulative effect of these factors results in Priorat wines known for their intensity, depth of flavor,
        minerality, and the ability to age gracefully in the bottle.
      </p>
      <p className="blog__text">
        They can be powerful and structured, with vibrant fruit notes and hints of spices. Priorat wines often attract
        the interest of wine enthusiasts and collectors.
      </p>
    </div>
  )
}

export default Priorat
