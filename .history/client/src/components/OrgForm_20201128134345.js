import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormControl from '@material-ui/core/FormControl';
import { white } from 'material-ui/styles/colors';

//linked to POST User
export class OrgForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Grantee Organisation Details" />
                <div>
                    <h3 id="form-text">Fill in user details</h3>
                </div>
                <FormControl>
                <TextField 
                id="outlined_multiline-static"
                variant="outlined"
                hintText="Insert Organisation Name"
                floatingLabeltext="Organisation Name"
                onChange={handleChange('orgName')}
                defaultValue={values.orgName}
                />
                <div>
                    <TextField 
                    hintText="Insert Project Name"
                    floatingLabeltext="Project Name"
                    onChange={handleChange('projectName')}
                    defaultValue={values.projectName}
                    />
                    <TextField 
                    hintText="Insert Project Code"
                    floatingLabeltext="Project Code"
                    onChange={handleChange('projectCode')}
                    defaultValue={values.projectCode}
                    />
                </div>
                <div>
                    <TextField 
                    hintText="Insert Region"
                    floatingLabeltext="Region"
                    onChange={handleChange('region')}
                    defaultValue={values.region}
                    />
                    <TextField 
                    hintText="Insert City"
                    floatingLabeltext="City"
                    onChange={handleChange('city')}
                    defaultValue={values.city}
                    />
                </div>
                <div>
                    <TextField 
                    hintText="Insert Grant Amount"
                    floatingLabeltext="Grant Amount"
                    onChange={handleChange('grantAmount')}
                    defaultValue={values.grantAmount}
                    /> 
                    <TextField 
                    hintText="Insert Grant Period"
                    floatingLabeltext="Grant Period"
                    onChange={handleChange('grantPeriod')}
                    defaultValue={values.grantPeriod}
                    />
                </div>
                <br/>
                <div>
                    <RaisedButton label="User Details"
                    primary={true}
                    useStyle={useStyles.button}
                    onClick={this.submit}
                    />
                    <RaisedButton label="Report"
                    primary={true}
                    useStyle={useStyles.button}
                    onClick={this.continue}
                    />
                </div>
                </FormControl>
            </React.Fragment>
        </MuiThemeProvider>   
        )
    }
}

const useStyles = makeStyles ({
    button: {
        margin: 20,
    },
    formText: {
        color: 'white'
    }
});

export default OrgForm
