import Layout from 'layouts';
import Header from 'components/header';
import Navbar from 'components/navbar';
import HeaderSupport from 'components/header-support';
import PageContext from 'components/page-context';
import parse from 'html-react-parser';
import Feature2 from 'components/feature2';
import { isError, parsePageSection } from 'js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import FormContact from '../components/form-contact';
import { useMemo } from 'react';

export async function getServerSideProps(context) {
  const page = await renderPage('/support')
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


export default function Support(props) {

  const { page } = props

  const sections = useMemo(() => page.sections, [page]);
  const primaryContent = useMemo(() => page.primaryContent, [page]);
  const title = useMemo(() => sections && sections.title, [sections]);
  const content = useMemo(() => sections && sections.content, [sections]);

  return (
    <PageContext.Provider value={props}>
      <Layout>
        <Header />
        <Navbar title="Cellmobs" logo="lite" text="dark" />
        <HeaderSupport />
        <section className="bg-light" id="help-list" style={{paddingBottom:'10px'}}>
          <div className="container">
            <div className="row justify-content-between align-items-start">
              <div className="col-lg-8">

                <div className="mb-3 p-3 mb-sm-4 lead">
                  {parsePageSection(
                    page,
                    'content',
                    'Get in Touch'
                  )}
 
 
                </div>
              </div>
              <div className="col sticky-lg-top">
                <div className="pl-xl-4">
                  <ul className="list-group">
                    <li className="list-group-item">
                      <h6 className="mb-2">Email Us</h6>
                      <a href="mailto:info@cellmobs.com">info@cellmobs.com</a>
                    </li>
                    <li className="list-group-item">
                      <h6 className="mb-2">Call any time</h6>
                      <a href="tel:+13104398856">+1 310 439 8856</a>
                    </li>
                  </ul>
                  <a href="https://cellmobs.atlassian.net/servicedesk/customer/portal/" target="_blank" className="btn btn-primary btn-block mt-3 mt-md-4">Open a Support Ticket</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-light">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4 cellmobs-editable" data-id="title-quotes" data-meta="TEXT">
                  {parsePageSection(
                    page,
                    'title-quotes',
                    'Get in Touch'
                  )}
                </h3>
                <div className="lead cellmobs-editable" data-id="lead-quotes" data-meta="TEXT">
                  {parsePageSection(
                    page,
                    'lead-quotes',
                    "Our platform experts are ready to assist you and your team!"
                  )}
                </div>
              </div>
            </div>
            <FormContact leadSource="support-page" />
          </div>
        </section>
      </Layout>
    </PageContext.Provider>
  )
}
