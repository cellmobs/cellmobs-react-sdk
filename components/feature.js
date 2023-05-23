import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from '@fortawesome/pro-solid-svg-icons'


export default function Feature() {

  return (
    <div data-overlay className="bg-primary-3 jarallax text-white" data-speed="0.2" style={{ 'paddingTop': '80px' }}>
      <img src="https://cdn.cellmobs.com/2029399/static/images/bg-bluesky2.jpg" alt="Background" className="jarallax-img opacity-70 section-image" />
      <section className="pb-0">
        <div className="container pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8 col-lg-10 col-md-11">
              <h1 className="display-3" data-aos="fade-up" data-aos-delay="100">
                The Platform<br />for Start-Ups
              </h1>
              <p className="lead" data-aos="fade-up" data-aos-delay="200">
              </p>
              <div className="d-flex flex-sm-row justify-content-center mt-4 mt-md-5" data-aos="fade-up" data-aos-delay="300">
                <a href="/developers" className="btn btn-primary btn-lg mx-sm-2 my-1 my-sm-0">Developers</a>
                <a href="/blog" className="btn btn-outline-light btn-lg mx-sm-2 my-1 my-sm-0">Blog</a>
              </div>
            </div>
          </div>
        </div>
        <div className="divider divider-bottom bg-white"></div>
      </section>
    </div>

  )
}