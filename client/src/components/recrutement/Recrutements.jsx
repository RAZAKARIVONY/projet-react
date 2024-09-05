import { Grid } from '@mui/material'
import React from 'react'
import Form from './Form'
import DenseTable from './DenseTable'

function Recrutements() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Form/>
        </Grid>
        <Grid item xs={10} md={8} lg={8}>
          <DenseTable/>
        </Grid>
      </Grid>
    </>
  )
}

export default Recrutements