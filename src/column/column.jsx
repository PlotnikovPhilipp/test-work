import React from 'react';
import './column.css';
import { Card } from '../card/card';

export class Column extends React.Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
        this.columnBody = null;
        this.state = {
            cardList: []
        };
    }

    addCard() {
        const text = prompt('Введите текст', '');
        if(!text) return;
        this.setState((prevState) => this.state.cardList.push(<Card key={ text } text={ text } />));
    }

    render() {
        return(
            <div className="column">
                {
                    // Header
                }
                <header className="column__head">
                    { this.props.title }
                    <img className="column__add-card" onClick={ this.addCard } src="./imgs/add-card.svg" alt="add card"/>
                </header>

                {
                    // Main part
                }
                <section className="column__body">
                    { (this.state.cardList)? this.state.cardList : null }
                </section>
            </div>
        );
    }
}