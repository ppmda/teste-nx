import { exampleProducts } from '@test-partner/products';
import { Banner } from '@test-partner/common-ui';

export function App() {
  return (
    <>
      <Banner text="Welcome to the store!" />
      <ul>
        {exampleProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> Price: {product.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;