import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';


export class Success extends Component {

render () {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Report Submitted"/>
                <h3> Thank you for your report submission</h3>
                <h6>You will get an email with a copy of the completed report</h6>
            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}

export default Success;