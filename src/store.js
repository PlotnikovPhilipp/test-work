import { createStore } from 'redux';

function reducer(state = null, action) {
    switch(action.type) {
        case 'MOVE_CARD':
            return ({
                    columnIndex: action.columnIndex,
                    cardText: action.cardText,
                    needMove: true,
                });
        case 'MOVE_END':
            return({
                currentIndex: -1,
                text: '',
                needMove: false
            })
        default:
            return(
                { 
                    currentIndex: -1,
                    text: '',
                    needMove: false
                }
            )
    }
}

export let store = createStore(reducer);