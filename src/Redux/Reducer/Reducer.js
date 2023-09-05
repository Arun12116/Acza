let items = {
    product: [],
    productDeatiles: [],
    addToCart: [],
    totalAmount: 0,
    filterData: []

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
        case "setFilterData": {
            return {
                ...state,
                filterData: action.payload


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

        case "allProduct": {
            return {
                ...state,
                product: state.filterData
            }
        }

        case "meansClothes": {
            return {
                ...state,

                product: state.filterData.filter((ele) => ele.category === "men's clothing")

            }

        }


        case "womansClothes": {
            return {
                ...state,

                product: state.filterData.filter((ele) => ele.category === "women's clothing")

            }

        }
        case "jwerlary": {
            return {
                ...state,

                product: state.filterData.filter((ele) => ele.category === "jewelery")

            }

        }
        case "electronic": {
            return {
                ...state,

                product: state.filterData.filter((ele) => ele.category === "electronics")

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





// const allData = () => {

    // const options = {
    //   method: 'GET',
    //   url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
    //   params: {
    //     query: 'eiffel tower',
    //     lang: 'en_US',
    //     units: 'km'
    //   },
    //   headers: {
    //     'X-RapidAPI-Key': 'f0f97a3897msh90131b983abf563p16fdaejsn3bddd5e702fc',
    //     'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    //   }
    // };

    // try {
    // 	const response = await axios.request(options);
    // 	console.log(response.data);
    // } catch (error) {
    // 	console.error(error);
    // }




// }

// const axios = require('axios');
