import { createContext,useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalCart :0,
    addCart:(Post) => {},
    removeCart: (postId) => {},
    isCart: (postId) => {}
})

export function CartContextProvider(props) {
    const [userCart,setUserCart] = useState([])

    function addCart(post) {
        setUserCart((previousCart) => {
            return previousCart.concat(post)
        })
    }

    function removeCart(postId) {
        setUserCart((previousCart) => {
            return previousCart.filter((post) => post.id !== postId)
        })
    }

    function isCart(postId) {
        return userCart.some((post) => post.id === postId)//you can use some or find. some function is return true if your pridicate is true. find function is return true on your predicate.
    }

    const context = {
        carts: userCart,
        totalCart : userCart.length,
        addCart,
        removeCart,
        isCart
    }
    
    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}