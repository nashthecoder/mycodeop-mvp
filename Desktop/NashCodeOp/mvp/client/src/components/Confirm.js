import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Narrative Report" />
                <TextField 
                hintText="Enter Reporting Period"
                floatingLabeltext="Reporting Period"
                onChange={handleChange('reportPeriod')}
                defaultValue={values.reportPeriod}
                />
                <br/>
                <TextField 
                hintText="Enter Project Summary"
                floatingLabeltext="Project Summary"
                onChange={handleChange('projectSummary')}
                defaultValue={values.projectSummary}
                />
                <br/>
                <TextField 
                hintText="Enter Tasks Completed"
                floatingLabeltext="Tasks Completed"
                onChange={handleChange('taskCompleted')}
                defaultValue={values.taskCompleted}
                />
                <br/>
                <TextField 
                hintText="Enter Tasks Pending"
                floatingLabeltext="Tasks Pending"
                onChange={handleChange('taskPending')}
                defaultValue={values.region}
                />
                <br/>
                <TextField 
                hintText="Enter Tasks Delayed"
                floatingLabeltext="Tasks Delayed"
                onChange={handleChange('taskDelayed')}
                defaultValue={values.taskDelayed}
                />
                <br/>
                <TextField 
                hintText="Enter Risks"
                floatingLabeltext="Risks"
                onChange={handleChange('risks')}
                defaultValue={values.risks}
                />
                <br/>
                <TextField 
                hintText="Enter Issues"
                floatingLabeltext="Issues"
                onChange={handleChange('issues')}
                defaultValue={values.issues}
                />
                <br/>
                <RaisedButton label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
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
