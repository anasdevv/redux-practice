import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  console.log(items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.length !== 0 &&
          items.map((item) => (
            <CartItem
              id={item.id}
              key={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              total={item.totalPrice}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
