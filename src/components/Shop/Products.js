import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCT = [
  {
    id: 'p1',
    price: 10,
    title: 'My First Book',
    description: 'First Book I ever wrote',
  },
  {
    id: 'p2',
    price: 15,
    title: 'My Second Book',
    description: 'Second Book I ever wrote',
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
