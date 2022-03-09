import { Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import React, { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { login, signUp } from '../../services/firebase';

export const Home = ({ isSignUp }) => {
    const [values,setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    })
    const [error,setError] = useState("")

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    };

    const handleSignUp = async () => {
        try {
            await signUp(values.email,values.password);
        } catch (e) {
            setError(e.message);
        }
    }

    const handleSignIn = async () => {
        try {
            await login(values.email,values.password);
        } catch (e) {
                setError(e.message);
        }
    }

const handleClick = (e) => {
    e.preventDefault();

    if(isSignUp) {
        handleSignUp()
    } else {
        handleSignIn()
    }
    setValues({password: '', email: ''})
}


  return (
    <Box sx={{ 
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center" }}>
    <h2>{isSignUp ? "SignUp" : "Login"}</h2>
    <Link to={`${isSignUp ? '/' : '/signup'}`}>
        {!isSignUp ? "SignUp" : "Login"}</Link>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel>Password</InputLabel>
          <FilledInput
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
            <InputLabel>Email</InputLabel>
            <FilledInput
                type='email'
                value={values.email}
                onChange={handleChange('email')}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                      edge="end">
                        <MailIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="email"
            />
        </FormControl>
            <Button onClick={handleClick} variant="outlined">{isSignUp ? "SignUp" : "Login"}</Button>
            {error && <span>{error}</span>}
    </Box>
  )
}
