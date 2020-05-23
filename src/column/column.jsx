import React from 'react';
import './column.css';
import Card from '../card/card';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    if(state.columnIndex + 1 !== ownProps.columnIndex) return {};
    state.deleteCard(state.cardIndex)
    // state.moveCard(state.cardIndex);
}

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
        this.columnBody = null;
        this.state = {
            cardList: []
        };
    }

    addCard(event, text) {
        text = text || prompt('Введите текст', '');
        this.setState((prevState) => (
            {
                cardList: prevState.cardList.concat({
                    columnIndex: this.props.columnIndex,
                    cardIndex: prevState.cardList.length,
                    deleteCard: this.deleteCard,
                    key: text,
                    text: text
                }
        )
        }));
    }

    deleteCard = (cardIndex) => {
        this.setState((prevState) => {
            return(
                {
                    cardList: prevState.cardList.filter((value, index) => {
                        return index !== cardIndex;
                    })
                }
            );
        });
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
                    { this.state.cardList && this.state.cardList.map(
                        (value, index) => {
                            return(
                                <Card columnIndex={ value.columnIndex } cardIndex={ value.cardIndex } deleteCard={ value.deleteCard } key={ value.key } text={ value.text } />
                            );
                        }
                        )
                    }
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Column);