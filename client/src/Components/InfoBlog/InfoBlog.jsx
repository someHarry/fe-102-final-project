/* eslint-disable react/no-unescaped-entities */
import './InfoBlog.scss'

function InfoBlog() {
    return (
         <section>
      <h3 className="section-title section2-title">Our Services</h3>
      <div className="section2-block">
        <ul className="section-list-item section2-list-item">
          <li className="section-items section2-items active" data-id="Web Design">Web Design</li>
          <li className="section-items section2-items" data-id="Graphic Design">Graphic Design</li>
          <li className="section-items section2-items" data-id="Online Support">Online Support</li>
          <li className="section-items section2-items" data-id="App Design">App Design</li>
          <li className="section-items section2-items" data-id="Online Marketing">Online Marketing</li>
          <li className="section-items section2-items" data-id="Seo Service">Seo Service</li>
        </ul>
        <div className="section2-describe-content">
          {/* <img src="./img/section2/web-design.jpeg" alt="" class="section2-img section-hide section-active"
            data-id="Web Design">
          <img src="./img/section2/graphic-design.webp" alt="" class="section2-img section-hide "
            data-id="Graphic Design">
          <img src="./img/section2/online-support.jpg" alt="" class="section2-img section-hide "
            data-id="Online Support">
          <img src="./img/section2/app-design.png" alt="" class="section2-img section-hide " data-id="App Design">
          <img src="./img/section2/online-marketing.jpg" alt="" class="section2-img section-hide "
            data-id="Online Marketing">
          <img src="./img/section2/seo.jpg" alt="" class="section2-img section-hide " data-id="Seo Service"> */}

          <p className="section2-text section2-text-hide section2-text-active" data-id="Web Design">Web design is a branch
            of web development and a type of design whose task is to design web user interfaces for
            websites or web applications. Web designers: design the logical structure of web pages;
            think over the most convenient solutions for presenting information;</p>

          <p className="section2-text section2-text-hide" data-id="Graphic Design">Graphic design is an art and design
            activity for the combination and intensive use of the communication environment.
            Graphic design makes an innovative contribution to the development of the socio-economic and cultural
            spheres of life,
            shaping the impact of the modern landscape.</p>

          <p className="section2-text section2-text-hide" data-id="Online Support">Customer Service is a range of services
            designed to help customers use the product economically and correctly.
            This includes assistance with planning, installation, training, troubleshooting, maintenance, upgrades,
            and disposal of the product.</p>

          <p className="section2-text section2-text-hide" data-id="App Design">App design is an ongoing process comprising
            user experience (UX) and user interface (UI) elements.
            Designers ideate, define solutions, create the app's flow and structure, and make stylistic choices from
            colors to fonts.
            Designers base choices on user research and feedback.</p>

          <p className="section2-text section2-text-hide" data-id="Online Marketing">
            Internet-marketing — praktika ispol'zovaniya vsekh aspektov traditsionnogo marketinga v Internete,
            s tsel'yu prodazhi produkta ili uslugi pokupatelyam i upravleniya vzaimootnosheniyami s nimi.
            Internet marketing is the practice of using all aspects of traditional Internet marketing to sell
            a product or service to customers and manage relationships with them.</p>

          <p className="section2-text section2-text-hide" data-id="Seo Service">SEO services are search engine optimization
            services intended to increase visibility and ultimately organic
            search traffic to websites. These are often provided by agencies or freelancers who are experts in all
            aspects of SEO.</p>
        </div>
      </div>
    </section>
    )
       
}

export default InfoBlog