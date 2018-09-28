import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import ControlledInput from './controlledInput';

/**
 * Dialogs can be nested. This example opens a Date Picker from within a Dialog.
 */
export default class DialogExampleDialogDatePicker extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { open: true, labelValue:''}
    this.handleClose = this.handleClose.bind(this);
    this.handleTextField = this.handleTextField.bind(this);
  }

  handleClose = () => {
    this.setState({open: false});
    this.props.handleLabelValue(this.state.labelValue);
  };

  handleTextField = (props) =>{
      this.setState({labelValue: props});
  }

  render() {
    const actions = [
      <FlatButton
        label="Add"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div>
        {/* <RaisedButton label="Dialog With Date Picker" onClick={this.handleOpen} /> */}
        <Dialog
          title="Enter List Label"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <ControlledInput handleTextField = {this.handleTextField} />
        </Dialog>
      </div>
    );
  }
}