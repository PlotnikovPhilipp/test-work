import React from 'react';

import './card.css';
import { connect } from 'react-redux';

export class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <p>
                    { this.props.text }
                </p>
                <footer className="card__footer">
                    <img title="move to right column" onClick={ () => this.props.dispatch({ type: 'MOVE_CARD', index: this.props.index, self: this.props.column, card: this }) } className="card__right-arrow" src="./imgs/right-arrow.png" alt="move right"/>
                </footer>
            </div>
        );
    }
}

export default connect()(Card);