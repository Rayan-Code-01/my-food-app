import { createContext, useContext, useState } from "react";
import { food_list } from "../../assets/assets"

export const StoreContext = createContext(null);
const StoreContextprovider = ((props) => {
    const [cartItems, setCartItems] = useState({});
    const addTocart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

        }
    };


    const removeFromcart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalAmount += iteminfo.price * cartItems[item];
            }
        }
        return totalAmount;
    };



    const contextvalue = {
        food_list,
        cartItems,
        addTocart,
        removeFromcart,
        getTotalCartAmount ,
    };
    return (

        <StoreContext.Provider value={contextvalue}>
            {props.children}
        </StoreContext.Provider>
    )
});
export default StoreContextprovider;