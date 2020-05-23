import { createStore } from 'redux';

function reducer(state = null, action) {
    switch(action.type) {
        case 'MOVE_CARD':
            return ({
                    columnIndex: action.columnIndex,
                    cardIndex: action.cardIndex,
                    deleteCard: action.deleteCard 
                });
        default:
            return(
                { currentIndex: -1, text: '' }
            );
    }
}

export let store = createStore(reducer);