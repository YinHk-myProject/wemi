import TextField from '@mui/material/TextField';
import * as React from 'react';
import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
    container: {
        width: '100%',
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})



const TextInputBox = props => {
    const { id, label, placeholder, type, maxLength=null  } = props;
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <TextField 
              id={id}
              label={label}
              placeholder={placeholder}
              multiline
              variant="standard"
              maxLength={maxLength}
            />
        </div>
    );

}

export default TextInputBox;