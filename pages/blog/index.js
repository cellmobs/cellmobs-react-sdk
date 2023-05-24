import Layout from 'layouts';
import Header from 'components/header';
import Navbar from 'components/navbar';
import PageContext from 'components/page-context';
import parse from 'html-react-parser';
import { isError } from 'js/cellmobs/common';
import { renderPage, listPages } from 'js/cellmobs/api/page';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnalytics, faCommentsAltDollar, faHeadSideHeadphones, faUsersClass, faPhotoVideo, faCreditCard } from '@fortawesome/pro-duotone-svg-icons'
import { jwtIsValid } from "js/cellmobs/common";
import Cookies from 'universal-cookie';
import BlogGrid from 'components/blog-grid';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_BASE_URL } from 'js/cellmobs/constants';
import { useParallax, Parallax } from 'react-scroll-parallax';

export async function getServerSideProps({ req, params }) {
  const page = await renderPage('/blog')
  const pages = await listPages({
    page: 0,
    size: 12,
    entityStatuses: 'APPROVED',
    tagStrings: 'article',
    sortBy: 'datePublished',
    sortDirection: 'DESC'
  });

  if (isError(page)) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  return {
    props: {
      page: page,
      list: pages.content,
      params: {}
    }
  }
}

export default function Blog(props) {

  const { page, list
   } = props


  let parameters = {
    page: 0,
    size: 12,
    tagStrings: 'article',
    sortBy: 'datePublished',
    sortDirection: 'DESC'
  }
  const [params, setParams] = useState(parameters);
  const [pages, setPages] = useState(list);

  useEffect(() => {
    listPages(parameters).then(res=>{
      setPages(res.content) 
    });

  }, [params])
  return (
    <PageContext.Provider value={props}>
      <Layout>
        <Header />
        <Navbar title="Cellmobs" logo="lite" text="dark" />
        <div data-overlay className="bg-primary-3 jarallax text-white" data-jarallax-off data-speed="0.2" style={{ 'paddingTop': '80px' }} >
          {page.primaryContent? 
          <img src={`${CDN_BASE_URL}${page.primaryContent?.masterPath}`} alt="" className="jarallax-img opacity-60 section-image"  />
          :           
          <img src="https://cdn.cellmobs.com/cellmobs-dev/master_pkbakqlg57-website.jpeg" alt="" className="jarallax-img opacity-60 section-image"  />
          }
        <section className="pb-0">
            <div className="container min-vh-30 pb-5">
              <div className="row justify-content-center text-center">
                <div className="col-xl-8 col-lg-10 col-md-11">
                  <h1 className="display-3" data-aos="fade-up" data-aos-delay="100">
                    {page.title}
                  </h1>
                  <p className="lead" data-aos="fade-up" data-aos-delay="200">
                    {page.lead}
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
        <section className="pb-0">
          <div className="container">
            <div className="row">
              <BlogGrid pages={pages} />
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">Accelerate your launch</h3>
                <div className="lead">Save hours on design and development and launch faster.</div>
              </div>
            </div>
            <div className="row justify-content-center text-center mt-md-n4">
              <div className="col-auto">
                <a href="/signup" className="btn btn-primary btn-lg">Ok, let's go!</a>
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-primary-3 mt-5"></div>
        </section>

      </Layout>
    </PageContext.Provider>
  )
}

Blog.defaultProps = {
  title: 'Blog'
}
