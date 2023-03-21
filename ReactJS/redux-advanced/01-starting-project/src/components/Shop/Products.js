import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  { 
    id: 'p1', 
    price: 3, 
    title: 'Regular Bread', 
    description: 'simple white flour bread',
  },
  { 
    id: 'p2', 
    price: 5, 
    title: 'Whole-grain seeds bread', 
    description: 'Bread made with whole-grain flour and 5 different seeds',
  },
  { 
    id: 'p3', 
    price: 10, 
    title: 'Sourdough Bread', 
    description: 'Sourdough bread with long fermentation. Nice crust and lots of crumb',
  },
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
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
