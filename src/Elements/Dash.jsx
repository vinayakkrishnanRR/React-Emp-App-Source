import React from 'react'
import { Button, Grid } from '@mui/material'
import './pages.css'
import { Link } from 'react-router-dom'

const Dash = () => {
  return (
    <Grid container textAlign={'center'} justifyContent="center">
      <Grid>
        <h1 className='dashHead'>Welcome, User!</h1>
        <Button variant="contained" className='btn' fullWidth>
          <Link to={'/detail'} style={{color: 'white', textDecoration:'none'}}>Browse Employee Credentials</Link>
          </Button><br /> <br />  
        <Button variant="contained" className='btn' fullWidth>
          <Link to={'/add'} style={{color: 'white', textDecoration:'none'}}>Fill Employee Form</Link>
        </Button>
      </Grid>
    </Grid>
  )
}
export default Dash
