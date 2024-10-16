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
        <CardProduct.Header title="Title Card" />
        <CardProduct.Body imgLink="https://picsum.photos/500/280?r=1" />
        <CardProduct.Footer price="51.000" />
      </CardProduct>
    </>
  );
}

export default App;
