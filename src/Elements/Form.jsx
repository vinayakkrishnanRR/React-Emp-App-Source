import { Button, Grid, Paper, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './pages.css'

const Form = () => {
  return (    
      <Grid container textAlign={'center'} justifyContent="center" marginTop={'2.5%'}>
        <Paper style={{maxWidth:'400px', padding:'0% 3.5% 4.5% 3.5%'}}>      
          <Grid><h1 className='formHead'>Employee Form</h1></Grid>
          <TextField id="standard-basic" label="Name" variant="standard" fullWidth/><br /><br />
          <TextField id="standard-basic" label="Designation" variant="standard" fullWidth/><br /><br />
          <TextField id="standard-basic" label="Location" variant="standard" fullWidth/><br /><br />
          <TextField id="standard-basic" label="Salary" variant="standard" fullWidth/><br /><br />
            <Button variant="contained" fullWidth>
              <Link to={'/React-Emp-APP'} style={{color: 'white', textDecoration:'none'}}>SUBMIT</Link>
            </Button><br /><br />
            <Button variant="contained" fullWidth>
              <Link to={'/detail'} style={{color: 'white', textDecoration:'none'}}>Return to Employee List</Link>
            </Button>
        </Paper>
      </Grid>
  )
}

export default Form
