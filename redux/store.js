import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import accountReducer from './reducers/accountReducer';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartReducer';
import connectionReducer from './reducers/connectionReducer';
import contentReducer from './reducers/contentReducer';
import entityReducer from './reducers/entityReducer';
import identityReducer from './reducers/identityReducer';
import inboxReducer from './reducers/inboxReducer';
import integrationReducer from './reducers/integrationReducer';
import inviteReducer from './reducers/inviteReducer';
import locationReducer from './reducers/locationReducer';
import oauthReducer from './reducers/oauthReducer';
import orderReducer from './reducers/orderReducer';
import organizationReducer from './reducers/organizationReducer';
import pageReducer from './reducers/pageReducer';
import pollReducer from './reducers/pollReducer';
import productReducer from './reducers/productReducer';
import projectReducer from './reducers/projectReducer';
import rewardReducer from './reducers/rewardReducer';
import subscriptionReducer from './reducers/subscriptionReducer';
import tagReducer from './reducers/tagReducer';
import tenantReducer from './reducers/tenantReducer';
import transactionReducer from './reducers/transactionReducer';
import triggerReducer from './reducers/triggerReducer';
import vocabReducer from './reducers/vocabReducer';
import workReducer from './reducers/workReducer';
import metainfoReducer from './reducers/metainfoReducer';
import apikeyReducer from './reducers/apikeyReducer';

const rootReducer = combineReducers({
    account: accountReducer,
    auth: authReducer,
    cart: cartReducer,
    connection: connectionReducer,
    content: contentReducer,
    entity: entityReducer,
    identity: identityReducer,
    inbox: inboxReducer,
    integration: integrationReducer,
    invite: inviteReducer,
    location: locationReducer,
    metainfo: metainfoReducer,
    oauth: oauthReducer,
    order: orderReducer,
    organization: organizationReducer,
    page: pageReducer,
    poll: pollReducer,
    product: productReducer,
    project: projectReducer,
    reward: rewardReducer,
    tag: tagReducer,
    tenant: tenantReducer,
    transaction: transactionReducer,
    trigger: triggerReducer,
    subscription: subscriptionReducer,
    vocab: vocabReducer,
    work: workReducer,
    apikey: apikeyReducer
})

const configureStore = () => createStore(
    rootReducer, 
    applyMiddleware(thunk));

export default configureStore;