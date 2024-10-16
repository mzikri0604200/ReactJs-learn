/* eslint-disable react/prop-types */

// import Header from './components/Header';
// import ButtonLike from './components/ButtonLike';
import CardProduct from './components/CardProduct';
import Board from './pages/TicTacToe';

function App() {
  return (
    <>
      {/* <Header author="React 2023" />
      <ButtonLike>Like</ButtonLike> */}
      <Board />
      <CardProduct>
        <CardProduct.Header />
        <CardProduct.Body />
        <CardProduct.Footer />
      </CardProduct>
    </>
  );
}

export default App;
