import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import FormControl from '@material-ui/core/FormControl';
import RaisedButton from 'material-ui/RaisedButton';

export class NarrativeForm extends Component {
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
                <FormControl>
                <TextField 
                hintText="Enter Date XXXX - XX - XX"
                floatingLabeltext="Report Period"
                onChange={handleChange('reportPeriod')}
                defaultValue={values.reportPeriod}
                />
                <br/>
                <div>
                <TextField 
                hintText="Enter Project Summary"
                floatingLabeltext=" Project Summary "
                onChange={handleChange('projectSummary')}
                defaultValue={values.projectSummary}
                />
                <TextField 
                hintText="Enter Task Completed"
                floatingLabeltext="Task Completed"
                onChange={handleChange('taskCompleted')}
                defaultValue={values.taskCompleted}
                />
                </div>
                <br/>
                <TextField 
                hintText="Enter Task Pending"
                floatingLabeltext="Task Pending"
                onChange={handleChange('taskPending')}
                defaultValue={values.region}
                />
                <br/>
                <TextField 
                hintText="Enter Task Delayed"
                floatingLabeltext="TasksDelayed"
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
                </FormControl>
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

export default NarrativeForm
