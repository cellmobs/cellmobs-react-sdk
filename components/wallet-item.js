// modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
} from "@fortawesome/pro-regular-svg-icons";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
// utils
import { deleteAccount } from "redux/actions/accountActions";
import { faCreditCard } from "@fortawesome/pro-solid-svg-icons";
import Swal from "sweetalert2";
import ReactTooltip from "react-tooltip";
// styles


export default function WalletItem(props) {
  const {
    id,
    isPrimary,
    entityStatus,
    accountType,
    bankName,
    className,
    accountLastFour,
    handleSetPrimary
  } = props;
  const card_name = props.name || bankName;
  const [prepareDelete, setPrepareDelete] = useState(false);
  const dispatch = useDispatch();

  const handleClose = useCallback(() => setPrepareDelete(false), []);

  const handleDelete = useCallback(() => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      iconColor: '#9c0d14',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {

      if (result.isConfirmed) {
        dispatch(deleteAccount(id));
        handleClose();
        Swal.fire({
          title: 'Success!',
          text: "Your card has been deleted!",
          icon: 'success',
          iconColor: '#9c0d14',
        })
      }
    })

  }, [dispatch, id, handleClose]);

  const renderFour = () => {
    if (!accountLastFour) return null;
    return (
      <div className="">•••• •••• •••• {accountLastFour}</div>
    );
  };

  const renderIsPrimary = () => {
  // if (isPrimary) return <FontAwesomeIcon icon={faCheck} size="1x" title="Default Payment Method" data-tip data-for="defaultCard"  />;
    return (<>
      <button disabled={isPrimary} id={id} onClick={handleSetPrimary} className="btn btn-primary btn-block" style={{padding:'2px'}}>
        {isPrimary ? 'Default Card' : 'Set as Default'}
        {/* <FontAwesomeIcon size="1x" data-toggle="tooltip"
          icon={faHeart}
          className="heart-icon"
          style={{ color: isPrimary ? 'red' : 'black' }}
          title={isPrimary ? 'Your default payment method' : 'Set as Default payment method'}
        /> */}
      </button>
    </>);

  };

  return (
    <>
      <div className="mb-4 row" >
      <div className="col-3">
          <FontAwesomeIcon icon={faCreditCard} size="1x" className="mr-3" />
          {accountType}
        </div>
        <div className="col-2">
          {card_name}
        </div>
        <div className="col-3">
          {renderFour()}
        </div>
        <div className="col-3">
          {renderIsPrimary()}
        </div>
        <div className="col-1">
          <a href="#" onClick={handleDelete}><FontAwesomeIcon icon={faTrash} size="1x" data-toggle="tooltip" title="Delete" data-tip data-for="deleteCard" /></a>
          <ReactTooltip id="deleteCard" place="top" effect="solid">Click to remove this payment method</ReactTooltip>
          {/* <ReactTooltip id="defaultCard" place="top" effect="solid">Your default payment method</ReactTooltip> */}
        </div>
      </div>
    </>
  );
}

