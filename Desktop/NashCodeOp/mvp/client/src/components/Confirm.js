/* import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, ListItemText} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
//Process for here Fetch. 
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { 
            values: { reportPeriod, projectSummary, taskCompleted, 
            taskPending, taskDelayed, risks, issues }
        } = this.props;
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Confirm Report Data" />
                <List>
                    <ListItem>
                        <ListItemText primary="Report Period"
                        secondary={ reportPeriod } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Project Summary"
                        secondary={ projectSummary } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Task Completed"
                        secondary={ taskCompleted } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Task Pending"
                        secondary={ taskPending } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Task Delayed"
                        secondary={ taskDelayed } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Risks"
                        secondary={ risks } />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Issues"
                        secondary={ issues } />
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

export default Confirm;
 */