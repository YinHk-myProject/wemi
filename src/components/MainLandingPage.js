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

import "react-datepicker/dist/react-datepicker.css";


const useStyles = createUseStyles({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0ffe8'
    },
    wrapper: {
        width: '50%',
        marginTop: 200,
        borderColor: '#2CD889',
        borderWidth: 20,
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        marginBottom: 0,
    }
})

const MainLandingPage = props => {
    const classes = useStyles();
    const [stateObj, setStateObj] = useState({ picker: false, name: null, date: null });

    const openDatePicker = (e) => {
        setStateObj({
            ...stateObj,
            picker: true
        });
    }

    const closeDatePicker = (e) => {
        setStateObj({
            ...stateObj,
            picker: false
        });
    }

    async function getToken(name, date) {
        try{
            let res = await axios.post(
                'https://wemi-round2-server.herokuapp.com/round2/authentication',
                {
                    displayName: name,
                    displayDate: date
                }
            );
            let token = await res.data.access_token;
            return token;
        } catch(error) {
            console.log(error);
        }
    }

    return (
      <>
        <div className={classes.container}>
            <Card className={classes.wrapper} sx={{ borderColor: '#1c913b'}}> 
                <Typography sx={{ fontSize: 14 }} color="green">W</Typography>
                <CardContent>
                  <TextInputBox 
                    id='input_name'
                    label='user name'
                    placeholder='Username'
                    type='text'
                    maxLength={20}
                    onBlur={(e)=>setStateObj({...stateObj, name: e.target.value})}
                  />
                  <TextInputBox 
                    id='date'
                    label='date'
                    placeholder='Date'
                    type='date'
                    onclick={()=>openDatePicker()}
                    onBlur={()=>closeDatePicker()}
                  />
                  { stateObj.picker===true? <DatePicker />:null }
                  <Button 
                    sx={{width: '100%', marginTop: 10, color: '#ffffff', backgroundColor: '#1c913b'}}
                    onClick={getToken(stateObj.name, stateObj.date)}
                  >
                    Get Token
                  </Button>
                </CardContent>
            </Card>
           
        </div>
        <div className={classes.footer}>
              
        </div>
      </>
    );
}

export default MainLandingPage;

