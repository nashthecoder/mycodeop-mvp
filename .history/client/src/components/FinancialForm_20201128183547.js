import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Grid from '@material-ui/core/Grid';

export class FinancialForm extends Component {
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
                <AppBar title="Financial Report Section" />
                <br></br>
                <Grid container spacing={5}>
                    <Grid>
                        <TextField 
                        id="outlined-secondary"
                        hintText="Administration"
                        floatingLabeltext="Budget Line"
                        onChange={handleChange('budgetLine')}
                        defaultValue={values.budgetLine}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Project Budget"
                        floatingLabeltext="Project Budget"
                        onChange={handleChange('projectBudget')}
                        defaultValue={values.projectBudget}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Forecast Amount"
                        floatingLabeltext="Forecast Amount"
                        onChange={handleChange('forecastAmount')}
                        defaultValue={values.forecastAmount}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Actual Amount"
                        floatingLabeltext="Actual Amount"
                        onChange={handleChange('actualAmount')}
                        defaultValue={values.actualAmount}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        id="outlined-secondary"
                        hintText="Logistics"
                        floatingLabeltext="Budget Line"
                        onChange={handleChange('budgetLine')}
                        defaultValue={values.budgetLine}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Project Budget"
                        floatingLabeltext="Project Budget"
                        onChange={handleChange('projectBudget')}
                        defaultValue={values.projectBudget}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Forecast Amount"
                        floatingLabeltext="Forecast Amount"
                        onChange={handleChange('forecastAmount')}
                        defaultValue={values.forecastAmount}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Actual Amount"
                        floatingLabeltext="Actual Amount"
                        onChange={handleChange('actualAmount')}
                        defaultValue={values.actualAmount}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        id="outlined-secondary"
                        hintText="Overheads"
                        floatingLabeltext="Budget Line"
                        onChange={handleChange('budgetLine')}
                        defaultValue={values.budgetLine}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Project Budget"
                        floatingLabeltext="Project Budget"
                        onChange={handleChange('projectBudget')}
                        defaultValue={values.projectBudget}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Forecast Amount"
                        floatingLabeltext="Forecast Amount"
                        onChange={handleChange('forecastAmount')}
                        defaultValue={values.forecastAmount}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Actual Amount"
                        floatingLabeltext="Actual Amount"
                        onChange={handleChange('actualAmount')}
                        defaultValue={values.actualAmount}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        id="outlined-secondary"
                        hintText="Incidentals"
                        floatingLabeltext="Budget Line"
                        onChange={handleChange('budgetLine')}
                        defaultValue={values.budgetLine}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Project Budget"
                        floatingLabeltext="Project Budget"
                        onChange={handleChange('projectBudget')}
                        defaultValue={values.projectBudget}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Forecast Amount"
                        floatingLabeltext="Forecast Amount"
                        onChange={handleChange('forecastAmount')}
                        defaultValue={values.forecastAmount}
                        />
                    </Grid>
                    <Grid>
                        <TextField 
                        hintText="Actual Amount"
                        floatingLabeltext="Actual Amount"
                        onChange={handleChange('actualAmount')}
                        defaultValue={values.actualAmount}
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
                        <RaisedButton label="Submit"
                        primary={false}
                        style={styles.button}
                        onClick={this.continue}
                        />
                    </Grid>
                </Grid>
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

export default FinancialForm
