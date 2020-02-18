import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
//Process for here Fetch. 
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values : { reportPeriod, projectSummary, taskCompleted, 
            taskPending, taskDelayed, risks, issues }} = this.props;
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirm Report Complete" />
                <List>
                    <ListItem>
                        primaryText="Report Period"
                        secondaryText={ reportPeriod }
                    </ListItem>
                    <ListItem>
                        primaryText="Project Summary"
                        secondaryText={ projectSummary }
                    </ListItem>
                    <ListItem>
                        primaryText="Task Completed"
                        secondaryText={ taskCompleted }
                    </ListItem>
                    <ListItem>
                        primaryText="Task Pending"
                        secondaryText={ taskPending }
                    </ListItem>
                    <ListItem>
                        primaryText="Task Delayed"
                        secondaryText={ taskDelayed }
                    </ListItem>
                    <ListItem>
                        primaryText="Risks"
                        secondaryText={ risks }
                    </ListItem>
                    <ListItem>
                        primaryText="Issues"
                        secondaryText={ issues }
                    </ListItem>
                </List>
                <br />
                <RaisedButton label="Confirm & Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                <RaisedButton label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
            </React.Fragment>
        </MuiThemeProvider>   
        )
    }
}

const styles = {
    button: {
        margin: 15
    }

}

export default Confirm
