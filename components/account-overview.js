import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnalytics, faCommentsAltDollar, faHeadSideHeadphones, faUsersClass, faPhotoVideo, faCreditCard } from '@fortawesome/pro-duotone-svg-icons'
import {ADMIN_BASE_URL,} from 'js/cellmobs/constants'

export default function AccountOverview() {

  return (
    <div className='col'>

    <h2 className="display-6">
      <FontAwesomeIcon icon={faAnalytics} size="1x" color="#9c0d14" className="mr-3" />

      Activity Overview</h2>
    <p>
      For more detailed activity reports related to your application content and workflows please consult the <a href={ADMIN_BASE_URL}>Cellmobs management console</a>.
    </p>
  </div>


  )
}