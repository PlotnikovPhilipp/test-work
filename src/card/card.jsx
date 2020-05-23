import React from 'react';

import './card.css';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.moveToRightColumn = this.moveToRightColumn.bind(this);
    }

    moveToRightColumn() {
        
    }

    render() {
        return(
            <div className="card">
                <p>
                    { this.props.text }
                </p>
                <footer className="card__footer">
                    <img title="move to right column" onClick={ this.moveToRightColumn } className="card__right-arrow" src="./imgs/right-arrow.png" alt="move right"/>
                </footer>
            </div>
        );
    }
}