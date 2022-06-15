import React, { Fragment, useState, useEffect } from "react";
import {createUseStyles} from 'react-jss';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextInputBox from "./TextInputBox";
import Button from '@mui/material/Button';
import DatePicker from "react-datepicker";
import axios from 'axios';


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

const LoginPage = props => {
    const classes = useStyles();
    const [stateObj, setStateObj] = useState({  });


    return (
        <>
          
        </>
    );
}
