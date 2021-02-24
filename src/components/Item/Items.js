import React from 'react';
import classnames from 'classnames';
import styles from './Items.module.css';

const Item = ({ value, isDone }) =>(<span className={
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>
  {value}
</span>);

export default Item;
