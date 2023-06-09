import classes from './CartButton.module.css';
import { useDispatch ,useSelector } from 'react-redux';
import { uiActions } from '../../store/UI-slice';


const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cartReducer.totalQuantity);
  
  const dispatch = useDispatch()

  const toggleCartHandler =()=>{
    dispatch(uiActions.toggle());
  }


  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
