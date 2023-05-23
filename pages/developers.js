import Header from '../components/header';
import Navbar from '../components/navbar';
import Layout from 'layouts';
import Footer from '../components/footer';
import PageContext from '../components/page-context';
import parse from 'html-react-parser';
import Feature2 from '../components/feature2';
import { isError, parsePageSection } from '../js/cellmobs/common';
import { renderPage, listPages } from 'js/cellmobs/api/page';
import { useSelector } from 'react-redux';
import BlogCard from 'components/blog-card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
import { faPlay } from '@fortawesome/pro-light-svg-icons';
import { faBracketsCurly, faCode, faCompass, faLaptopCode, faPlayCircle, faTools } from '@fortawesome/pro-duotone-svg-icons';

export async function getServerSideProps({ req }) {
  const page = await renderPage('/developers')
  const pages = await listPages({
    page: 0,
    size: 3,
    // fields: 'sections,sourceUrl,sourceName,summary',
    // includeFields: false,
    tagStrings: 'developers',
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
      articles: pages?.content,
      params: {}
    }
  }
}



export default function Developers(props) {

  const { page, articles } = props

  let user = useSelector(state => state.auth.user);

  const isUserNotLoggedIn = user?.id ? false : true;

  const renderCards = () => {
    return articles?.map((s, ix) => {
      if (ix >= 0) {
        return <BlogCard item={s} key={s.id} />;
      }
    })
  }

  return (
    <PageContext.Provider value={props}>
      <Layout>
        <Header />
        <Navbar title="Cellmobs" logo="dark" text="lite" />

        <section className="pb-0 o-hidden" style={{ 'paddingTop': '140px' }}>
          <div className="container">
            <div className="row align-items-center justify-content-center justify-content-lg-between text-center text-lg-left flex-lg-row-reverse">
              <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-lg-0 pr-lg-5 pr-xl-0">
                {isUserNotLoggedIn ?
                  <>
                    <h1 className="display-4">
                      {parsePageSection(
                        page,
                        'title-logged-off',
                        'Sign-up for a free developer account and start building!'
                      )}

                    </h1>
                    <p className="lead">
                      {parsePageSection(
                        page,
                        'lead-logged-off',
                        'Get your API key and access to the Cellmobs management console to start designing your application.'
                      )}
                    </p>
                    <div className="mt-4 mt-md-5">
                      <a href="/signup"> <button className="btn btn-primary btn-block" type="submit"> Create your account</button></a>
                    </div>
                  </> :
                  <>
                    <div className="col-md-9 col-lg-6 col-xl-7 pt-3">
                      <h1 className="display-4">
                        {parsePageSection(
                          page,
                          'title-logged-in',
                          'Welcome back!'
                        )}
                      </h1>
                      <p className="lead">
                        {parsePageSection(
                          page,
                          'lead-logged-in',
                          "We're glad you're here and ready to get started with our powerful REST API and SDKs."
                        )}
                      </p>
                    </div>
                  </>
                }
              </div>
              <div className="col-md-9 col-lg-6 col-xl-5 text-center " data-aos="fade-right">
                <FontAwesomeIcon icon={faLaptopCode} size="10x" className="mt-1 pl-4" color="#9c0d14" />
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-light mt-1"></div>
        </section>
        <section className="bg-light o-hidden">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h2 className="display-4">Let's get started!</h2>
                <div className="lead">Our platform is designed to provide developers with the tools they need to quickly and easily bootstrap their ideas, without having to spend countless hours coding boilerplate code and testing.&nbsp;<br /><br />Our REST API, management console, and SDKs make it easy for developers to integrate their applications and workflows with Cellmobs and other popular APIs, giving them access to a range of powerful features and functionality. Whether you're a seasoned developer or just starting out, Cellmobs is the perfect place to bring your ideas to life.</div>
              </div>
            </div>
            <div className="row align-items-center justify-content-around">
              <div className="col-md-9 col-lg-5 p-5" data-aos="fade-in">
                <img className="img-fluid rounded" src="/images/pages/rocket-launch.svg" alt="Launch"  /> 
              </div>
              <div className="col-md-9 col-lg-6 col-xl-5 mt-4 mt-md-5 mt-lg-0">
                <ol className="list-unstyled p-0">
                  <li className="d-flex align-items-start my-4 my-md-5">
                    <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-success">
                      <div className="position-absolute text-white h5 mb-0">1</div>
                    </div>
                    <div className="ml-3 ml-md-4">
                      <h4>Create account</h4>
                      <p>Sign up to create your first Cellmobs app in minutes. No credit card needed.</p>
                      <a href="../../signup">We offer a FREE tier!</a></div>
                  </li>
                  <li className="d-flex align-items-start my-4 my-md-5">
                    <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-success">
                      <div className="position-absolute text-white h5 mb-0">2</div>
                    </div>
                    <div className="ml-3 ml-md-4">
                      <h4>Check out the Docs</h4>
                      <p>Our documentation is designed to provide you with the necessary information to get started. Let your creativity run wild as you build, customize, and deploy your app with ease.</p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start my-4 my-md-5">
                    <div className="rounded-circle p-3 p-sm-4 d-flex align-items-center justify-content-center bg-success">
                      <div className="position-absolute text-white h5 mb-0">3</div>
                    </div>
                    <div className="ml-3 ml-md-4">
                      <h4>Start creating</h4>
                      <p>Ready to bring your vision to life? Dive into our robust tools and SDKs to kickstart the development of your first app on the Cellmobs platform.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">Documentation</h3>
                <div className="lead">Explore our guides and examples to bootstrap your project and integrate Cellmobs.</div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0 text-center">
                    <FontAwesomeIcon icon={faPlayCircle} size="4x" className="mt-1" color="#9c0d14" />
                    </div>
                    <div className="col" style={{minHeight:'180px;'}}>
                    <h4>Getting started</h4>
                    <p>Out Quick Start guide will walk you through the essential steps to set up your account, navigate the platform, and utilize its powerful features to create your first application.</p>
                    <a href="https://docs.cellmobs.com/getting-started/">Learn More</a></div>
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0 text-center">
                    <FontAwesomeIcon icon={faTools} size="4x" className="mt-1" color="#9c0d14" />
                    </div>
                    <div className="col" style={{minHeight:'180px;'}}>
                    <h4>Setup and Adminstration</h4>
                    <p>
                    This documentation covers essential topics such as account setup, platform customization, feature configuration, and more, ensuring you have a solid foundation to build upon. 
                    </p>
                    <a href="https://docs.cellmobs.com/setup/quickstart/">Learn More</a></div>
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0 text-center">
                    <FontAwesomeIcon icon={faCompass} size="4x" className="mt-1" color="#9c0d14" />
                    </div>
                    <div className="col" style={{minHeight:'180px;'}}>
                    <h4>Development Guide</h4>
                    <p>Our development guide provides useful tips and walk throughs for common use cases.
                    You'll gain an understanding of the platform's core capabilities and learn how to maximize its potential for your specific needs. 
                    </p>
                    <a href="https://docs.cellmobs.com/guide/development-guide/">Learn More</a></div>
                </div>
              </div>
              <div className="col-lg-6 mb-3 mb-lg-5">
                <div className="row align-items-center">
                  <div className="col-sm-4 mb-3 mb-sm-0 text-center">
                    <FontAwesomeIcon icon={faBracketsCurly} size="4x" className="mt-1" color="#9c0d14" />
                  </div>
                  <div className="col" style={{minHeight:'180px;'}}>
                    <h4>Reference</h4>
                    <p>Our API reference provides in-depth descriptions of available endpoints, parameters, request and response examples, as well as any necessary authentication details.</p>
                    <a href="https://api.cellmobs.com/" target="_blank" rel="noopener">Learn More</a></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light ">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">Stay in the loop</h3>
                <div className="lead">
                  Discover the full potential of Cellmobs by staying up-to-date with our insightful articles. Our experts continuously curate valuable content to help you
                  harness the power of new features, cloud app integrations, and industry best practices.
                </div>
              </div>
            </div>
            <div className="row">
              {renderCards()}
            </div>
          </div>
        </section>
        <section className="p-0">
          <div className="divider divider-top bg-light transform-flip-x"></div>
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4">FAQ</h3>
                <div className="lead">
                  We understand that you may have queries or concerns regarding our platform, features, and capabilities.
                  To help address these questions, we have compiled a list of common inquiries and their corresponding answers.
                  If you need further assistance or have a question that isn't covered here, feel free to reach out to our <a href="/support">support team</a> for additional help.
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-8">
                <div id="faq-accordion">
                 
                  <div className="card mb-2 mb-md-3">
                    <a href="#accordion-2" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 mr-2">Can I port my data from another provider?</h6>
                        <img src="assets/img/icons/interface/icon-caret-right.svg" alt="Caret Right" className="icon icon-sm" />
                      </div>
                    </a>
                    <div className="collapse" id="accordion-2" data-parent="#faq-accordion">
                      <div className="px-3 px-md-4 pb-3 pb-md-4">
                      Cellmobs is designed to support seamless integrations with popular storage and productivity platforms, enabling users to easily import or sync data between these services. Our platform is compatible with a wide range of industry-leading solutions, streamlining your workflow and enhancing collaboration. We are constantly working to expand our support for new integrations to offer even greater flexibility and functionality.
                      <br/><br/>
                      In addition, we are developing a plugin interface that will allow developers to submit new custom integrations, further extending the capabilities of our platform. This feature will empower developers to tailor the platform to their specific needs and leverage the tools and services that are most relevant to their projects. Stay tuned for updates on the release of our plugin interface and the exciting possibilities it will bring to the Cellmobs platform.
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 mb-md-3">
                    <a href="#accordion-3" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 mr-2">Can I use my own database?</h6>
                        <img src="assets/img/icons/interface/icon-caret-right.svg" alt="Caret Right" className="icon icon-sm" />
                      </div>
                    </a>
                    <div className="collapse" id="accordion-3" data-parent="#faq-accordion">
                      <div className="px-3 px-md-4 pb-3 pb-md-4">
                        Cellmobs is continually working to enhance our platform and offer greater flexibility to our customers. We are excited to announce that later this year, we will be introducing the Bring Your Own (BYO) MongoDB feature. This option will allow you to utilize your own MongoDB instance with the Cellmobs platform, providing you with increased control over your data storage and management. By offering BYO MongoDB, we aim to cater to specific requirements and preferences while maintaining the robust functionality and ease of use that the Cellmobs platform is known for. Stay tuned for updates and the official launch of this feature in the coming months.                        
  
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 mb-md-3">
                    <a href="#accordion-4" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 mr-2">Are you offering Cellmobs as white-label solution?</h6>
                        <img src="assets/img/icons/interface/icon-caret-right.svg" alt="Caret Right" className="icon icon-sm" />
                      </div>
                    </a>
                    <div className="collapse" id="accordion-4" data-parent="#faq-accordion">
                      <div className="px-3 px-md-4 pb-3 pb-md-4">
                      Cellmobs is proud to offer white-label solutions that allow customers to create a fully customized and branded version of our platform tailored to their specific needs. With our white-label offering, you can rebrand the platform and modify its appearance to align with your company's identity and values, providing a seamless user experience that feels uniquely yours.
                      <br/><br/>
                        Our white-label solutions are designed to help businesses stand out in the market and deliver a personalized experience to their target audience, all while leveraging the powerful features and capabilities of the Cellmobs platform. To learn more about our white-label options and how they can benefit your business, please contact our sales team for further information.                        
                        
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 mb-md-3">
                    <a href="#accordion-5" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 mr-2">What's the real cost?</h6>
                        <img src="assets/img/icons/interface/icon-caret-right.svg" alt="Caret Right" className="icon icon-sm" />
                      </div>
                    </a>
                    <div className="collapse" id="accordion-5" data-parent="#faq-accordion">
                      <div className="px-3 px-md-4 pb-3 pb-md-4">
                        At Cellmobs, we maintain complete transparency in our pricing structure, with no hidden costs involved. You only pay for what you use, as detailed on our pricing page. All charges are based on actual usage, and certain costs, such as file and database storage, are averaged across the billing period. We strive to provide a fair and straightforward pricing model, allowing you to focus on building and scaling your application without worrying about unexpected expenses. For a comprehensive understanding of our pricing plans, please visit our pricing page or contact our support team for further assistance.                        
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 mb-md-3">
                    <a href="#accordion-6" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 mr-2">Can my company request a custom plan?</h6>
                        <img src="assets/img/icons/interface/icon-caret-right.svg" alt="Caret Right" className="icon icon-sm" />
                      </div>
                    </a>
                    <div className="collapse" id="accordion-6" data-parent="#faq-accordion">
                      <div className="px-3 px-md-4 pb-3 pb-md-4">
                        Yes, Cellmobs understands the unique requirements of enterprise customers and offers on-premises solutions tailored to your specific needs. Our Enterprise On-Prem solution provides enhanced security, control, and customization, allowing you to deploy and manage the Cellmobs platform within your organization's infrastructure. This ensures compliance with your internal policies and data protection regulations while still leveraging the powerful features and capabilities of the Cellmobs platform. For more information on our Enterprise On-Prem solution and how it can benefit your organization, please contact our sales team.                        
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 mb-md-3">
                    <a href="#accordion-4" data-toggle="collapse" role="button" aria-expanded="false" className="p-3 p-md-4">
                      <div className="d-flex justify-content-between align-items-center">
                        <h6 className="mb-0 mr-2">Is Cellmobs Cellmobs open source?</h6>
                        <img src="assets/img/icons/interface/icon-caret-right.svg" alt="Caret Right" className="icon icon-sm" />
                      </div>
                    </a>
                    <div className="collapse" id="accordion-4" data-parent="#faq-accordion">
                      <div className="px-3 px-md-4 pb-3 pb-md-4">
                      Cellmobs is committed to fostering innovation, collaboration, and community engagement. As part of this commitment, we are actively working on making a portion of our platform open source. By opening up parts of our platform to the developer community, we aim to encourage collaboration, enhance the platform's capabilities, and accelerate the development of new features and integrations. This open-source initiative will enable developers to contribute to the platform's growth while also benefiting from the collective knowledge and expertise of the community. Stay tuned for updates on our progress and the upcoming release of our open-source components.

                      </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>
            <div className="row justify-content-center mt-4 mt-md-5">
              <div className="col-auto">
                <div className="alert bg-light">Still have unanswered questions? <a href="/support">Get
                  in touch</a>
                </div>
              </div>
            </div>
          </div>
          <div className="divider divider-bottom bg-primary-3"></div>
        </section>
      </Layout>
    </PageContext.Provider>
  )
}
