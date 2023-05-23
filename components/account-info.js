import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnalytics, faCommentsAltDollar, faHeadSideHeadphones, faUsersClass, faPhotoVideo, faCreditCard, faUser } from '@fortawesome/pro-duotone-svg-icons'
import { useContext, useEffect, useMemo, useState } from "react";
import api from "js/cellmobs/api";
import AccountContext from "./account-context";
import { userAgent } from "next/server";


export default function AccountInfo() {

  const { user, subscription, organization } = useContext(AccountContext)

  return (
    <div className='col'>

      <h2 className="display-6">
        <FontAwesomeIcon icon={faUser} size="1x" color="#9c0d14" className="mr-3" />

        Your Info</h2>
      <p  className="pb-3">
        This is your account Info.
      </p>
      <h5 >Account Owner</h5>
      <ul className="list-unstyled">
        <li><label><b>Name: </b></label> {user.fullName}</li>
        <li><label><b>Email: </b></label> {user.email}</li>
      </ul>
      <h5 >Organization</h5>
      <ul className="list-unstyled">
        <li>{organization.name}</li>
      </ul>
    </div>

  )
}