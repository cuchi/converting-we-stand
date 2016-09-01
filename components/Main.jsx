/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { deepOrange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';

const muiTheme = getMuiTheme({
    palette: {
        accent1Color: deepOrange500
    }
});

const style = {
    margin: 12
};

class Main extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={ muiTheme }>
                <div>
                    <TextField
                        hintText="Type a Value"
                        floatingLabelText="Value"
                        style={ style }
                        ref={ 'valueFrom' }
                    />
                    <DropDownMenu ref={ 'unityFrom' } value={ 1 } style={ style }>
                        <MenuItem value={ 1 } primaryText="Minutes"/>
                        <MenuItem value={ 60 } primaryText="Hours"/>
                        <MenuItem value={ 24 * 60 } primaryText="Days"/>
                        <MenuItem value={ 7 * 24 * 60 } primaryText="Weeks"/>
                        <MenuItem value={ 30 * 7 * 24 * 60 } primaryText="Months"/>
                        <MenuItem value={ 365 * 30 * 7 * 24 * 60 } primaryText="Years"/>
                        <MenuItem value={ 10 * 365 * 30 * 7 * 24 * 60 } primaryText="Decades"/>
                    </DropDownMenu>
                    <TextField
                        hintText="Type a Value"
                        floatingLabelText="Value"
                        style={ style }
                        ref={ 'valueTo' }
                    />
                    <DropDownMenu ref={ 'unityTo' } value={ 1 } style={ style }>
                        <MenuItem value={ 1 } primaryText="Minutes"/>
                        <MenuItem value={ 60 } primaryText="Hours"/>
                        <MenuItem value={ 24 * 60 } primaryText="Days"/>
                        <MenuItem value={ 7 * 24 * 60 } primaryText="Weeks"/>
                        <MenuItem value={ 30 * 7 * 24 * 60 } primaryText="Months"/>
                        <MenuItem value={ 365 * 30 * 7 * 24 * 60 } primaryText="Years"/>
                        <MenuItem value={ 10 * 365 * 30 * 7 * 24 * 60 } primaryText="Decades"/>
                    </DropDownMenu>
                    <RaisedButton label="Convert" primary={ true } style={ style }/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
