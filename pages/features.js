import Header from '../components/header';
import Navbar from '../components/navbar';
import Layout from 'layouts';
import Footer from '../components/footer';
import PageContext from '../components/page-context';
import parse from 'html-react-parser';
import Feature2 from '../components/feature2';
import { isError } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';

export async function getServerSideProps(context) {
  const page = await renderPage('/features')
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
      params: {}
    }
  }
}


export default function Features(props) {

  const { page } = props

  return (
    <PageContext.Provider value={props}>
      <Layout>
        <section className="bg-primary-3 text-white pb-0 o-hidden">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-5 col-lg-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-aos="fade-right">
                <h1 className="display-3">Build fast, launch quickly.</h1>
                <p className="lead">Launch your SaaS in style with this suite of carefully crafted pages and components.</p>
                <a href="#" className="btn btn-lg btn-primary">Download Now</a>
              </div>
              <div className="col" data-aos="fade-left" data-aos-delay="250">
                <img src="assets/img/desktop-app/desktop-app-2.jpg" alt="Screenshot" className="img-fluid rounded shadow-lg border" />
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-white"></div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0">
                <div>
                  <img src="assets/img/icons/theme/general/thunder-move.svg" alt="Lightning icon" className="icon bg-primary" data-inject-svg />
                  <h5 className="mt-4">Suits Your Style</h5>
                  <div>
                    Drogon sed ut perspiciatis unde omnis iste error sit voluptatem accusantium doloremque laudantium, totam aperiam, eaque Arya.
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div>
                  <img src="assets/img/icons/theme/general/bookmark.svg" alt="Bookmark icon" className="icon bg-primary" data-inject-svg />
                  <h5 className="mt-4">Well Documented</h5>
                  <div>
                    Duis convallis convallis tellus imp interdum. Non diam phasellus vestibulum lorem sed risus ultricies Tyrion. Enim blandit volutpat.
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div>
                  <img src="assets/img/icons/theme/design/select.svg" alt="Selection interface icon" className="icon bg-primary" data-inject-svg />
                  <h5 className="mt-4">Highly Customizable</h5>
                  <div>
                    Eunuch sed blandit libero volutpat sed cras. Cersei quis imperdiet tincidunt unuch pulvinar sapien. Habitasse platea Davos vestibulum.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light o-hidden">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">Great Functionality</h3>
                <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-pills lead mb-4 mb-md-5 justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Groups</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Dark Mode</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Feed</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pl-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">A great feature you'll <mark data-aos="highlight-text"
                                                    data-aos-delay="250">love to use</mark></h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/male-4.jpg" alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                                <div className="text-dark mb-0">&ldquo;We are working at almost twice the capacity&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-3.jpg" alt="Screenshot" className="img-fluid rounded shadow border"/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Easy on the eyes, and the wallet.</h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/male-1.jpg" alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                                <div className="text-dark mb-0">&ldquo;Jumpstart increases productivity.&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-1.jpg" alt="Screenshot" className="img-fluid rounded shadow border"/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">You’ll Stay right up to date, <mark data-aos="highlight-text"
                                                    data-aos-delay="250">ever</mark>.</h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/female-4.jpg" alt="Ashley Mance avatar image" className="avatar avatar-sm flex-shrink-0 mr-3" />
                                <div className="text-dark mb-0">&ldquo;Jumpstart is a dream come true.&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-2.jpg" alt="Screenshot" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary-3 text-white jarallax pb-0" data-jarallax data-speed="0.2">
          <img src="assets/img/heros/hero-1.jpg" alt="Image" className="jarallax-img opacity-50" />
          <div className="container pb-5">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <blockquote className="blockquote p-0 border-0 text-white">
                        &ldquo;We all know the stigma around build times and the ever expanding arsenal of tooling in modern web apps. Fear not, Jumpstart does away with all of that.&rdquo;
                    </blockquote>
                <img className="bg-white opacity-50 mt-3 mt-md-4 mb-3" src="assets/img/logos/brand/kanba.svg" alt="Kanba company logo" data-inject-svg />
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                  <h6 className="mb-0 mr-2">Shelley McNabb</h6>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-white"></div>
        </section>
        <section className="bg-light o-hidden">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">Great Functionality</h3>
                <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-pills lead mb-4 mb-md-5 justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Groups</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Dark Mode</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Feed</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pl-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">A great feature you'll <mark data-aos="highlight-text"
                                                    data-aos-delay="250">love to use</mark></h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/male-4.jpg" alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                                <div className="text-dark mb-0">&ldquo;We are working at almost twice the capacity&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-3.jpg" alt="Screenshot" className="img-fluid rounded shadow border"/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Easy on the eyes, and the wallet.</h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/male-1.jpg" alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                                <div className="text-dark mb-0">&ldquo;Jumpstart increases productivity.&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-1.jpg" alt="Screenshot" className="img-fluid rounded shadow border"/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">You’ll Stay right up to date, <mark data-aos="highlight-text"
                                                    data-aos-delay="250">ever</mark>.</h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/female-4.jpg" alt="Ashley Mance avatar image" className="avatar avatar-sm flex-shrink-0 mr-3" />
                                <div className="text-dark mb-0">&ldquo;Jumpstart is a dream come true.&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-2.jpg" alt="Screenshot" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
        <section className="bg-primary-3 text-white jarallax pb-0" data-jarallax data-speed="0.2">
          <img src="assets/img/heros/hero-1.jpg" alt="Image" className="jarallax-img opacity-50" />
          <div className="container pb-5">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <blockquote className="blockquote p-0 border-0 text-white">
                        &ldquo;We all know the stigma around build times and the ever expanding arsenal of tooling in modern web apps. Fear not, Jumpstart does away with all of that.&rdquo;
                    </blockquote>
                <img className="bg-white opacity-50 mt-3 mt-md-4 mb-3" src="assets/img/logos/brand/kanba.svg" alt="Kanba company logo" data-inject-svg />
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                  <h6 className="mb-0 mr-2">Shelley McNabb</h6>
                  <span>Software Engineer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-white"></div>
        </section>
        <section className="bg-light o-hidden">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">Great Functionality</h3>
                <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-pills lead mb-4 mb-md-5 justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Groups</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Dark Mode</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Feed</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pl-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">A great feature you'll <mark data-aos="highlight-text"
                                                    data-aos-delay="250">love to use</mark></h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/male-4.jpg" alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                                <div className="text-dark mb-0">&ldquo;We are working at almost twice the capacity&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-3.jpg" alt="Screenshot" className="img-fluid rounded shadow border"/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Easy on the eyes, and the wallet.</h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/male-1.jpg" alt="Harvey Derwent avatar image" className="avatar avatar-sm flex-shrink-0 mr-3"/>
                                <div className="text-dark mb-0">&ldquo;Jumpstart increases productivity.&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-1.jpg" alt="Screenshot" className="img-fluid rounded shadow border"/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">You’ll Stay right up to date, <mark data-aos="highlight-text"
                                                    data-aos-delay="250">ever</mark>.</h3>
                            <p>
                              Ned ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                            </p>
                            <div className="mt-4">
                              <div className="media rounded align-items-center pl-3 pr-3 pr-md-4 py-2 d-inline-flex text-left shadow-sm bg-white">
                                <img src="assets/img/avatars/female-4.jpg" alt="Ashley Mance avatar image" className="avatar avatar-sm flex-shrink-0 mr-3" />
                                <div className="text-dark mb-0">&ldquo;Jumpstart is a dream come true.&rdquo;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-2.jpg" alt="Screenshot" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider position-absolute bottom bg-primary-3"></div>

        </section>
      </Layout>
    </PageContext.Provider>
  )
}
