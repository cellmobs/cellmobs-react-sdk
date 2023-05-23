import {
    SET_PRODUCT,
    SET_PRODUCTS,
    SET_PAGINATION,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CLEAR_PRODUCT,
    CLEAR_PRODUCTS,
    CLEAR_PAGINATION,
    SET_PRICE,
    SET_PRICES,
    SET_PRICE_PAGINATION,
    ADD_PRICE,
    REMOVE_PRICE,
    CLEAR_PRICE,
    CLEAR_PRICES,
    CLEAR_PRICE_PAGINATION,
    SET_INVENTORY,
    SET_INVENTORIES,
    SET_INVENTORY_PAGINATION,
    ADD_INVENTORY,
    REMOVE_INVENTORY,
    CLEAR_INVENTORY,
    CLEAR_INVENTORIES,
    CLEAR_INVENTORY_PAGINATION,
    SET_FEATURE,
    SET_FEATURES,
    SET_FEATURE_PAGINATION,
    ADD_FEATURE,
    REMOVE_FEATURE,
    CLEAR_FEATURE,
    CLEAR_FEATURES,
    CLEAR_FEATURE_PAGINATION,
    SET_FETCHING,
    SET_ERROR 
} from '../types/productTypes';

const initialState = {
    product: {},
    products: [],
    pagination: {},
    price: {},
    prices: [],
    pricePagination: {},
    inventory: {},
    inventories: [],
    inventoryPagination: {},
    feature: {},
    features: [],
    featurePagination: {},
    fetching: false,
    error: null
}

const productReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case SET_PRODUCT:
            /**
             * payload: Product
             */
            return { ...state, product: payload };
        case SET_PRODUCTS:
            /**
             * payload: List<Product>
             */
            return { ...state, products: payload };
        case SET_PAGINATION:
            /**
             * payload: Page<Product>, not including content
             */
            return { ...state, pagination: payload };
        case ADD_PRODUCT:
            /**
             * payload: Product
             */
            if (state.products.filter(p => p.id == payload.id).length > 0) {
                return { ...state, products: [...state.products.map(p => p.id == payload.id ? payload : p)] };
            }
            return { ...state, products: [...state.products, payload] };
        case REMOVE_PRODUCT:
            /**
             * payload: Product.id
             */
            return { ...state, products: state.products.filter(element => element.id !== payload) };
        case CLEAR_PRODUCT:
            /**
             * payload: undefined
             */
            return { ...state, product: {}}
        case CLEAR_PRODUCTS:
            /**
             * payload: undefined
             */
            return { ...state, products: []}
        case CLEAR_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, pagination: {}}
        case SET_PRICE:
            /**
             * payload: Price
             */
            return { ...state, price: payload };
        case SET_PRICES:
            /**
             * payload: List<Price>
             */
            return { ...state, prices: payload };
        case SET_PRICE_PAGINATION:
            /**
             * payload: Page<Price>, not including content
             */
            return { ...state, pricePagination: payload };
        case ADD_PRICE:
            /**
             * payload: Price
             */
            return { ...state, prices: [...state.prices,  payload] };
        case REMOVE_PRICE:
            /**
             * payload: Price.id
             */
            return { ...state, prices: state.prices.filter(element => element.id !== payload) };
        case CLEAR_PRICE:
            /**
             * payload: undefined
             */
            return { ...state, price: {}}
        case CLEAR_PRICES:
            /**
             * payload: undefined
             */
            return { ...state, prices: []}
        case CLEAR_PRICE_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, pricePagination: {}}
        case SET_INVENTORY:
            /**
             * payload: Inventory
             */
            return { ...state, inventory: payload };
        case SET_INVENTORIES:
            /**
             * payload: List<Inventory>
             */
            return { ...state, inventories: payload };
        case SET_INVENTORY_PAGINATION:
            /**
             * payload: Page<Inventory>, not including content
             */
            return { ...state, inventoryPagination: payload };
        case ADD_INVENTORY:
            /**
             * payload: Inventory
             */
            return { ...state, inventories: [...state.inventories,  payload] };
        case REMOVE_INVENTORY:
            /**
             * payload: Inventory.id
             */
            return { ...state, inventories: state.inventories.filter(element => element.id !== payload) };
        case CLEAR_INVENTORY:
            /**
             * payload: undefined
             */
            return { ...state, inventory: {}}
        case CLEAR_INVENTORIES:
            /**
             * payload: undefined
             */
            return { ...state, inventories: []}
        case CLEAR_INVENTORY_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, inventoryPagination: {}}
        case SET_FEATURE:
            /**
             * payload: Feature
             */
            return { ...state, feature: payload };
        case SET_FEATURES:
            /**
             * payload: List<Feature>
             */
            return { ...state, features: payload };
        case SET_FEATURE_PAGINATION:
            /**
             * payload: Page<Feature>, not including content
             */
            return { ...state, featurePagination: payload };
        case ADD_FEATURE:
            /**
             * payload: Feature
             */
            return { ...state, features: [...state.features,  payload] };
        case REMOVE_FEATURE:
            /**
             * payload: Feature.id
             */
            return { ...state, features: state.features.filter(element => element.id !== payload) };
        case CLEAR_FEATURE:
            /**
             * payload: undefined
             */
            return { ...state, feature: {}}
        case CLEAR_FEATURES:
            /**
             * payload: undefined
             */
            return { ...state, features: []}
        case CLEAR_FEATURE_PAGINATION:
            /**
             * payload: undefined
             */
            return { ...state, featurePagination: {}}
        case SET_FETCHING:
            /**
             * payload: Boolean
             */
            return { ...state, fetching: payload };
        case SET_ERROR:
            /**
             * payload: ResponseEntity<Product>
             */
            return { ...state, error: payload };
        default:
            break;
    }
    return state;
}

export default productReducer;