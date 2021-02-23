import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const App = () => (<div>
  <h1>Важные дела:</h1>
  <InputItem />
  <ItemList />
  <Footer />
  </div>);

export default App;
