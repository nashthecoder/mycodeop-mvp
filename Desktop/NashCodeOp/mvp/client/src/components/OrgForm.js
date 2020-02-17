import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class OrgForm extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Grantee Organisation Details" />
                <TextField 
                hintText="Enter Organisation Name"
                floatingLabeltext="Organisation Name"
                onChange={handleChange('orgName')}
                defaultValue={values.orgName}
                />
                <br/>
                <TextField 
                hintText="Enter Project Name"
                floatingLabeltext="Project Name"
                onChange={handleChange('projectName')}
                defaultValue={values.projectName}
                />
                <br/>
                <TextField 
                hintText="Enter Project Code"
                floatingLabeltext="Project Code"
                onChange={handleChange('projectCode')}
                defaultValue={values.projectCode}
                />
                <br/>
                <TextField 
                hintText="Enter Region"
                floatingLabeltext="Region"
                onChange={handleChange('region')}
                defaultValue={values.region}
                />
                <br/>
                <TextField 
                hintText="Enter City"
                floatingLabeltext="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                />
                <br/>
                <TextField 
                hintText="Enter Grant Amount"
                floatingLabeltext="Grant Amount"
                onChange={handleChange('grantAmount')}
                defaultValue={values.grantAmount}
                />
                <br/>
                <TextField 
                hintText="Enter Grant Period"
                floatingLabeltext="Grant Period"
                onChange={handleChange('grantPeriod')}
                defaultValue={values.grantPeriod}
                />
            </React.Fragment>
        </MuiThemeProvider>
             
        )
    }
}

export default OrgForm
