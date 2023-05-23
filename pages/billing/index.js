import Layout from 'layouts';
import Header from 'components/header';
import Navbar from 'components/navbar';
import PageContext from 'components/page-context';
import { isError } from 'js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnalytics, faCommentsAltDollar, faHeadSideHeadphones, faUsersClass, faPhotoVideo, faCreditCard } from '@fortawesome/pro-duotone-svg-icons'
import { useEffect, useState } from 'react';
import { jwtIsValid } from "js/cellmobs/common";
import Cookies from 'universal-cookie';
import useLocalStorage from "hooks/useLocalStorage";
import { ReactReduxContext, useDispatch, useSelector } from 'react-redux';
import { getOrder, listOrders } from 'redux/actions/orderActions';
import { listApiKeys, generateApiKey, deleteApiKey } from 'redux/actions/apikeyActions';
import Link from 'next/link'
import Swal from 'sweetalert2';
import { faTimesSquare, faCheckSquare } from '@fortawesome/pro-solid-svg-icons';
import { faCopy, faTrash } from '@fortawesome/pro-light-svg-icons';
import TenantContext from '../../components/tenant-context';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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

export default function Billing(props) {

  const { page } = props

  const [user, setUser] = useState({})
  const [tenantId, setTenantId] = useState('')
  const [organization, setOrganization] = useState({})
  let order = useSelector(state => state.order.order);
  let orders = useSelector(state => state.order.orders);

  const dispatch = useDispatch();

  const handleMonthChange = (e) => {
    console.log(e.target.value)
  }

  useEffect(() => {
    let user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    setUser(user);
    let primaryOrg = user?.organizationRoles[0]?.organization
    setOrganization(primaryOrg);
    // console.log(primaryOrg);
    dispatch(listOrders({ organizationId: primaryOrg.id })) // should be buyerId after Order class refactor
    // console.log(tenants);

  }, [])


  return (
    <PageContext.Provider value={props}>
        <Layout>
          <Header />
          <Navbar title="Cellmobs" logo="dark" text="lite" />
          <section className="pb-0 o-hidden" style={{ 'paddingTop': '100px' }}>
            <div className="container">
              <div className="row pb-0">
                <div className='col'>
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="/">Home</a></li>
                      <li className="breadcrumb-item"><a href="/account">Account</a></li>
                      <li className="breadcrumb-item active" aria-current="page">Billing</li>
                    </ol>
                  </nav>
                </div>
                <div className='col-5 text-right'>
                  <div className="input-group">
                    <label className="control-label mt-2 mr-2">Your bills: </label>
                    <select className="form-control h-90 p-2" id="tenantId" style={{ 'background': '#f5d3d5' }} onChange={handleMonthChange}>
                      <option value="">Choose period</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className='row pt-3'>
                <div className='col-12'>
                </div>
              </div>
            </div>
            <div className="divider divider-bottom bg-light mt-5"></div>
          </section>
        </Layout>
    </PageContext.Provider>
  )
}

Billing.defaultProps = {
  title: 'Billing'
}