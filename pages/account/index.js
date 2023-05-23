import Layout from 'layouts';
import Header from 'components/header';
import Navbar from 'components/navbar';
import PageContext from 'components/page-context';
import AccountContext from "components/account-context";
import AccountInfo from 'components/account-info';
import AccountPassword  from "components/account-password";
import AccountSubscription from 'components/account-subscription';
import AccountWallet from 'components/account-wallet';
import { isError } from 'js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import { useEffect, useState } from 'react';
import { jwtIsValid } from "js/cellmobs/common";
import Cookies from 'universal-cookie';
import { getSubscription } from 'redux/actions/subscriptionActions';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

export async function getServerSideProps({ req, params }) {
  const page = await renderPage('/account')
  console.log(page)
  if (isError(page)) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    }
  }
  const cookies = new Cookies(req.headers.cookie);
  if (!jwtIsValid(cookies.get('cmauth'))) {
    return {
      redirect: {
        destination: '/login/' + token,
        permanent: false,
      },
    };
  }
  return {
    props: {
      page: page,
      params: {}
    }
  }
}

export default function Account(props) {

  const { page } = props

  const [panel, setPanel] = useState('info');
  const [organization, setOrganization] = useState({})
  const [user, setUser] = useState({})

  const subscription = useSelector(state => state.subscription.subscription);

  const dispatch = useDispatch();

  const renderPanel = (panel) => {
    switch (panel) {
      case 'info':
        return <AccountInfo />;
      case 'billing':
        return <AccountSubscription />;
      case 'password':
        return <AccountPassword />;
      case 'wallet':
        return <AccountWallet />;
        default:
      return <AccountInfo />;
    }
  }

  const handleAccountMenuClick = (e) => {
    if (panel === 'new-tenant') {
      Swal.fire({
        title: 'Sorry!',
        text: 'You have to select or create an app first.',
        icon: 'info',
        position: 'center',
        iconColor: '#9c0d14',
        confirmButtonText: 'Ok'
      })
      return;
    }
    document.getElementById(panel).classList.toggle('active');
    e.currentTarget.classList.toggle('active');
    setPanel(e.target.id)
  }

  useEffect(() => {
    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    setUser(user);
    let primaryOrg = user?.organizationRoles[0]?.organization;
    setOrganization(primaryOrg);
    dispatch(getSubscription());

  }, [])

  const account_context = {
    user,
    subscription,
    organization
  }

  return (
    <PageContext.Provider value={props}>
      <AccountContext.Provider value={account_context}>
        <Layout>
          <Header />
          <Navbar title="Cellmobs" logo="dark" text="lite" />
          <section className="pb-0 o-hidden p-head">
            <div className="container" style={{minHeight: '800px'}}>
              <div className="row pb-0">
                <div className='col-12'>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item"><a href="/account">Account</a></li>
                      <li className="breadcrumb-item active" style={{ 'textTransform': 'Capitalize' }}>{panel}</li>
                    </ol>
                  </nav>
                </div>
              </div>
              <div className='row pt-3'>
                <div className='col-xs-12 col-sm-3 '>
                  <ul className="nav nav-account flex-column mt-4">
                    <li className="nav-item">
                      <a className="nav-link active" href="#" id="info" onClick={handleAccountMenuClick}> Info</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" id="billing" onClick={handleAccountMenuClick}>Billing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" id="wallet" onClick={handleAccountMenuClick}>Wallet</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#" id="password" onClick={handleAccountMenuClick}>Password</a>
                    </li>
                  </ul>
                </div>
                {renderPanel(panel)}
              </div>
            </div>
            <div className="divider divider-bottom bg-primary-3 mt-5"></div>
          </section>
        </Layout>
      </AccountContext.Provider>
    </PageContext.Provider>
  )
}

Account.defaultProps = {
  title: 'Your Account   '
}