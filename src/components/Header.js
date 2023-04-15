import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { authAction } from '../store/auth-slice';

const Header = () => {
  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    dispatch(authAction.logout())
  }
  const isAuthenticated = useSelector(state => state.authenticationReducer.isAuthenticated)
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
