import React from 'react'

function BlogPage() {
  return (
    <div>
      <h1>Wine Blog</h1>
      <div>
        <ul>
          <li>
            <img src={`${process.env.PUBLIC_URL}/pics/blog_page/jura.webp`} alt="jira" width="500" height="400" />
            <h3>Jura</h3>
            <p>
              Jura is one of the most renowned regions in France, celebrated for its winemaking and production of
              high-quality wines. Situated in the eastern part of France, in the department of Jura, this region boasts
              a rich <span>history...</span>
            </p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/pics/blog_page/porto.jpeg`} alt="porto" width="500" height="400" />
            <h3>Porto</h3>
            <p>
              Porto is a major city located in the northwest of Portugal, situated on the banks of the Douro River. This
              city is renowned for its rich history, cultural heritage, and, of course, its winemaking tradition. One of
              Porto&apos;s distinctive features in the realm of winemaking is the <span>production...</span>
            </p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/pics/blog_page/priorat.jpeg`} alt="priorat" width="500" height="400" />
            <h3>Priorat</h3>
            <p>
              The Priorat region is a renowned wine-producing area in Spain, located in the province of Tarragona within
              the autonomous community of Catalonia. This region is famous for its high-quality wines, as well as its
              unique geology and climate, which significantly <span>influence...</span>
            </p>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/pics/blog_page/sicilia.webp`} alt="sicily" width="500" height="400" />
            <h3>Sicily</h3>
            <p>
              Sicily is the largest island in the Mediterranean Sea, located to the south of Italy. This region is rich
              in history, culture, and, of course, winemaking. Sicilian wines have a long history and are known for
              their diversity and quality. Sicily is considered one of the oldest wine-producing <span>regions...</span>
            </p>
          </li>
          <li>
            <img
              src={`${process.env.PUBLIC_URL}/pics/blog_page/switzerland.jpeg`}
              alt="switzerland"
              width="500"
              height="400"
            />
            <h3>Switzerland</h3>
            <p>
              Switzerland is a small but incredibly beautiful and culturally rich country located in Central Europe. It
              is known for its mountains, lakes, watchmaking, chocolate, and, of course, winemaking. Switzerland is one
              of the few countries <span>where...</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BlogPage
