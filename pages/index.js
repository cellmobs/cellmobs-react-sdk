import Layout from 'layouts';
import Feature from '../components/feature';
import { getPrimaryContent, parsePageSection, isError } from '../js/cellmobs/common';
import PageContext from '../components/page-context';
import { renderPage, listPages } from 'js/cellmobs/api/page';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faTachometerAltFast, faShield, faArrowsH, faShapes, faPlug, faCommentsAltDollar, faHeadSideHeadphones, faUsersClass, faPhotoVideo, faCreditCard } from '@fortawesome/pro-duotone-svg-icons'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
import { jwtIsValid } from "js/cellmobs/common";
import Cookies from 'universal-cookie';
import FormContact from '../components/form-contact';
import BlogCard from 'components/blog-card';
import { CDN_BASE_URL } from 'js/cellmobs/constants';

export async function getServerSideProps({ req }) {
  const page = await renderPage('/')
  const pages = await listPages({
    page: 0,
    size: 1,
    // fields: 'sections,sourceUrl,sourceName,summary',
    // includeFields: false,
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
  // const cookies = new Cookies(req.headers.cookie);
  // if (!jwtIsValid(cookies.get('cmauth'))) {
  //   return {
  //     redirect: {
  //       destination: '/login',
  //       permanent: false,
  //     },
  //   };
  // }
  return {
    props: {
      page: page,
      article: pages?.content[0],
      params: {}
    }
  }
}

export default function Home(props) {

  const { page, article } = props

  return (
    <PageContext.Provider value={props}>
      <Layout>
        <Feature />
        <section>
          <div className="container" >
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4 cellmobs-editable" data-id="title" data-meta="TEXT">
                  {parsePageSection(
                    page,
                    'title',
                    'Your success is our success'
                  )}
                </h3>
                <div className="lead cellmobs-editable" data-id="subtitle" data-meta="HTML">
                  At Cellmobs, we're always on your side. As an entrepreneur, you're often in it alone when it comes to executing your ideas. We're here to help you every step of the way.
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-6 col-lg-4 mb-4 mb-md-5" data-aos="fade-up" data-aos-delay="100">
                <div className="mx-xl-4">
                  <FontAwesomeIcon icon={faCoins} size="3x" color="#2b90d8" className="mb-4" />
                  <h5>Cost effective</h5>
                  <div className="cellmobs-editable" data-id="features1" data-meta="TEXT">
                    Little or no cash to bootstrap your idea? Get enterprise grade features.
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-md-5" data-aos="fade-up" data-aos-delay="200">
                <div className="mx-xl-4">
                  <FontAwesomeIcon icon={faTachometerAltFast} size="3x" color="#2b90d8" className="mb-4" />
                  <h5>Speed to market</h5>
                  <div className="cellmobs-editable" data-id="features2" data-meta="TEXT">
                    We developed the most common features entrepreneurs need so you don’t have to.
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-md-5" data-aos="fade-up" data-aos-delay="300">
                <div className="mx-xl-4">
                  <FontAwesomeIcon icon={faShield} size="3x" color="#2b90d8" className="mb-4" />
                  <h5>Reliable Technology</h5>
                  <p>
                    Built on a solid foundation of best in class open source technologies.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-md-5" data-aos="fade-up" data-aos-delay="400">
                <div className="mx-xl-4">
                  <FontAwesomeIcon icon={faArrowsH} size="3x" color="#2b90d8" className="mb-4" />
                  <h5>Ready for Scale</h5>
                  <p>
                    Be ready for success. No need to pay in advance for future customers.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-md-5" data-aos="fade-up" data-aos-delay="500">
                <div className="mx-xl-4">
                  <FontAwesomeIcon icon={faShapes} size="3x" color="#2b90d8" className="mb-4" />
                  <h5>Customize Everything </h5>
                  <p>
                    Don’t settle for a handful of default templates.  Define your own rules.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-md-5" data-aos="fade-up" data-aos-delay="600">
                <div className="mx-xl-4">
                  <FontAwesomeIcon icon={faPlug} size="3x" color="#2b90d8" className="mb-4" />
                  <h5>Easy to Integrate</h5>
                  <p>
                    Choose from over 30 integrations to connect with your favorite cloud apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-0 bg-primary text-white row no-gutters">
          <div className="col-lg-5 col-xl-6">
            <img
              src="images/pages/from-concept-to-launch.jpg"
              alt={page.primaryContentAlt || 'Image'}
              className="w-100 h-100 section-image cellmobs-editable"
              data-id={page.id}
              data-meta="IMAGE"
            />
            <div className="divider divider-side bg-primary d-none d-lg-block"></div>
          </div>
          <div className="col-lg-7 col-xl-6">
            <section>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col col-md-10 col-xl-9">
                    <h3 className="h1 cellmobs-editable" data-id="image-title" data-meta="TEXT">
                      {parsePageSection(
                        page,
                        'image-title',
                        ' &ldquo;We are working at almost twice the capacity&rdquo;'
                      )}
                    </h3>
                    <div className="lead cellmobs-editable" data-id="image-text" data-meta="HTML">
                      {parsePageSection(
                        page,
                        'image-text',
                        'Non pulvinar neque laoreet suspendisse interdum Catelyn libero id. Olenna imp leo in vitae turpis massa. Sapien habitant Tyrion.'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">Connect the Dots</h3>
                <div className="lead">
                  Cellmobs is a platform for deploying and managing powerful software modules that can be used in any industry and by anyone.
                  Our a la carte modules can be customized for a broad spectrum of modern business use cases: powerful enough to scale in complexity, that grows with you from day one.
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <FontAwesomeIcon icon={faCommentsAltDollar} size="5x" color="#9c0d14" className="ml-3 mb-4" />
                    {/* <img src="assets/img/square-1.jpg" alt="Image" className="img-fluid rounded" /> */}
                  </div>
                  <div className="col">
                    <h4>Design Marketplaces</h4>
                    <p>

                      The world is changing and evolving, and businesses are struggling to cope with that. Sellers and buyers need a marketplace that is easy to use and navigate.
                      Buyer picks, Buyer and Seller both agree on terms, or Market picks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <FontAwesomeIcon icon={faUsersClass} size="5x" color="#9c0d14" className="ml-3 mb-4" />
                  </div>
                  <div className="col">
                    <h4>Build Community</h4>
                    <p>
                      Create, build, and scale your online community.
                      You can create a mobile-friendly website with a built-in CRM, monetize it with ads and offers,
                      then manage and grow your community from anywhere in the world.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <FontAwesomeIcon icon={faCreditCard} size="5x" color="#9c0d14" className="ml-3 mb-4" />
                  </div>
                  <div className="col">
                    <h4>Drive E-Commerce</h4>
                    <p>
                      Support online purchases and build customer loyalty.
                      We make it easy for sellers to accept the most popular payment providers,
                      and give their customers a seamless checkout experience across all devices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0">
                    <FontAwesomeIcon icon={faHeadSideHeadphones} size="5x" color="#9c0d14" className="ml-3 mb-4" />
                  </div>
                  <div className="col">
                    <h4>Publish Great Content</h4>
                    <p>
                      Whether you're looking to grow your app, start a new blog,
                      or build your social media following, we've got you covered.
                      We can even aggregate content for you or post on your behalf!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light o-hidden">
          <div className="container">
            <div className="row align-items-center justify-content-around text-center text-lg-left">
              <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
                <div data-aos="fade-in" data-aos-offset="250">
                  <h2 className="h1">Drastically Reduce Time-to-Market (2-3X) while lowering costs</h2>
                  <p className="lead">
                    Support complex use cases.
                    Cellmobs eases service fragmentation through intuitive and robust integrations with commonly used cloud applications.
                  </p>
                </div>
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4" data-aos="fade-left" data-aos-delay="100">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <FontAwesomeIcon icon={faCheck} size="2x" color="#ffffff" className="m-2 icon icon-xs bg-success" />
                      </div>
                      <h6 className="mb-0 ml-3">Easy to Start</h6>
                    </div>
                  </div>
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4" data-aos="fade-left" data-aos-delay="200">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <FontAwesomeIcon icon={faCheck} size="2x" color="#ffffff" className="m-2 icon icon-xs bg-success" />
                      </div>
                      <h6 className="mb-0 ml-3">Modern Architecture</h6>
                    </div>
                  </div>
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4" data-aos="fade-left" data-aos-delay="300">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <FontAwesomeIcon icon={faCheck} size="2x" color="#ffffff" className="m-2 icon icon-xs bg-success" />
                      </div>
                      <h6 className="mb-0 ml-3">Modular Components</h6>
                    </div>
                  </div>
                  <div className="mb-3 mr-4 ml-lg-0 mr-lg-4" data-aos="fade-left" data-aos-delay="400">
                    <div className="d-flex align-items-center">
                      <div className="rounded-circle bg-success-alt">
                        <FontAwesomeIcon icon={faCheck} size="2x" color="#ffffff" className="m-2 icon icon-xs bg-success" />
                      </div>
                      <h6 className="mb-0 ml-3">REST API</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 col-lg-6 col-xl-5 order-lg-1" data-aos="fade-in" data-aos-offset="250">
                <img src="images/pages/time-to-market.png" alt="Image" className="img-fluid" />

              </div>
            </div>
          </div>
        </section>



        <section className="bg-light o-hidden">
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div className="col-md-9 col-lg-5 mb-4 mb-md-5 mb-lg-0 text-center text-lg-left" data-aos="fade-right">
                <div className="alert bg-secondary rounded-lg d-inline-block mb-4">
                  <div className="d-flex align-items-center">
                    <div className="badge badge-pill badge-success">New</div>
                    <div className="mx-3">Cellmobs Developer Portal</div>
                  </div>
                </div>
                <h3 className="h1">Check out what's New!</h3>
                <p className="lead">{article.description}</p>
              </div>
              <div className="col-md-7 col-lg-5 col-xl-4" data-aos="fade-left">
                  <div className="card h-100 shadow-lg hover-box-shadow">
                    <a href="#" className="d-block bg-gradient rounded-top">
                    <img className="card-img-top hover-fade-out" src={`${CDN_BASE_URL}${article.primaryContent?.path}`} alt={article.primaryContent?.name} />
                    </a>
                    <div className="card-body">
                        <h3>{article.title}</h3>
                        <p style={{'minHeight': '70px', 'overflow': 'hidden'}}>
                            {article.lead}
                        </p>
                        <a href={`${article.path}`} className="stretched-link">Read Story</a>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                      <a href="#" className="badge badge-pill badge-info">Announcements</a>
                    </div>
                </div>

              </div>
            </div>
          </div>
          <div className="divider position-absolute bottom bg-primary-3"></div>
        </section>


        <section className="bg-primary-3 pb-0">
          <div className="container">
            <div className="text-white">
              <div className="row section-title justify-content-center text-center">
                <div className="col-md-9 col-lg-8 col-xl-7">
                  <h3 className="display-4">Get to know Cellmobs</h3>
                  <div className="lead">Demo our enterprise level cross platform app builder and learn more about how we can get you up and running at a fraction of the cost.</div>
                </div>
              </div>
            </div>
            <FormContact leadSource="home-page" />
          </div>
        </section>

      </Layout>
    </PageContext.Provider>
  )
}
