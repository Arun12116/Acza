
let items = {

    product: [],
    productDeatiles: [],
    addToCart: [],
    totalAmount: 0

}

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

        case "TOTALAMOUNT": {
            return {
                ...state,


            }
        }
        default: { return state }

    }

}


export default myReducer