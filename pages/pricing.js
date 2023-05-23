import Header from '../components/header';
import Navbar from '../components/navbar';
import Layout from 'layouts';
import Footer from '../components/footer';
import PageContext from '../components/page-context';
import { isError, parsePageSection, currencyWithCommas, numberWithCommas } from '../js/cellmobs/common';
import { renderPage } from 'js/cellmobs/api/page';
import { listProducts } from 'js/cellmobs/api/product';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from '@fortawesome/pro-duotone-svg-icons'
import { faCheck, faTimes } from '@fortawesome/pro-regular-svg-icons';
import { faCartPlus, faCoins, faSmileWink } from '@fortawesome/pro-solid-svg-icons';
import FormContact from '../components/form-contact';
import { useEffect, useState } from "react";
import { jwtIsValid } from "js/cellmobs/common";
import Cookie from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
//import { listProducts } from 'redux/actions/productActions';

export async function getServerSideProps(context) {
  const page = await renderPage('/pricing')
  const products = await listProducts({
    tagStrings: "feature,service",
    matchAnyTag: true,
    sortBy: "sequence",
    sortDirection: "ASC",
  })
  

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
      products: products?.content,
      params: {}
    }
  }
}


export default function Pricing(props) {

  const { page, products } = props
  let [isUserNotLoggedIn, setisUserNotLoggedIn] = useState(true);
//  let products = useSelector(state => state.product.products);

  const dispatch = useDispatch();

  useEffect(() => {
    //setisUserNotLoggedIn(!jwtIsValid(Cookie.get('cmauth')));
    // let params = {
    //   tagStrings: "feature,service",
    //   matchAnyTag: true,
    //   sortBy: "sequence",
    //   sortDirection: "ASC",
    // }
    // dispatch(listProducts(params))
  }, []);

  const flickityOptions = {
    initialIndex: 2,
    imagesLoaded: true,
    wrapAround: true
  }

  function getSingleUserPrice() {
    let usersProduct = products.filter(product =>
      product?.priceRates[0]?.unitType === "USERS");
    if (usersProduct.length > 0) { return parseFloat(usersProduct[0]?.priceRates[0]?.retailPrice).toFixed(2) }
    return "";
  }

  function getFreeTierText(priceRates) {
    switch (priceRates?.unitType) {
      case 'REQUESTS':
        return `${priceRates?.freeQuantity / 1000}k / month`
      case 'USERS':
        return priceRates?.freeQuantity
      case 'GIGABYTES':
        return `up&nbsp;to ${priceRates?.freeQuantity}GB`
      case 'APPS':
        return priceRates.freeQuantity
      case 'MEGABYTES':
        return `up&nbsp;to ${priceRates?.freeQuantity}MB`
      default:
        return `up&nbsp;to ${numberWithCommas(priceRates.freeQuantity)} ${priceRates.unitType?.toLowerCase()} `
    }
  }

  function getPayAsYouGoText(priceRates) {
    switch (priceRates?.unitType) {
      case 'REQUESTS':
        return `${currencyWithCommas(priceRates.retailPrice)} for ${numberWithCommas(priceRates.quantity)} requests`
      case 'USERS':
        return `${currencyWithCommas(priceRates.retailPrice)} / member / month`
      case 'GIGABYTES':
        return `${currencyWithCommas(priceRates.retailPrice)} per GB / month`
      case 'APPS':
        return `${currencyWithCommas(priceRates.retailPrice)} / app / month`
      case 'MEGABYTES':
        return `${currencyWithCommas(priceRates.retailPrice)} per MB / month`
      case 'MONTH':
        return `${currencyWithCommas(priceRates.retailPrice)} per month`
      default:
        return `${currencyWithCommas(priceRates.retailPrice)} / ${numberWithCommas(priceRates.quantity)} ${priceRates.unitType?.toLowerCase()} /  ${priceRates.interval?.toLowerCase()}`
    }
  }

  function getServiceIconBasedOnQuantity(isAvailable) {
    return <>
      <div className="col-6 col-lg-4 d-flex justify-content-center py-3 py-md-4">
        {isAvailable ? <div className="rounded-circle bg-success-alt">
          <FontAwesomeIcon icon={faCheck} size="2x" className="m-2 icon icon-xs bg-info" style={{ 'width': '20px' }} />
        </div> :
          <div className="rounded-circle bg-danger-alt">
            <FontAwesomeIcon icon={faTimes} size="2x" className="m-2 icon icon-xs bg-danger" style={{ 'width': '20px' }} />
          </div>}
      </div>
    </>
  }

  function renderServicePricingOptions(product) {
    return <>
      {getServiceIconBasedOnQuantity(product.priceRates[0].freeQuantity > 0)}
      {getServiceIconBasedOnQuantity(product.priceRates[0].quantity > 0)}
    </>
  }

  function renderFeaturePricingOptions(product) {
    return <>
      <div className="col-6 col-lg-4 d-flex justify-content-center py-3 py-md-4">
        <span>{getFreeTierText(product?.priceRates[0])}</span>
      </div>
      <div className="col-6 col-lg-4 d-flex justify-content-center py-3 py-md-4">
        <span>{getPayAsYouGoText(product?.priceRates[0])}</span>
      </div>
    </>
  }

  function renderDynamicPricingOptions() {
    let isService = false;
    return products?.map(p => {
      isService = p.tagStrings.includes("service");
      return (
        <div className="row no-gutters align-items-center" key={p.id}>
          <div className="col-12 col-lg-4  py-3 py-md-4">
            <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
              <h6 className="mb-0 ml-lg-4">{p.name}</h6>
              <div className="ml-2 tooltip-circle bg-dark text-white" data-toggle="tooltip" title={p.description}>?</div>
            </div>
          </div>
          {isService ? renderServicePricingOptions(p) : renderFeaturePricingOptions(p)}
        </div>)
    });
  }

  return (
    <PageContext.Provider value={props}>
      <Layout>
        <Header />
        <Navbar title="Cellmobs" logo="lite" text="dark" />

        <div className="bg-primary-3 text-white o-hidden" data-overlay>
          <section className="pb-0">
            <div className="container pb-5">
              <div className="row text-center justify-content-center pt-5">
                <div className="col">
                  <h1 className="display-3 cellmobs-editable" data-id="title" data-meta="TEXT">
                    {parsePageSection(
                      page,
                      'title',
                      'Pricing that scales with you'
                    )}
                  </h1>

                </div>
              </div>
              <div className="row text-center justify-content-center">
                <div className="col-md-9 col-lg-8 col-xl-7">
                  <p className="lead cellmobs-editable" data-id="lead" data-meta="TEXT">
                    {parsePageSection(
                      page,
                      'lead',
                      'Use our free tier to get you started.'
                    )}


                    {/* AWS offers you a pay-as-you-go approach for pricing for the vast majority of our cloud services. With AWS you pay only for the individual services you need, for as long as you use them, and without requiring long-term contracts or complex licensing. AWS pricing is similar to how you pay for utilities like water and electricity. You only pay for the services you consume, and once you stop using them, there are no additional costs or termination fees. */}
                  </p>

                </div>
              </div>
            </div>
            <div className="divider divider-bottom"></div>
          </section>
        </div>
        <section className="pt-5">
          <div className="container">
            <div className="row justify-content-end sticky-top bg-white">
              <div className="col-lg-4 col-6 py-3 py-md-4 border-bottom">
                <div className="d-flex flex-column align-items-center text-center">
                  <h4>Free Tier</h4>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <span className="h5 mb-0 mr-1 mr-sm-2">$</span>
                    <span className="display-4 mb-0 text-dark">0</span>
                  </div>
                  <div className="text-small mb-3 mb-md-4">Perfect for single developer</div>
                  {isUserNotLoggedIn &&
                    <a href="/signup?pid=" className="btn btn-outline-primary btn-block">
                      <span>Go</span>
                      <span className="d-none d-md-inline-block"></span>
                    </a>}
                </div>
              </div>
              <div className="col-lg-4 col-6 py-3 py-md-4 border-bottom">
                <div className="d-flex flex-column align-items-center text-center">
                  <h4>Pay As You Go</h4>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <span className="h5 mb-0 mr-1 mr-sm-2">$</span>
                    <span className="display-4 mb-0 text-dark">{getSingleUserPrice()}</span>
                  </div>
                  <div className="text-small mb-3 mb-md-4">Per team member, per month</div>
                  {isUserNotLoggedIn &&
                    <a href="/signup?pid=" className="btn btn-primary btn-block">
                      <span>Go</span>
                      <span className="d-none d-md-inline-block"></span>
                    </a>}
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="pricing-table-section text-center text-lg-left">
                <div className="row no-gutters">
                  <div className="col">
                    <h5 className="mb-4">Features</h5>
                  </div>
                </div>
                <div className="border rounded">
                  {renderDynamicPricingOptions()}
                </div>
              </div>


            </div>
          </div>
        </section>
        <section className="p-0">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 mb-md-0 text-center">
                <div className="px-xl-3">
                  <div>
                    <div className="d-inline-block mb-4 p-3 p-md-4 rounded-circle bg-primary-2-alt">
                      <FontAwesomeIcon icon={faCartPlus} size="3x" className="m-2 icon bg-danger" />
                    </div>
                    <h5>Pay-as-you-go</h5>
                    <div>
                      Pay-as-you-go allows you to easily adapt to changing business needs without overcommitting budgets and improving your responsiveness to changes.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0 text-center">
                <div className="px-xl-3">
                  <div>
                    <div className="d-inline-block mb-4 p-3 p-md-4 rounded-circle bg-primary-2-alt">
                      <FontAwesomeIcon icon={faSmileWink} size="3x" className="m-2 icon bg-danger" />
                    </div>
                    <h5>Free tier</h5>
                    <div>
                      Explore our platform and servics using the Free Tier.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0 text-center">
                <div className="px-xl-3">
                  <div>
                    <div className="d-inline-block mb-4 p-3 p-md-4 rounded-circle bg-primary-2-alt">
                      <FontAwesomeIcon icon={faCoins} size="3x" className="m-2 icon bg-danger" />
                    </div>
                    <h5>Incremental Savings</h5>
                    <div>
                      We offer volume based discounts when your usage increases. Our pricing is tiered, meaning the more you use, the less you pay.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="divider divider-bottom"></div>
        </section>

        <section className="bg-primary text-white pb-0">
          <div className="container">
            <div className="row section-title justify-content-center text-center">
              <div className="col-md-9 col-lg-8 col-xl-7">
                <h3 className="display-4 cellmobs-editable" data-id="title-quotes" data-meta="TEXT">
                  {parsePageSection(
                    page,
                    'title-quotes',
                    'Contact us for Custom Integrations and Training'
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

            <FormContact leadSource="pricing-page" />

          </div>
          <div className="divider divider-bottom bg-primary-3"></div>
        </section>


      </Layout>
    </PageContext.Provider>
  )
}
