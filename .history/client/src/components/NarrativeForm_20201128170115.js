import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import FormControl from '@material-ui/core/FormControl';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from '@material-ui/core/Grid';
export class NarrativeForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Narrative Report" />
                <FormControl>
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                        <TextField 
                        hintText="Enter Date XXXX - XX - XX"
                        floatingLabeltext="Report Period"
                        onChange={handleChange('reportPeriod')}
                        defaultValue={values.reportPeriod}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        id="outlined-textarea"
                        hintText="Enter Project Summary"
                        floatingLabeltext=" Project Summary "
                        onChange={handleChange('projectSummary')}
                        defaultValue={values.projectSummary}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                        hintText="Enter Task Completed"
                        floatingLabeltext="Task Completed"
                        onChange={handleChange('taskCompleted')}
                        defaultValue={values.taskCompleted}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Enter Task Pending"
                        floatingLabeltext="Task Pending"
                        onChange={handleChange('taskPending')}
                        defaultValue={values.region}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Enter Task Delayed"
                        floatingLabeltext="TasksDelayed"
                        onChange={handleChange('taskDelayed')}
                        defaultValue={values.taskDelayed}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Enter Risks"
                        floatingLabeltext="Risks"
                        onChange={handleChange('risks')}
                        defaultValue={values.risks}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Enter Issues"
                        floatingLabeltext="Issues"
                        onChange={handleChange('issues')}
                        defaultValue={values.issues}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RaisedButton label="Back"
                        primary={true}
                        style={styles.button}
                        onClick={this.back}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RaisedButton label="Next"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        />
                    </Grid>
                </Grid>
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
