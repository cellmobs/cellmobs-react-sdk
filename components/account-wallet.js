
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { faLockAlt, faWallet } from '@fortawesome/pro-duotone-svg-icons'
import { useCallback, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faCircleNotch, faTimes } from "@fortawesome/pro-light-svg-icons";
import ReactTooltip from "react-tooltip";
import { listAccounts, saveAccount } from "redux/actions/accountActions";
import ReactModal from "react-modal";
import WalletItem from "./wallet-item";
import countriesData from "js/cellmobs/countries.json";
import { validateCard, validateCardExpiration } from "utils/validate-card";
import { getCardType } from "utils/validate-card";
import AccountContext from "./account-context";
import Swal from "sweetalert2";
import { setPrimaryAccount } from "redux/actions/accountActions";

Yup.addMethod(Yup.string, "creditCard", function (errorMessage) {
  return this.test(`test-card`, errorMessage, function (value) {
    const { path, createError } = this;
    const isValid = validateCard(value);
    if (isValid) return true;
    return createError({ path, message: errorMessage });
  });
});

Yup.addMethod(Yup.string, "creditCardDate", function (errorMessage) {
  return this.test(`test-card-expiration`, errorMessage, function (value) {
    const { path, createError } = this;
    const isValid = validateCardExpiration(value);
    if (isValid) return true;
    return createError({ path, message: errorMessage });
  });
});

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Invalid Cardholder Name")
    .required("Cardholder Name is required"),
  address1: Yup.string()
    .min(3, "Invalid Street Address")
    .required("Street Address is required"),
  city: Yup.string().min(2, "Invalid City").required("City is required"),
  countryCode: Yup.string().required("Country is required"),
  state: Yup.string().min(2, "Invalid Region").required("Region is required"),
  postCode: Yup.string()
    .min(3, "Invalid Postal Code")
    .required("Postal Code is required"),
  cvcCode: Yup.string()
    .min(3, "Invalid CVC")
    .max(4, "Invalid CVC")
    .required("CVC is required"),
  accountNumber: Yup.string()
    .creditCard("Credit card number is invalid")
    .required("Credit card number is required"),
  expires: Yup.string()
    .length(5, "Date is invalid")
    .creditCardDate("Date is invalid")
    .required("Expiration date is required"),
});


export default function AccountWallet(props) {

  const { subscription } = useContext(AccountContext)

  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const { user,account, accounts, loading } = useSelector((state) => ({
    user: state.auth.user,
    account: state.account.account,
    accounts: state.account.accounts,
    loading: state.account.fetching,
  }));
  const hasData = !!accounts?.length;
  const [isDefaultPayment, setIsDefaultPayment] = useState(false);

  const handleSwitchChange = (event) => {
    setIsDefaultPayment(event.target.checked);
  };

  const countries = countriesData.map(c => {
    return <option key={c.code} value={c.code}>{c.name}</option>
  })

  useEffect(() => {
    if (user?.id) dispatch(listAccounts({ identityId: user.id }));
  }, [dispatch, user?.id, account ,open]);

  const handleClickAdd = useCallback(() => {
    setIsDefaultPayment(false)
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);


  const handleSetPrimary = (e) => {
    let identityAccountId= e.target.id;
    Swal.fire({
      text: "Do you want to update your Default Payment Method?",
      showCancelButton: true,
      icon: 'info',
      iconColor: '#9c0d14',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setPrimaryAccount({ id: identityAccountId }));
        Swal.fire({
          title: 'Success!',
          text: "Your Default Payment Method is updated",
          icon: 'success',
          iconColor: '#9c0d14',
        })
      }
    })
  };


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      accountNumber: '',
      cvcCode: '',
      expires: ''
    }
  });

  const onSubmit = (values) => {
    console.log('hola')
    const {
      expires,
      cvcCode,
      city,
      state,
      address1,
      postCode,
      name,
      accountNumber,
      countryCode,
    } = values;
    const [expMonth, expYear] = expires.split("/");
    const cardNumber = accountNumber.replaceAll(" ", "");

    dispatch(
      saveAccount({
        identityId: user.id,
        accountType: getCardType(cardNumber),
        name: name,
        expMonth,
        expYear: `20${expYear}`,
        cvcCode: `${cvcCode}`,
        accountNumber: cardNumber,
        isPrimary: isDefaultPayment,
        createdById: user.id,
        billingAddress: {
          address1: address1,
          city,
          state: state,
          postCode,
          countryCode: countryCode,
          locationType: "BILLING", // hardcode
        },
      })
    );
    handleClose();
  }

  return (

    <div className='col'>

      <h2 className="display-6">
        <FontAwesomeIcon icon={faWallet} size="1x" color="#9c0d14" className="mr-3" />
        Wallet</h2>
      <p className="mb-4">
        This is your wallet. You can add and remove payment information and set your default payment method.
      </p>
      <div>
        {!hasData && !loading && (
          <div >
            You have no current payment information on file
          </div>
        )}
        <div className="col-12 mb-5">
          {accounts.map((wallet) => (
            <WalletItem key={wallet.id} {...wallet} handleSetPrimary={handleSetPrimary} />
          ))}
        </div>
        <button
          className="btn-primary btn"
          onClick={handleClickAdd}
          variant="transparent"
        >
          Add New Card
        </button>
        <ReactModal
          isOpen={open}
          style={customStyles}
          className="modal-container"
          ariaHideApp={false}>

          <div className="col-sm-12 modal-form">
            <div className="text-right">
              <a href="#" onClick={handleClose}><FontAwesomeIcon icon={faTimes} size="2x" /></a>
            </div>
            <h4 className="mb-4">Add Payment Information</h4>
            <form>
              <div className="form-group row">
                <small>Card Holder</small>
                <input type="text" {...register('name')} autoCapitalize="none"
                  className="form-control" placeholder="Cardholder Name" />
                <small className="form-error">{errors.name?.message}</small>
              </div>
              <div className="form-group row">
                <small>Credit Card Number</small>
                <input type="text" {...register('accountNumber')} autoCapitalize="none"
                  className="form-control" placeholder="Credit Card Number" />
                <small className="form-error">{errors.accountNumber?.message}</small>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <div className="form-group">
                    <small>Expires</small>
                    <input type="text" {...register('expires')} autoCapitalize="none"
                      className="form-control" placeholder="MM/YY" />
                    <small className="form-error">{errors.expires?.message}</small>
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="form-group">
                    <small>CVC</small>
                    <input type="text" {...register('cvcCode')} autoCapitalize="none"
                      className="form-control" placeholder="Code" />
                    <small className="form-error">{errors.cvcCode?.message}</small>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <small>Address</small>
                <input type="text" {...register('address1')} autoCapitalize="none"
                  className="form-control" placeholder="Billing Street Address" />
                <small className="form-error">{errors.address1?.message}</small>
              </div>
              <div className="form-group row">
                <small>City</small>
                <input type="text" {...register('city')} autoCapitalize="none"
                  className="form-control" placeholder="City" />
                <small className="form-error">{errors.city?.message}</small>
              </div>
              <div className="row">
                <div className="col-xs-6">
                  <div className="form-group">
                    <small>State</small>
                    <input type="text" {...register('state')} autoCapitalize="none"
                      className="form-control" placeholder="State" />
                    <small className="form-error">{errors.state?.message}</small>
                  </div>
                </div>
                <div className="col-xs-6">
                  <div className="form-group">
                    <small>PostCode</small>
                    <input type="text" {...register('postCode')} autoCapitalize="none"
                      className="form-control" placeholder="Postal Code" />
                    <small className="form-error">{errors.postCode?.message}</small>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <small>Country</small>
                <select {...register('countryCode')} className="form-control" defaultValue="US" style={{height: 'inherit'}} >
                  {countries}
                </select>
                <small className="form-error">{errors.countryCode?.message}</small>
              </div>
              <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="DefaultPaymentSwitch" onChange={handleSwitchChange}/>
                <label className="custom-control-label text-left" for="DefaultPaymentSwitch">is Default Payment Method?</label>
              </div>
              <button className="btn btn-primary btn-block col-xs-12 col-sm-3 mt-5 mb-5" type="submit" onClick={handleSubmit(onSubmit)}>
                Save
                {loading &&
                  <FontAwesomeIcon icon={faCircleNotch} className="fa-spin ml-2" />
                }
              </button>

            </form>
          </div>

        </ReactModal>
      </div>

    </div>

  )
}

//boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',

const customStyles = {
  content: {
    top: '50%',
    zIndex: 1100,
    left: '50%',
    right: '70%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
};