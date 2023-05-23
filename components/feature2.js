import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import jwt_decode from 'jwt-decode';
import { faPlay } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parse from 'html-react-parser';
import PageContext from '../components/page-context';

export default function Feature2() {

  let page = useContext(PageContext);

  useEffect(() => {
  }, []);

  return (
    <div data-overlay className="bg-primary-3 jarallax text-white" data-jarallax data-speed="0.2">
      <img src="assets/img/heros/hero-3.jpg" alt="Background" className="jarallax-img opacity-30 section-image" />
      <section className="pb-0" id="feature">
        <div className="container pb-5">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8 col-lg-10 col-md-11">
                <h1 className="display-3" data-aos="fade-up" data-aos-delay="100" data-meta="section.title" data-id="feature.title">
                {parse(page.sections.feature?.content?.title || 'title')}
                </h1>
                <p className="lead" data-aos="fade-up" data-aos-delay="200"  data-meta="section.title" data-id="feature.lead">
                {parse(page.sections.feature?.content?.lead || 'lead')}
                 </p>
              {/* <div className="d-flex flex-column flex-sm-row justify-content-center mt-4 mt-md-5" data-aos="fade-up" data-aos-delay="300">
                <a href="#" className="btn btn-primary btn-lg mx-sm-2 my-1 my-sm-0">Action 1</a>
                <a href="#" className="btn btn-outline-light btn-lg mx-sm-2 my-1 my-sm-0">Action 2</a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="divider divider-bottom bg-primary-3"></div>
      </section>
    </div>

  )
}