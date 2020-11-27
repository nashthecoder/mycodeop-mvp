import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
                <TextField 
                hintText="Insert Organisation Name"
                floatingLabeltext="Organisation Name"
                onChange={handleChange('orgName')}
                defaultValue={values.orgName}
                />
                <br/>
                <TextField 
                hintText="Insert Project Name"
                floatingLabeltext="Project Name"
                onChange={handleChange('projectName')}
                defaultValue={values.projectName}
                />
                <br/>
                <TextField 
                hintText="Insert Project Code"
                floatingLabeltext="Project Code"
                onChange={handleChange('projectCode')}
                defaultValue={values.projectCode}
                />
                <br/>
                <TextField 
                hintText="Insert Region"
                floatingLabeltext="Region"
                onChange={handleChange('region')}
                defaultValue={values.region}
                />
                <br/>
                <TextField 
                hintText="Insert City"
                floatingLabeltext="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
                />
                <br/>
                <TextField 
                hintText="Insert Grant Amount"
                floatingLabeltext="Grant Amount"
                onChange={handleChange('grantAmount')}
                defaultValue={values.grantAmount}
                />
                <br/>
                <TextField 
                hintText="Insert Grant Period"
                floatingLabeltext="Grant Period"
                onChange={handleChange('grantPeriod')}
                defaultValue={values.grantPeriod}
                />
                <br/>
                <RaisedButton label="Create User"
                primary={true}
                style={styles.button}
                onClick={this.submit}
                />
                <RaisedButton label="Report"
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

export default OrgForm
