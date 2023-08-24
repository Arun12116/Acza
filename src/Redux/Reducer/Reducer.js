
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
        case "addMeansClothes":
            {
                // console.log(action.payload,"deletecart")

                return {

                    ...state,

                    meanData: state.product.filter((ele) => ele.category === action.payload)
                        

                    



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