import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import jwt_decode from 'jwt-decode';
import { faPlay } from '@fortawesome/pro-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import parse from 'html-react-parser';
import PageContext from './page-context';
import { CDN_BASE_URL } from "js/cellmobs/constants";

export default function BlogFeature({study}) {

  let page = useContext(PageContext);

  return (
    <div data-overlay className="bg-primary-3 jarallax text-white"  style={{ 'paddingTop': '80px' }}>
    <img src={`${CDN_BASE_URL}${study?.primaryContent?.masterPath}`} alt="" className="jarallax-img opacity-60 section-image" />
    <section className="pb-0">
      <div className="container min-vh-30 pb-5">
        <div className="row justify-content-center text-center">
          <div className="col-xl-8 col-lg-10 col-md-11">
            <h1 className="display-3" data-aos="fade-up" data-aos-delay="100">
              {study?.title}
            </h1>
            <p className="lead" data-aos="fade-up" data-aos-delay="200">
              {study?.lead}
            </p>
            {/* <div className="d-flex flex-column flex-sm-row justify-content-center mt-4 mt-md-5" data-aos="fade-up" data-aos-delay="300">
              <a href={`/case-studies${study?.path}`} className="btn btn-outline-light btn-lg mx-sm-2 my-1 my-sm-0">Learn more</a>
            </div> */}
          </div>
        </div>
      </div>
      <div className="divider divider-bottom bg-white"></div>
    </section>
  </div>
  )
}