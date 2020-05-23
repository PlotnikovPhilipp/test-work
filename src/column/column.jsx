import React from 'react';
import './column.css';
import Card from '../card/card';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
    if(state.index + 1 != ownProps.index) return;
    state.self.columnBody.removeChild(state.card);
    ownProps.addCard(state.text); 
}

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
        this.columnBody = null;
        this.props.addCard = this.addCard;
        this.state = {
            cardList: []
        };
    }

    addCard(text) {
        text = (text)? text : prompt('Введите текст', '');
        if(!text) return;
        this.setState((prevState) => this.state.cardList.push(<Card column={ this } index={ this.props.index } key={ text } text={ text } />));
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
                <section ref={(ref) => { this.columnBody = (this.columnBody == null || ref != null)? ref : this.columnBody }} className="column__body">
                    { (this.state.cardList)? this.state.cardList : null }
                </section>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Column);