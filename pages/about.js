import Layout from 'layouts';
import PageContext from 'components/page-context';
import parse from 'html-react-parser';
import Feature2 from 'components/feature2';
import { isError } from 'js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';

export async function getServerSideProps(context) {
  const page = await renderPage('/about')
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


export default function About(props) {

  const { page } = props

  return (
    <PageContext.Provider value={props}>
      <Layout>
        <section className="bg-primary-3 text-white" id="carousel">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4" data-meta="section.title" data-id="carousel.title">
                  {parse(page.sections.carousel?.content?.title || 'title')}
                </h3>
                <div className="lead" data-meta="section.title" data-id="carousel.lead">
                  {parse(page.sections.carousel?.content?.lead || 'lead')}
                </div>
              </div>
            </div>
          </div>
          <div className="o-hidden">

          </div>
        </section>
        <section>
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">We glow all the way up</h3>
                <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-11">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <div className="row">
                      <div className="col-sm-6 text-center mb-5">
                        <div className="d-flex flex-column align-items-center">
                          <img src="assets/img/avatars/male-1.jpg" alt="Joshua Lapinsky profile image" className="avatar avatar-xl mb-4" />
                          <h5 className="mb-2">Joshua Lapinsky</h5>
                          <div className="mb-3">Co-Founder & CEO</div>
                          <ul className="list-unstyled d-flex mb-0">
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/dribbble.svg" alt="Dribbble" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/github.svg" alt="Github" className="icon icon-xs"  />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6 text-center mb-5">
                        <div className="d-flex flex-column align-items-center">
                          <img src="assets/img/avatars/female-1.jpg" alt="Glenda Spence profile image" className="avatar avatar-xl mb-4" />
                          <h5 className="mb-2">Glenda Spence</h5>
                          <div className="mb-3">Co-Founder</div>
                          <ul className="list-unstyled d-flex mb-0">
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/dribbble.svg" alt="Dribbble" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/github.svg" alt="Github" className="icon icon-xs"  />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6 text-center mb-5">
                        <div className="d-flex flex-column align-items-center">
                          <img src="assets/img/avatars/male-2.jpg" alt="Michael Trossino profile image" className="avatar avatar-xl mb-4" />
                          <h5 className="mb-2">Michael Trossino</h5>
                          <div className="mb-3">Social Engineering</div>
                          <ul className="list-unstyled d-flex mb-0">
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/dribbble.svg" alt="Dribbble" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/github.svg" alt="Github" className="icon icon-xs"  />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6 text-center mb-5">
                        <div className="d-flex flex-column align-items-center">
                          <img src="assets/img/avatars/male-3.jpg" alt="Patrik Janssen profile image" className="avatar avatar-xl mb-4" />
                          <h5 className="mb-2">Patrik Janssen</h5>
                          <div className="mb-3">Experience Designer</div>
                          <ul className="list-unstyled d-flex mb-0">
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/dribbble.svg" alt="Dribbble" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/github.svg" alt="Github" className="icon icon-xs"  />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6 text-center mb-5">
                        <div className="d-flex flex-column align-items-center">
                          <img src="assets/img/avatars/female-2.jpg" alt="Mirembe Nkrumah profile image" className="avatar avatar-xl mb-4" />
                          <h5 className="mb-2">Mirembe Nkrumah</h5>
                          <div className="mb-3">Co-Founder & CFO</div>
                          <ul className="list-unstyled d-flex mb-0">
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/dribbble.svg" alt="Dribbble" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/github.svg" alt="Github" className="icon icon-xs"  />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-6 text-center mb-5">
                        <div className="d-flex flex-column align-items-center">
                          <img src="assets/img/avatars/female-3.jpg" alt="Karina Messopine profile image" className="avatar avatar-xl mb-4" />
                          <h5 className="mb-2">Karina Messopine</h5>
                          <div className="mb-3">Design Lead</div>
                          <ul className="list-unstyled d-flex mb-0">
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/dribbble.svg" alt="Dribbble" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/twitter.svg" alt="Twitter" className="icon icon-xs"  />
                              </a>
                            </li>
                            <li className="mx-2">
                              <a href="#" className="hover-fade-out">
                                <img src="assets/img/icons/social/github.svg" alt="Github" className="icon icon-xs"  />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-3 mt-sm-4">
              <div className="col-auto">
                <div className="alert bg-secondary">We think you'll fit in here. <a href="#">Submit your r&eacute;sum&eacute;</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-light">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">As seen in...</h3>
                <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
              </div>
            </div>
            <div className="row justify-content-center text-center">
              <div className="col-sm-8 col-md-4 mb-5 mb-lg-0">
                <div className="card card-body bg-secondary mb-4">
                  <img src="assets/img/logos/brand/kyan.svg" alt="Kyan company logo" className="opacity-50 my-4 my-lg-5" />
                </div>
                <div className="px-xl-4">
                  &ldquo;A polished product from a solid performer in the brutal and ever-changing SaaS landscape.&rdquo;
                </div>
              </div>
              <div className="col-sm-8 col-md-4 mb-5 mb-lg-0">
                <div className="card card-body bg-secondary mb-4">
                  <img src="assets/img/logos/brand/goldline.svg" alt="Goldline company logo" className="opacity-50 my-4 my-lg-5" />
                </div>
                <div className="px-xl-4">
                  &ldquo;It's clear that the team at Jumpstart have been listening to their customers.&rdquo;
                </div>
              </div>
              <div className="col-sm-8 col-md-4 mb-5 mb-lg-0">
                <div className="card card-body bg-secondary mb-4">
                  <img src="assets/img/logos/brand/aven.svg" alt="Aven company logo" className="opacity-50 my-4 my-lg-5" />
                </div>
                <div className="px-xl-4">
                  &ldquo;The future is looking bright for this punky young startup. One to watch for sure.&rdquo;
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary pb-0 text-white">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">You’re in good company</h3>
                <div className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <ul className="list-unstyled d-flex flex-wrap justify-content-center mb-0">
                  <li className="my-3 mx-3 mx-lg-4">
                    <img src="assets/img/logos/brand/aven.svg" alt="Aven company logo" className="bg-white opacity-50"  />
                  </li>
                  <li className="my-3 mx-3 mx-lg-4">
                    <img src="assets/img/logos/brand/asgardia.svg" alt="Asgardia company logo" className="bg-white opacity-50"  />
                  </li>
                  <li className="my-3 mx-3 mx-lg-4">
                    <img src="assets/img/logos/brand/kanba.svg" alt="Kanba company logo" className="bg-white opacity-50"  />
                  </li>
                  <li className="my-3 mx-3 mx-lg-4">
                    <img src="assets/img/logos/brand/treva.svg" alt="Treva company logo" className="bg-white opacity-50"  />
                  </li>
                  <li className="my-3 mx-3 mx-lg-4">
                    <img src="assets/img/logos/brand/ztos.svg" alt="Ztos company logo" className="bg-white opacity-50"  />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-primary-3"></div>
        </section>
      </Layout>
    </PageContext.Provider>
  )
}
