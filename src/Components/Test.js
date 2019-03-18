import React from 'react';
import Dialog from '@material-ui/core/Dialog';

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const testTheme = createMuiTheme({
    palette: {
        // type: 'il',
        primary: {
            // light: '#0F24FB',
            main: '#7D26CD',
            // dark: '#7D26CD',
            contrastText: '#fff'
        }
    }
})

class Test extends React.Component {
  state = {
      open: false
  };

  componentDidMount() {
    this.forceUpdate();
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
   

    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
        //   aria-labelledby="form-dialog-title"
        >
            <MuiThemeProvider theme={testTheme}>
                <TextField
                    id="outlined-name"
                    label="username"
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    style={{marginLeft: '100px', marginRight: '100px', marginTop: '75px'}}
                />
                <TextField
                    id="outlined-name"
                    label="password"
                    type='password'
                    // className={classes.textField}
                    // value={this.state.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                    style={{marginLeft: '100px', marginRight: '100px'}}
                />
                
            </MuiThemeProvider>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Login
            </Button>
        </Dialog>
        
        
      </div>
    );
  }
}


export default Test;