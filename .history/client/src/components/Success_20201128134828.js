import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

render () {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Success"/>
                <h3> Thank you for your report submission</h3>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

}

export default Success;