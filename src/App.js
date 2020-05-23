import React from 'react';
import { Column } from './column/column';
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

function mapStateToProps(state, ownProps) {
  if(state.index + 1 != ownProps.index) return;
   
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    for(let i = 0; i < amountOfColumns; i++) {
      columnList.push(
        connect(mapStateToProps)(<Column index={ columnSettings[i].index } key={ columnSettings[i].id } title={ columnSettings[i].title } color={ columnSettings[i].color }/>)
      );
    }
  }

  render() {
    return(
      columnList
    );
  }
}

export default Board;
