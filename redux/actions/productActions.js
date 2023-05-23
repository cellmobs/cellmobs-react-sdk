import api from 'js/cellmobs/api';
import {
    SET_PRODUCT,
    SET_PRODUCTS,
    SET_PAGINATION,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    SET_PRICE,
    SET_PRICES,
    SET_PRICE_PAGINATION,
    ADD_PRICE,
    REMOVE_PRICE,
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
    SET_FETCHING,
    SET_ERROR
} from '../types/productTypes';

export const listProducts = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.listProducts(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_PRODUCTS, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveProduct = (product) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.saveProduct(product)
        .then(response => {
            dispatch({type: ADD_PRODUCT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getProduct = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.getProduct(id)
        .then(response => {
            dispatch({type: SET_PRODUCT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneProduct = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.cloneProduct(id)
        .then(response => {
            dispatch({type: ADD_PRODUCT, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteProduct = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.deleteProduct(id)
        .then(response => {
            dispatch({type: REMOVE_PRODUCT, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const listPrices = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.price.listPrices(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_PRICES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const savePrice = (price) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.price.savePrice(price)
        .then(response => {
            dispatch({type: ADD_PRICE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getPrice = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.price.getPrice(id)
        .then(response => {
            dispatch({type: SET_PRICE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const clonePrice = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.price.clonePrice(id)
        .then(response => {
            dispatch({type: ADD_PRICE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deletePrice = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.price.deletePrice(id)
        .then(response => {
            dispatch({type: REMOVE_PRICE, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const listInventories = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.inventory.listInventories(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_INVENTORIES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveInventory = (inventory) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.inventory.saveInventory(inventory)
        .then(response => {
            dispatch({type: ADD_INVENTORY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getInventory = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.inventory.getInventory(id)
        .then(response => {
            dispatch({type: SET_INVENTORY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneInventory = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.inventory.cloneInventory(id)
        .then(response => {
            dispatch({type: ADD_INVENTORY, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteInventory = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.inventory.deleteInventory(id)
        .then(response => {
            dispatch({type: REMOVE_INVENTORY, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const listFeatures = (params) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.feature.listFeatures(params)
        .then(response => {
            let { content, ...pagination } = response
            dispatch({type: SET_FEATURES, payload: content});
            dispatch({type: SET_PAGINATION, payload: pagination});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const saveFeature = (feature) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.feature.saveFeature(feature)
        .then(response => {
            dispatch({type: ADD_FEATURE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const getFeature = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.feature.getFeature(id)
        .then(response => {
            dispatch({type: SET_FEATURE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const cloneFeature = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.feature.cloneFeature(id)
        .then(response => {
            dispatch({type: ADD_FEATURE, payload: response});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}

export const deleteFeature = (id) => {
    return dispatch => {
        dispatch({type: SET_FETCHING, payload: true})
        api.product.feature.deleteFeature(id)
        .then(response => {
            dispatch({type: REMOVE_FEATURE, payload: id});
            dispatch({type: SET_FETCHING, payload: false})
        }).catch(error => {
            dispatch({type: SET_ERROR, payload: error});
            dispatch({type: SET_FETCHING, payload: false})
        });
    }
}