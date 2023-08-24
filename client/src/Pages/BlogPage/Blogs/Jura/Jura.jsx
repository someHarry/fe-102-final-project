import '../Blogs.scss'

function Jura() {
  return (
    <div className="container blog">
      <h1 className="blog__title">Jura</h1>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/jura-1.jpeg`}
          alt="jira"
          width="1000"
          height="625"
        />
      </div>
      <p className="blog__text">
        Jura is one of the most renowned regions in France, celebrated for its winemaking and production of high-quality
        wines. Situated in the eastern part of France, in the department of Jura, this region boasts a rich history of
        winemaking and is particularly famous for its wines made from the Chardonnay grape variety.
      </p>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/jura-3.jpeg`}
          alt="jira"
          width="550"
          height="451"
        />
      </div>
      <h3 className="blog__subtitle">Key aspects of the Jura region related to winemaking:</h3>

      <ul className="blog__list">
        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Chardonnay:</span> The primary grape variety cultivated in Jura is
            Chardonnay. It forms the foundation for most of the white wines produced in the region. Chardonnay imparts
            distinctive aromas of citrus, apples, almonds, and honey to Jura wines.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Criots System:</span> Jura employs a unique vine cultivation system
            known as &quot;criots.&quot; This method involves growing vines on steep slopes, ensuring optimal sun
            exposure and ventilation for the grapes.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Distinctive Wine Styles:</span> The Jura region produces a variety of
            wine styles. For instance, grape juices undergo natural fermentation in oak barrels, creating what are
            referred to as &quot;sous voile&quot; wines, which possess a unique character.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Savagnin and Poulsard:</span> In addition to Chardonnay-based white
            wines, Jura also produces red wines, including those made from the Savagnin and Poulsard grape varieties.
            These wines offer rich aromas and deep flavors.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Cremant de Jura:</span> The region is also known for producing sparkling
            wines called Cremant de Jura. These wines are crafted using the traditional method of fermentation and are
            characterized by their refreshing acidity and delicate bubbles.
          </p>
        </li>

        <li className="blog__item">
          <p className="blog__text">
            <span className="blog__accent-text">Appellation Contrôlée:</span> Jura wines often carry the AOC
            (Appellation d&quot;Origine Contrôlée) label, guaranteeing their high quality and adherence to strict
            production standards.
          </p>
        </li>
      </ul>
      <div className="blog__img-wrapper">
        <img
          className="blog__img"
          src={`${process.env.PUBLIC_URL}/pics/blog_page/jura-2.webp`}
          alt="jira"
          width="1000"
          height="500"
        />
      </div>
      <p className="blog__text">
        In essence, the Jura region is a haven for wine enthusiasts, offering unique and authentic wines that embody the
        richness of French winemaking traditions and history.
      </p>
    </div>
  )
}

export default Jura
