import React from 'react';
import './column.css';
import Card from '../card/card';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    if(!state.needMove) return { needMove: false, cardText: '' };
    if(state.columnIndex + 1 !== ownProps.columnIndex) return {};
    return {
        cardText: state.cardText,
        needMove: true
    }
}

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
        this.state = {
            cardList: []
        };
    }

    addCard(event, text) {
        text = text || prompt('Введите текст', '');
        this.setState((prevState) => {
            return({
                cardList: prevState.cardList.concat({
                    columnIndex: this.props.columnIndex,
                    cardIndex: prevState.cardList.length,
                    deleteCard: this.deleteCard,
                    key: text + prevState.cardList.length,
                    text: text
                })
            })
        });
    }

    componentDidUpdate() {
        if(this.props.needMove) {
            this.props.dispatch({type: 'MOVE_END'});
            this.addCard(undefined, this.props.cardText);
        }
        
    }

    deleteCard = (cardKey) => {
        this.setState((prevState) => {
            return(
                {
                    cardList: prevState.cardList.filter((value, index) => {
                        return value.key !== cardKey;
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
                                <Card columnIndex={ value.columnIndex } cardKey={ value.key } deleteCard={ value.deleteCard } text={ value.text } />
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