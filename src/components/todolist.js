import React, { Component } from 'react';
import './components.css';
import 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { blue100 } from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DialogBox from './dialogBox';
import DummyList from './dummyList';
import Paper from 'material-ui/Paper';



function CardList(props) {
    const cards = props.cardList;
    const updatedCards = cards.map((listItems) => {
        return (<Col xs={2} md={3} key={Date.now()}><Paper children={listItems} style={style} zDepth={5} /></Col>);
    });
    return (<Row className="show-grid">{updatedCards}</Row>);
}
const style = {
    height: 400,
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };



export default class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = { allCards: [], addCard: false, labelValue: '' };
        this.handleClick = this.handleClick.bind(this);
        this.handleLabelValue = this.handleLabelValue.bind(this);

    };

    handleClick = (e) => {
        this.setState({ addCard: true });
    }

    handleLabelValue = (props) => {
        debugger;
    var newCard = <DummyList label={props} />;
        this.setState({ addCard: false, allCards: [...this.state.allCards, newCard] });
    }


    render() {
        // if (this.state.addCard === true)
        //     return (<DialogBox handleLabelValue={this.handleLabelValue} />);
        // else
            return (
                <div>
                <DialogBox handleLabelValue={this.handleLabelValue} />
                <Grid className='fluid'>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <MuiThemeProvider>
                                <RaisedButton label="Add List" backgroundColor={blue100}
                                    onClick={(e) => { this.handleClick(); }} />
                            </MuiThemeProvider>
                        </Col>
                    </Row>
                    <CardList cardList={this.state.allCards} />
                </Grid>
                </div>
            );
    }
}