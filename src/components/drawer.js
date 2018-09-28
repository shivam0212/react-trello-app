import React from 'react';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import ControlledInput from './controlledInput';

export default class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = { open: true, cardValue: '' };
        this.handleTextField = this.handleTextField.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleTextField = (props) => this.setState({cardValue: props});

    handleToggle(event){
        event.preventDefault();
        this.setState({ open: false });
        this.props.handleUpdate(this.state.cardValue);
    }
    handleToggle1 = (event) => {
        event.preventDefault();
        this.setState({ open: false });
        this.props.handleUpdate(this.state.cardValue);
    }
    render() {
        return (
            <div>
                <Drawer open={this.state.open}>
                    <ControlledInput handleTextField = {this.handleTextField} />
                    <RaisedButton
                        label="Add Card"
                        onClick={this.handleToggle}
                    />
                </Drawer>
            </div>
        );
    }
}