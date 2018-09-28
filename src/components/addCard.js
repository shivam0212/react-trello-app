import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { red100 } from 'material-ui/styles/colors';
import './components.css';



function Listcards(props) {
    const allCards = props.cards;
    const updatedCards = allCards.map((listItems) => {
        return (
         listItems.text 
        )
    });

    return (
        <div>{updatedCards}</div>

    );
}

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = { cards: [] };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {

        var newCard = {
            text:<input className='inputbox' type="text" name="name" />,
                key: Date.now()

        };
                this.setState((prevState) => { return { cards: prevState.cards.concat(newCard) }; });

    }



    render() {
        return (
            <div>
                <input className='titlebox' placeholder='Enter Title' type="text" name="name" />
                <Listcards cards={this.state.cards} />
                <MuiThemeProvider>
                            <RaisedButton label="Add Card" backgroundColor={red100} onClick={(e) => { this.handleClick(); }} />
                        </MuiThemeProvider>
            </div>

        );
    }
}