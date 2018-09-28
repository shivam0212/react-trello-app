import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import AddIcon from 'material-ui/svg-icons/content/add'
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Drawer from './drawer';

const dividerstyle = {
    margin: "-1px 3px 0px 3px"
};

function ToDoList(props) {
    const listEntries = props.toDos;
    const updatedListEntries = listEntries.map((listItems) => {
        return(
            <ListItem
            leftAvatar={<Avatar icon={<FileFolder />} />}
            rightIcon={<ActionInfo />}
            primaryText={listItems}
            key={Date.now()}
        />);        
    });
    return(<List>{updatedListEntries}</List>)
}

class ListExampleFolder extends React.Component {

    constructor(props) {
        super(props);
        this.state = { addCard: false, toDoList: [] };
        this.handleClick = this.handleClick.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleClick = () => { this.setState({ addCard: true })};

    handleUpdate = (props) => {
        alert(props);
        //this.setState({ addCard: false, toDoList: [...this.state.toDoList, props] });
        this.setState((prevState) => { return { toDoList: prevState.toDoList.concat(props), addCard: false }; });
    }

    render() {       
        if (this.state.addCard === true)
            return (<Drawer handleUpdate={this.handleUpdate} />);
        else
            return (
                <MuiThemeProvider>
                    <List>
                        <ListItem onClick={this.handleClick}
                            rightIcon={<AddIcon />}
                            primaryText={this.props.label}
                        />
                        <Divider style={dividerstyle} />
                    </List>
                        <ToDoList toDos={this.state.toDoList} />
                </MuiThemeProvider>
            )
    }
}

export default ListExampleFolder;