import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector,useDispatch } from "react-redux";
import { fetchCartData, sendCartData } from "./store/cart-actions";

import Notification from "./components/UI/Notification";

let isInitial = true ;

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.uiReducer.cartIsVisible);
  const cart = useSelector((state) => state.cartReducer);
  const notification = useSelector(state => state.uiReducer.notification)

useEffect(()=>{
dispatch(fetchCartData());
},[dispatch]);
  useEffect(() => {
   if(isInitial){
    isInitial = false ;
    return ;
   }
   if(cart.changed){
    dispatch(sendCartData(cart));
   }
   
  }, [cart,dispatch]);

  return (
    <>
    { notification &&  <Notification status={notification.status} title={notification.title} message={notification.message}/>}
<Layout>
      {toggle && <Cart />}
      <Products />
    </Layout>
   
    </>
   
    
  );
}

export default App;
