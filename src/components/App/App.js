import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem = 'написать новое приложение';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'написать новое приложение',
        isDone: true,
        id: 1
      },
      {
        value: 'прописать props-ы',
        isDone: false,
        id: 2
      },
      {
        value: 'сделать все дела',
        isDone: true,
        id: 3
      }
    ],
    count: 6
  };

  onClickDone = id => {
    const newItemList = this.state.items.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ items: newItemList });    
  };

  render() {
    return (<div className={styles.wrap}>
      <h1 className={styles.title}>Важные дела:</h1>
      <InputItem />
      <ItemList items={this.state.items} onClickDone={this.onClickDone} />
      <Footer count={this.state.count} />
    </div>);
  }
};

export default App;
