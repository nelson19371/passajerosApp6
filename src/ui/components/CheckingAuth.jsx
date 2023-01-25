import {CircularProgress, Grid} from '@mui/material';

export const CheckingAuth = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{miniHeight: '100vh', backgroundColor:'primary.warning', padding: 50}}
    >
        <Grid container
            direction='row'
            justifyContent='center'
        >
            <CircularProgress color= 'warning'/>
        </Grid>
        
    </Grid>
  )
}
