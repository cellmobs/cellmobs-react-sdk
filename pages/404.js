import Header from '../components/header';
import Navbar from '../components/navbar';
import Layout from 'layouts';
import Footer from '../components/footer';
import PageContext from '../components/page-context';
import { isError, parsePageSection } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';


export default function Terms(props) {

  const { page } = props

  // let token = useSelector(state => state.auth.token);

  // useEffect(() => {
  //   //initEditor(page, token);
  // }, [token]);

  return (
    <PageContext.Provider value={props}>
        <section className="bg-primary-1 text-black p-0 o-hidden">
      <div className="container min-vh-100 d-flex flex-column justify-content-between text-center py-4 py-md-5">
        <div className="my-5">
          <div className="row justify-content-center" style={{marginTop:'25%'}}>
            <div className="col-5 mb-4">
              <img src="/images/c-lite-1x.png" alt="404 Page Not Found" className="img-fluid" style={{maxHeight:'200px'}}/>
            </div>
            <div className="col-12">
              <h1>404 - Page Not Found</h1>
              <div className="lead">Whoops, it looks like the page you request wasn't found.</div>
            </div>
          </div>
        </div>
        <div>
          <a href="/" className="btn btn-sm btn-primary fade-page">Back to Home</a>
        </div>
      </div>
    </section>


    </PageContext.Provider>
  )
}
