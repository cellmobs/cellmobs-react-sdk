import Header from '../components/header';
import Navbar from '../components/navbar';
import Layout from 'layouts';
import Footer from '../components/footer';
import PageContext from '../components/page-context';
import { isError, parsePageSection } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';

export async function getServerSideProps(context) {
  const page = await renderPage('/terms')
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


export default function Terms(props) {

  const { page } = props

  // let token = useSelector(state => state.auth.token);

  // useEffect(() => {
  //   //initEditor(page, token);
  // }, [token]);

  return (
    <PageContext.Provider value={props}>
      <Layout>
        <Header />
        <Navbar title="Cellmobs" logo="dark" text="lite" />
        <section className="bg-light" id="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-9 col-md-11">
              <div className="card card-body shadow">
                <div className="d-flex flex-column justify-content-between align-items-start pb-4 mb-4 mb-md-5 border-bottom">
                  <div className="mb-3">
                    <h1 className="mb-2 cellmobs-editable" data-id="title" data-meta="TEXT">
                    { parsePageSection(
                      page,
                      'title',
                      'Title'
                    )}
                    </h1>
                    <div className="lead">Updated Apr 23, 2021</div>
                  </div>
                </div>
                <article className="article cellmobs-editable" data-id="body" data-meta="HTML">
                { parsePageSection(
                    page,
                    'body',
                    'Body'
                  )}
                </article>
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
