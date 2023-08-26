import {
    ADD_TO_CART, SETPRODUCT, REMOVE_CART,
    PRODUCT_DEATILES, MEANS_CLOTHES, WOMEANS_CLOTHES, JWELARY, ELECTRONIC, FILTER_DATA, ALL_PRODUCT
} from "../ActionType/ActionType"

export const productAction = (data) => {
    return {
        type: SETPRODUCT,
        payload: data

    }

};
export const filterDataAction = (data) => {
    return {
        type: FILTER_DATA,
        payload: data

    }

};
export const getAllData = (data) => {
    return {
        type: ALL_PRODUCT,
        payload: data

    }

};


export const addTocart = (data) => {

    return {
        type: ADD_TO_CART,
        payload: data

    }

}

export const productDeatilesAction = (data) => {

    return {
        type: PRODUCT_DEATILES,
        payload: data

    }

}


export const removeCart = (id) => {
    return {

        type: REMOVE_CART,
        payload: id
    }

}


export const addMeansClothes = (data) => {
    return {

        type: MEANS_CLOTHES,
        payload: data
    }

}
export const addWomanClothes = (data) => {
    return {

        type: WOMEANS_CLOTHES,
        payload: data
    }

}
export const addJwelary = (data) => {
    return {

        type: JWELARY,
        payload: data
    }

}
export const addElectronic = (data) => {
    return {

        type: ELECTRONIC,
        payload: data
    }

}

