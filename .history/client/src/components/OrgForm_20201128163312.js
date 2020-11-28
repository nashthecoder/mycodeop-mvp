import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';

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
            <FormControl>
                <div>
                    <h5 id="form-text">Fill in user details</h5>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField 
                        id="outlined_multiline-static"
                        variant="outlined"
                        hintText="Insert Organisation Name"
                        floatingLabeltext="Organisation Name"
                        onChange={handleChange('orgName')}
                        defaultValue={values.orgName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Insert Project Name"
                        floatingLabeltext="Project Name"
                        onChange={handleChange('projectName')}
                        defaultValue={values.projectName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Insert Project Code"
                        floatingLabeltext="Project Code"
                        onChange={handleChange('projectCode')}
                        defaultValue={values.projectCode}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Insert Region"
                        floatingLabeltext="Region"
                        onChange={handleChange('region')}
                        defaultValue={values.region}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Insert City"
                        floatingLabeltext="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Insert Grant Amount"
                        floatingLabeltext="Grant Amount"
                        onChange={handleChange('grantAmount')}
                        defaultValue={values.grantAmount}
                        /> 
                    </Grid>
                    <Grid item xs={6}>
                        <TextField 
                        hintText="Insert Grant Period"
                        floatingLabeltext="Grant Period"
                        onChange={handleChange('grantPeriod')}
                        defaultValue={values.grantPeriod}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RaisedButton label="Login"
                        primary={true}
                        style={styles.button}
                        onClick={this.submit}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <RaisedButton label="Report"
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
        margin: 15,
    }
};

export default OrgForm
