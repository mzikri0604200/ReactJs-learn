/* eslint-disable react/prop-types */
import CardProduct from './components/CardProduct';

function App() {
  return (
    <CardProduct>
      <CardProduct.Header title="Title Card" />
      <CardProduct.Body imgLink="https://picsum.photos/500/280?r=1" />
      <CardProduct.Footer price="51.000" />
    </CardProduct>
  );
}

export default App;
