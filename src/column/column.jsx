import React from 'react';
import 'column.css';

export class Column extends React.Component {


    render() {
        return(
            <div className="column">
                {
                    // Header
                }
                <header clasName="column__head">
                    { this.props.title }
                    <img className="column__add-card" src="../imgs/add-card.svg" alt="add card"/>
                </header>

                {
                    // Main part
                }
                <section className="column__body">
                    
                </section>
            </div>
        );
    }
}