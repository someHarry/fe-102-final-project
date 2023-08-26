import React from 'react'

function Sicily() {
  return (
    <div className="container blog">
      <h1 className="blog__title">Sicily</h1>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/sicily-1.jpeg`}
          alt="sicily"
          width="600"
          height="400"
        />
      </div>
      <p className="blog__text">
        Sicily is the largest island in the Mediterranean Sea, located to the south of Italy. This region is rich in
        history, culture, and, of course, winemaking.
      </p>
      <p className="blog__text">
        Sicilian wines have a long history and are known for their diversity and quality. Sicily is considered one of
        the oldest wine-producing regions in the world. Grape cultivation has been practiced here for over three
        millennia. The grape varieties grown on the island include both local and international varieties.
      </p>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/sicily-2.jpeg`}
          alt="sicily"
          width="860"
          height="638"
        />
      </div>
      <h3 className="blog__subtitle">Some of the most well-known wine regions of Sicily are:</h3>
      <ul className="blog__list">
        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Etna:</span>A wine region located on the slopes of Mount Etna, known for
            its wines made from the Nerello Mascalese grape. Wines from this region have a unique mineral character, as
            well as freshness and complexity.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Marsala:</span>This renowned region specializes in producing a unique
            type of wine called &quot;Marsala.&quot; Marsala is a fortified wine somewhat similar to port, created
            through a lengthy oxidation process.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Pantelleria:</span> This small island is famous for its sweet wine known
            as &quot;Passito di Pantelleria.&quot; This wine is made from the Zibibbo grape, which is dried before
            production, imparting sweetness and rich aroma.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Moscato di Sicilia:</span> A sweet and aromatic wine produced from the
            Moscato di Alessandria grape. It features distinct floral and fruity notes.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Cerasuolo di Vittoria:</span> This is a red wine produced in the
            Cerasuolo di Vittoria region. It&apos;s made from a blend of local grape varieties and is known for its
            balance and elegance.
          </p>
        </li>
      </ul>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/sicily-3.jpeg`}
          alt="sicily"
          width="800"
          height="550"
        />
      </div>
      <p className="blog__text">
        Sicilian wines come in a variety of styles, from whites to reds, and from dry to sweet. The island is also known
        for its indigenous grape varieties that lend a unique character to the wines. The weather, climate, and diverse
        soil conditions create a favorable environment for growing a wide range of grape varieties.
      </p>
      <p className="blog__text">
        Sicilian wines hold not only economic importance for the region but also represent a part of its cultural
        heritage. They have gained popularity worldwide due to their quality and distinctive character, reflecting the
        richness and diversity of this remarkable island.
      </p>
    </div>
  )
}

export default Sicily
