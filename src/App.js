import React from 'react';
import Column from './column/column';
import { store } from './store';
import { Provider, connect } from 'react-redux';

import './board.css';

const amountOfColumns = 4;
const columnList = [];
const columnSettings = [
  {
    id: 'Наряды',
    title: 'Наряды',
    color: 'gray',
    index: 0,
  },

  {
    id: 'В работе',
    title: 'В работе',
    color: 'green',
    index: 1
  },

  {
    id: 'Приемка',
    title: 'Приемка',
    color: 'orange',
    index: 2
  },

  {
    id: 'Завершено',
    title: 'Завершено',
    color: 'blue',
    index: 3
  }
];

class Board extends React.Component {
  render() {
    return(
      <Provider store={ store }>
       { columnSettings.map(
         (value, index) => {
          return(
            <Column index={ value.index } key={ value.id } color={ value.color } title={ value.title } />
          );
         }
       ) }
      </Provider>
    );
  }
}

export default Board;
