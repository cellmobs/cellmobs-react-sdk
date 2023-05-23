
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnalytics, faBarcodeAlt, faFileInvoiceDollar, faKey } from '@fortawesome/pro-duotone-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { listOrders, getOrder, currentCharges } from 'redux/actions/orderActions';
import AccountContext from "./account-context";
import { useContext, useEffect, useState } from "react";
import { currencyWithCommas, formatDate, numberWithCommas } from "../js/cellmobs/common";
import { listTransactions } from "redux/actions/transactionActions";

export default function AccountSubscription(props) {

  const { page } = props
  const { user, subscription, organization } = useContext(AccountContext)

  const dispatch = useDispatch();
  const [orderId, setOrderId] = useState("")
  //Initializing orderid value to "-" to not display payment history on page load
  const [orderIdLong, setOrderIdLong] = useState("-");

  let order = useSelector(state => state.order.order);
  let orders = useSelector(state => state.order.orders);
  let transactions = useSelector(state => state.transaction.transactions);

  useEffect(() => {
    if (orderId == "") {
      dispatch(currentCharges(user.id))
    } else {
      dispatch(getOrder(orderId))
    }
    dispatch(listTransactions({
      ordid: orderIdLong,
      oid : organization?.id
    }));

    dispatch(listOrders({
      organizationId: organization.id,
      //identityId: user.id,
      fields: 'orderId,id',
      page: 0,
      size: 100,
      sortBy: 'orderId',
      sortDirection: 'DESC'
    }))

  }, [orderIdLong, orderId])

  const handleInvoiceChange = (e) => {
    console.log(e.target.value)
    console.log(e.target[e.target.selectedIndex].text)
    setOrderId(e.target.value)
    setOrderIdLong(e.target[e.target.selectedIndex].text.padStart(6, '0'));
  }

  function renderInvoiceOptions() {
    return orders?.map((t) => {
      return <option key={t.id} value={t.id}>{t.orderId} </option>;
    })
  }


  function renderCurrentCharges() {
    return order?.cart?.items.map(i => {
      return <tr key={i.id}>
        <td>{i.product.name}</td>
        <td><small>{numberWithCommas(i.product.currentPriceRate.freeQuantity) || 0}</small></td>
        <td><small>{numberWithCommas(i.itemCount)}</small></td>
        <td><small>{i.itemUnitType}</small></td>
        <td align="right">{currencyWithCommas(i.totalPrice)}</td>
      </tr>
    })
  }

  function renderPaymentHistory() {

    return transactions?.map(i => {
      return <tr key={i.id}>
        <td><small>{i.transDate}</small></td>
        <td><small>{i.name}</small></td>
        <td><small>{i.processorType}</small></td>
        <td><small>{i.transId}</small></td>
        <td><small>{currencyWithCommas(i.amount)}</small></td>
        <td><small>{i.entityStatus}</small></td>
      </tr>
    })
  }


  return (

    <div className='col'>

      <h2 className="display-6">
        <FontAwesomeIcon icon={faFileInvoiceDollar} size="1x" color="#9c0d14" className="mr-3" />

        Billing</h2>
      <p>
        This is the billing dashboard for your account. It will provide an overview of the usage and charges for your current billing cycle and you can access  your past invoices and payments.
      </p>
      <p className="pb-3">
        For more detailed activity reports related to your applications content and workflows please consult your app dashboard or the Cellmobs management consoles for a given app.
      </p>
      <div className='col-xs-12 col-sm-5 text-center'>
        <div className="input-group">
          <label className="control-label mt-2 mr-2">Your Invoices: </label>
          <select className="form-control h-90 p-2" id="orderId" style={{ 'background': '#f5d3d5' }} onChange={handleInvoiceChange}>
            <option value="">Current Charges</option>
            {renderInvoiceOptions()}
          </select>
        </div>
      </div>


      <h4 className="mt-5">Current Estimated Charges</h4>
      <p>Your current billing cycle started on <span className="span-highlight">{subscription.currentPeriodStart}</span> and will end <span className="span-highlight">{subscription.currentPeriodEnd}</span>.</p>
      <h6>
        Your current balance is  <span className="span-highlight">{currencyWithCommas(order.total)}</span>
      </h6>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <td ><small>Product</small></td>
              <td><small>Free Tier</small></td>
              <td><small>Pay Usage</small></td>
              <td><small>Unit</small></td>
              <td align="right">Total</td>
            </tr>
          </thead>
          <tbody>
            {renderCurrentCharges()}
            <tr>
              <td >Total</td>
              <td></td>
              <td></td>
              <td></td>
              <td align="right">{currencyWithCommas(order.total)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {transactions?.length > 0 &&
        <div>
          <h5 className="mt-5">Payment History</h5>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <td ><small>Date</small></td>
                  <td><small>Name</small></td>
                  <td><small>Merchant</small></td>
                  <td><small>Transaction Id</small></td>
                  <td><small>Amount</small></td>
                  <td><small>Status</small></td>
                </tr>
              </thead>
              <tbody>
                {renderPaymentHistory()}
              </tbody>
            </table>
          </div>
        </div>}
    </div>


  )
}