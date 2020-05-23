import React from 'react';
import { Column } from './column/column';

import './board.css';

const amountOfColumns = 4;
const columnList = [];
const columnSettings = [
  {
    id: 'Наряды',
    title: 'Наряды',
    color: 'gray'
  },

  {
    id: 'В работе',
    title: 'В работе',
    color: 'green'
  },

  {
    id: 'Приемка',
    title: 'Приемка',
    color: 'orange'
  },

  {
    id: 'Завершено',
    title: 'Завершено',
    color: 'blue'
  }
];

class Board extends React.Component {
  constructor(props) {
    super(props);
    for(let i = 0; i < amountOfColumns; i++) {
      columnList.push(<Column key={ columnSettings[i].id } title={ columnSettings[i].title } color={ columnSettings[i].color }/>);
    }
  }

  render() {
    return(
      columnList
    );
  }
}

export default Board;
