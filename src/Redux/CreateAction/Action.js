import { ADD_TO_CART, SETPRODUCT, REMOVE_CART, PRODUCT_DEATILES, MEANS_CLOTHES} from "../ActionType/ActionType"

export const productAction = (data) => {
    return {
        type: SETPRODUCT,
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

