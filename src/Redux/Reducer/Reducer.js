let items = {
    product: [],
    productDeatiles: [],
    addToCart: [],
    totalAmount: 0,
    meanData: []


}
// console.log(MeanData);

const myReducer = (state = items, action) => {

    switch (action.type) {

        case "setProduct": {
            return {
                ...state,
                product: action.payload


            }
        }
        case "productDeatiles": {
            return {

                ...state,
                productDeatiles: action.payload
            }
        }
        case "addToCart": {
            return {
                ...state,
                addToCart: [...state.addToCart, action.payload]
            }

        }
        case "removeCart":
            {
                // console.log(action.payload,"deletecart")

                return {

                    ...state,
                    addToCart: state.addToCart.filter((items) => items.id !== action.payload)

                }
            }
        case "meansClothes":
            {
                if (action.payload === "all") {
                    return {
                        ...state,

                        meanData: [...state.product]
                    }
                }
                else {
                    return {
                        ...state,

                        meanData: state.product.filter((ele) => ele.category === action.payload)

                    }
                }
                // console.log(action.payload,"deletecart")


            }
        case "womansClothes":
            {
                // console.log(action.payload,"deletecart")

                return {
                    ...state,

                    womenData: state.product.filter((ele) => ele.category === action.payload)

                }
            }



        case "jwerlary":
            {
                // console.log(action.payload,"deletecart")

                return {
                    ...state,

                    jwerlaryData: state.product.filter((ele) => ele.category === action.payload)

                }
            }
        case "electronic":
            {
                // console.log(action.payload,"deletecart")

                return {
                    ...state,

                    electronicData: state.product.filter((ele) => ele.category === action.payload)

                }
            }





        case "TOTALAMOUNT": {
            return {
                ...state,


            }



        }
        default: { return state }

    }

}


export default myReducer