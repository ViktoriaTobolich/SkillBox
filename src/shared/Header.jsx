import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import  styles from './header.css';

function HeaderComponent(){

  return(

    <header ><h2 className={styles.test}>Hello React</h2></header>
  );
}

export const Header = hot(HeaderComponent);
