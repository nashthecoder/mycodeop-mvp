import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

render () {
    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Report Submitted"/>
                <h3> Thank you for your report submission</h3>
                <h6>You will get an email with a copy of the completed report</h6>

                <form>
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
            </React.Fragment>
        </MuiThemeProvider>
    )
}

}

export default Success;