import Header from '../components/header';
import Navbar from '../components/navbar';
import Layout from 'layouts';
import Footer from '../components/footer';
import PageContext from '../components/page-context';
import parse from 'html-react-parser';
import Feature2 from '../components/feature2';
import { isError } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faStream, faShield, faArrowsH, faShapes, faPlug, faCommentsAltDollar, faHeadSideHeadphones, faUsersClass, faPhotoVideo, faCreditCard } from '@fortawesome/pro-duotone-svg-icons'
import { faCheck } from '@fortawesome/pro-regular-svg-icons'
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react";
import { jwtIsValid } from "js/cellmobs/common";
import Cookie from 'js-cookie';

export async function getServerSideProps({req}) {
  const page = await renderPage('/platform')
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



export default function Platform(props) {

  const { page } = props
  let [isUserNotLoggedIn, setisUserNotLoggedIn] = useState(true);

  useEffect(() => {
    setisUserNotLoggedIn(!jwtIsValid(Cookie.get('cmauth')));
  }, []);
  

  return (
    <PageContext.Provider value={props}>
      <Layout >
        <Header />
        <Navbar title="Cellmobs" logo="lite" text="dark" />
        <section className="bg-primary-3 text-white pb-0 o-hidden" style={{'paddingTop':'120px'}}>
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-5 col-lg-6 text-center text-lg-left mb-4 mb-md-5 mb-lg-0" data-aos="fade-right">
                <h1 className="display-3">Build fast, launch quickly.</h1>
                <p className="lead">We created this platform so entrepreneurs like us can take advantage of powerful proven technologies to launch new-world businesses with ease. </p>
                {isUserNotLoggedIn ?
                <a href="/signup " className="btn btn-lg btn-primary">Sign me up!</a> : ''
                }
              </div>
              <div className="col" data-aos="fade-left" data-aos-delay="250">
                <img src="https://cdn.cellmobs.com/cellmobs/images/cellmobs-console.png" alt="Cellmobs Management Console" className="img-fluid rounded shadow-lg border" />
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-white"></div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-2 px-4 text-center">
                <div>
                  <FontAwesomeIcon icon={faBuilding} size="4x" color="#9c0d14" className="ml-3 mb-4"/>
                  <h5 className="mt-2">Enterprise Ready</h5>
                  <div className="mb-2">
                    We support a wide range of enterprise needs, from marketing automation, to workflow automation, to powering IoT products.
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-2 px-4 text-center">
                <div>
                  <FontAwesomeIcon icon={faStream} size="4x" color="#9c0d14" className="ml-3 mb-4" />
                  <h5 className="mt-2">Flexible Data Model</h5>
                  <div className="mb-2">
                    A data model for modern, connected data applications. Retrieve and manage data in a way that is both configurable and extensible.
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-2  px-4 text-center">
                <div>
                  <FontAwesomeIcon icon={faShapes} size="4x" color="#9c0d14" className="ml-3 mb-4" />
                  <h5 className="mt-2">Highly Customizable</h5>
                  <div className="mb-2">
                    Cellmobs is 100% built on popular open source software so you don't have to worry about vendor lock-in.
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
                <h3 className="display-4">Core Services</h3>
                <div className="lead">
                  Cellmobs is the all-in-one platform for the modern business, simplifying your operations and maximizing company potential. 
                  We offer a suite of services that will allow you to spend more time on growing your business.</div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-pills lead mb-4 mb-md-5 justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">User Groups</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">E-Commerce</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Content</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pl-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Manage Customers and Business Partners</h3>
                            <p>
                            Organize your customers into communities and marketplaces. Support collaboration through groups and fine grained, role-based access controls (RBAC).
                            </p>
                            <p>
                              Synchronize your customers and business contacts with your favorite cloud applications such as Hubspot, Microsoft Office, or your Google Workspace.  
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="images/platform/user-profile.png" alt="User Profile" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">All in one E-Commerce Suite </h3>
                            <p>
                            Cellmobs offers an all-in-one Product Management Suite for subscription commerce. It allows you to easily create products, catalogs, and pricing plans that are optimized for your market strategy - all in one place. 
                            With just a few clicks, you can manage everything from your products, to inventory levels, to multiple subscription tiers with different pricing and promotions.
                            </p>
                            <p>
                            All this wrapped with secure payment processing through robust integrations with many popular payment gateways such as First Data, Paypal, Stripe, and Authorize.net.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="images/platform/products1.png" alt="Screenshot" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">A CMS framework built for modern web applications.</h3>
                            <p>
                              Create dynamic data driven, SEO friendly web pages for modern Javascript frameworks, like React/Next and Nuxt/Vue. 
                            </p>
                            <p>
                              Our intuitive templating framework allows developers to create dynamic content modules for editors to author engaging web pages and  
                              manage associated media assets. 
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="images/platform/product-detail1.png" alt="Screenshot" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary-3 text-white jarallax pb-0">
          <img src="images/michael-dell-2.png" alt="Image" className="jarallax-img opacity-50"/>
          <div className="container pb-5">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <blockquote className="blockquote p-0 border-0 text-white">
                  &ldquo;Ideas are commodity. Execution of them is not.&rdquo;
                </blockquote>
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                  <h6 className="mb-0 mr-2">Michael Dell</h6>
                  <span>Dell, Founder and CEO</span>
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
                <h3 className="display-4">Tools for Sellers</h3>
                <div className="lead">
                Cellmobs makes it easy for sellers to market their products and helps to drive more sales through a suite of innovative marketing tools.</div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-pills lead mb-4 mb-md-5 justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="crm-tab" data-toggle="tab" href="#crm" role="tab" aria-controls="crm" aria-selected="true">CRM</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="messagin-tab" data-toggle="tab" href="#messaging" role="tab" aria-controls="messaging" aria-selected="false">Messaging</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="sydnication-tab" data-toggle="tab" href="#syndication" role="tab" aria-controls="syndication" aria-selected="false">Syndication</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="crm" role="tabpanel" aria-labelledby="crm-tab">
                      <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pl-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Manage your leads and accounts</h3>
                            <p>
                            With our integration with popular CRMs, it's never been easier to manage your workflow, managing sales funnels and forecasts. 
                            </p>
                            <p>
                            Priority-based integrations, central orchestration, and automation gives your team a break while you focus on the big picture.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="assets/img/desktop-app/desktop-app-3.jpg" alt="Screenshot" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="messaging" role="tabpanel" aria-labelledby="messaging-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">A unified platform for all messaging channels</h3>
                            <p>
                            People are more connected than ever before. Yet brands are still struggling to reach them. Cellmobs solves 
                            this with a variety of communication channels from SMS & email to push notifications.
                            </p>
                            <p>
                            You can even extend Cellmobs with popular integrations like Twilio and Mailchimp, and even Conversational AI platforms.                             
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="https://cdn.cellmobs.com/cellmobs-dev/dus0slrcku-website.jpg" alt="Screenshot" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="syndication" role="tabpanel" aria-labelledby="syndication-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Syndicate your content to generate traffic and drive conversions.</h3>
                            <p>
                             Syndicate content by creating Channels that deliver your marketing message to Social Media sites or expose your content via RSS and Media RSS feeds to your marketing partners.  
                            </p>
                            <p>                             
                             Back link your content to Cellmobs landing pages and measure conversions through A/B...X testing.   
                            </p>
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
        <section className="bg-primary-3 text-white jarallax pb-0">
          <img src="images/tony-hsieh.webp" alt="Image" className="jarallax-img opacity-50" />
          <div className="container pb-5">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-7">
                <blockquote className="blockquote p-0 border-0 text-white">
                  &ldquo;Chase the vision, not the money; the money will end up following you.&rdquo;
                </blockquote>
                <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center">
                  <h6 className="mb-0 mr-2">Tony Hsieh</h6>
                  <span>CEO of Zappos</span>
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
                <h3 className="display-4">Our Technologies</h3>
                <div className="lead">Cellmobs uses the best-of-breed open source enterprise technologies.</div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <ul className="nav nav-pills lead mb-4 mb-md-5 justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="infra-tab" data-toggle="tab" href="#infra" role="tab" aria-controls="infra" aria-selected="true">Infrastructure</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="database-tab" data-toggle="tab" href="#database" role="tab" aria-controls="database" aria-selected="false">Data</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="apps-tab" data-toggle="tab" href="#apps" role="tab" aria-controls="apps" aria-selected="false">Apps</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="infra" role="tabpanel" aria-labelledby="infra-tab">
                      <div className="row align-items-center justify-content-between flex-lg-row-reverse">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pl-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">We love Spring Boot Microservices</h3>
                            <p>
                            When deployed on Kubernetes, a leading container orchestration platform, these Spring Boot Microservices can be easily managed, scaled, and updated to meet evolving requirements. Kubernetes ensures optimal resource allocation, seamless deployments, and robust fault tolerance, delivering a highly efficient and reliable infrastructure for your applications.
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7 p-5" data-aos="fade-left">
                          <img src="images/pages/springboot-kubernetes.png" alt="Springboot Kubernetes Logo" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="database" role="tabpanel" aria-labelledby="database-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Powered by the flexbility and performance of MongoDB Atlas</h3>
                            <p>
                            We are dedicated to ensuring the security and privacy of your data. In today's digital world, protecting sensitive information is of the utmost importance. 
                            Cellmobs understands this and has taken the necessary steps to ensure that your data is secure at all times. 
                            Your data secure is by encrypting it at rest which means that all data stored on our servers is encrypted, making it unreadable to anyone who tries to access it without the proper credentials. 
                            </p>
                            <p>
                            In addition we offer field-level encryption. This means that specific sensitive fields within your data are encrypted, providing an extra level of security for sensitive information such as credit card numbers or personal addresses. 
                              </p>

                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="https://cdn.cellmobs.com/cellmobs-dev/ykmny9xmzb-website.jpg" alt="App Overview" className="img-fluid rounded shadow border" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="apps" role="tabpanel" aria-labelledby="apps-tab">
                      <div className="row align-items-center justify-content-around">
                        <div className="col-lg-6 col-xl-5 text-center text-lg-left mb-4 mb-md-5 mb-lg-0">
                          <div className="pr-lg-4 pr-xl-5" data-aos="fade-right">
                            <h3 className="h1">Supporting modern Javascript frameworks.</h3>
                            <p>
                              Make your app development simpler and faster with Cellmobs! Our SDKs are designed to help you quickly and easily build modern, feature-rich apps using popular frameworks like <a href="">React/Next.js</a> and <a href="#">Vue/Nuxt</a>. With our comprehensive set of tools, you can easily create awesome experiences for your users with minimal effort. Get started now & unlock the power of Cellmobs!
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-7" data-aos="fade-left">
                          <img src="https://cdn.cellmobs.com/cellmobs-dev/jfhjgqweve-website.jpg" alt="Responsive Web Application" className="img-fluid rounded shadow border" />
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
