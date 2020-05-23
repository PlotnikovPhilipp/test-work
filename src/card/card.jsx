import React from 'react';

import './card.css';
import { connect } from 'react-redux';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.moveCard = this.moveCard.bind(this);
    }

    moveCard(event) {
        event.stopPropagation();
        this.props.dispatch({ type: 'MOVE_CARD', columnIndex: this.props.columnIndex, cardText: this.props.text });
        this.props.deleteCard(this.props.cardKey);
    }

    openCard = () => {
        alert(this.props.text);
    }

    render() {
        return(
            <div className="card" onClick={ this.openCard }>
                <p>
                    { this.props.text }
                </p>
                <footer className="card__footer">
                    <img title="move to right column" onClick={ this.moveCard } className="card__right-arrow" src="./imgs/right-arrow.png" alt="move right"/>
                </footer>
            </div>
        );
    }
}

export default connect()(Card);