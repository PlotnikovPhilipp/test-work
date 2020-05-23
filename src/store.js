import { createStore } from 'redux';

function reducer(state = null, action) {
    if(!state) return { currentIndex: -1, text: '' };
    switch(action.type) {
        case 'MOVE_CARD':
            return { currentIndex: action.index, text: action.text }
            break;
    }
}

export let store = createStore(reducer);