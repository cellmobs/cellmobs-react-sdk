import * as integrationApi from './api/service'
import * as accountApi from './identity/account'
import * as connectionApi from './identity/connection'
import * as inboxApi from './identity/inbox'
import * as identityApi from './identity'
import * as oauthApi from './oauth/settings'
import * as organizationApi from './organization'
import * as memberApi from './organization/member'
import * as pollApi from './poll'
import * as pollResponseApi from './poll/response'
import * as featureApi from './product/feature'
import * as productApi from './product'
import * as inventoryApi from './product/inventory'
import * as priceApi from './product/price'
import * as rewardApi from './reward'
import * as triggerApi from './reward/trigger'
import * as vocabApi from './vocab'
import * as typeValueApi from './vocab/value'
import * as authApi from './auth'
import * as cartApi from './cart'
import * as contentApi from './content'
import * as dataseriesApi from './dataseries'
import * as entityApi from './entity'
import * as fileApi from './file'
import * as inviteApi from './invite'
import * as locationApi from './location'
import * as modelApi from './model'
import * as metainfoApi from './metainfo'
import * as orderApi from './order'
import * as pageApi from './page'
import * as projectApi from './project'
import * as tagApi from './tag'
import * as tenantApi from './tenant'
import * as transactionApi from './transaction'
import * as workApi from './work'
import * as apikeyApi from './apikey'
import * as subscriptionApi from './subscription'

const api = {
    api: {
        service: integrationApi
    },
    auth: authApi,
    cart: cartApi,
    content: contentApi,
    dataseries: dataseriesApi,
    entity: entityApi,
    file: fileApi,
    identity: {
        ...identityApi,
        account: accountApi,
        connection: connectionApi,
        inbox: inboxApi
    },
    invite: inviteApi,
    location: locationApi,
    model: modelApi,
    oauth: {
        settings: oauthApi
    },
    order: orderApi,
    subscription: subscriptionApi,
    organization: {
        ...organizationApi,
        member: memberApi
    },
    page: pageApi,
    poll: {
        ...pollApi,
        response: pollResponseApi
    },
    product: {
        ...productApi,
        feature: featureApi,
        inventory: inventoryApi,
        price: priceApi
    },
    project: projectApi,
    reward: {
        ...rewardApi,
        trigger: triggerApi
    },
    tag: tagApi,
    apikey: apikeyApi,
    tenant: tenantApi,
    metainfo: metainfoApi,
    transaction: transactionApi,
    vocab: {
        ...vocabApi,
        value: typeValueApi
    },
    work: workApi
}

export default api