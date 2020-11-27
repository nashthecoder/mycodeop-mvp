import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
                <AppBar title="Financial Report" />
                <TextField 
                hintText="Enter Budget Line"
                floatingLabeltext="Budget Line"
                onChange={handleChange('budgetLine')}
                defaultValue={values.budgetLine}
                />
                <br/>
                <TextField 
                hintText="Enter Project Budget"
                floatingLabeltext="Project Budget"
                onChange={handleChange('projectBudget')}
                defaultValue={values.projectBudget}
                />
                <br/>
                <TextField 
                hintText="Enter Forecast Amount"
                floatingLabeltext="Forecast Amount"
                onChange={handleChange('forecastAmount')}
                defaultValue={values.forecastAmount}
                />
                <br/>
                <TextField 
                hintText="Enter Actual Amount"
                floatingLabeltext="Actual Amount"
                onChange={handleChange('actualAmount')}
                defaultValue={values.actualAmount}
                />
                {/* <br/>
                <TextField 
                hintText="Enter Totals"
                floatingLabeltext="Totals"
                onChange={handleChange('totals')}
                defaultValue={values.totals} */}
            
                <br/>
                <RaisedButton label="Submit"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                <br/>
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

export default FinancialForm
